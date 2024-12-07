// DI -> Decency Injection
// Angular(frontend framework)/NestJS (Backend framework for NodeJS)

class UserRepository {
    findById(id) {
        return {
            id,
            name: "John"
        }
    }
}
class UserService {
    constructor(logger, UserRepository) {
        this.logger = logger;
        this.UserRepository = UserRepository;
    }

    getUserById(id) {
        this.logger.info(`Getting user by id: ${id}`);
        return this.UserRepository.findById(id);
    }
}

class UserController {
    constructor(userService) {
        this.userService = userService;
    }

    getUserById(id) {
        if (id == null) {
            throw new Error('Invalid Id');
        }
        const user = this.userService.getUserById(id);
        if (user == null) {
            throw new Error('user is not found');
        }

        return user;
    }
}

class Logger {
    info(message) {
        console.log(message);
    }

    error(message) {
        console.error(message);
    }
}

new UserController(
    new UserService(
        new Logger(),
        new UserRepository()
    )
);

// Dependency Injection System/Container

class Container {
    constructor() {
        this.Classes = {};
    }

    register(name, Class, deps) {
        if (!this.Classes[name]) {
            this.Classes[name] = {
                def: Class,
                deps
            };
        }
    }

    resolve(name) {
        const classInfo = this.Classes[name];
        if (!classInfo) {
            throw new Error('Class not found');
        }

        if (classInfo.instance) {
            return classInfo.instance;
        }

        let resolvedDeps = [];
        if (classInfo.deps.length > 0) {
            resolvedDeps.push(
                ...classInfo.deps.map(dep => this.resolve(dep))
            );
        }

        const instance = new classInfo.def(...resolvedDeps);
        classInfo.instance = instance;
        return instance;
    }
}

const DI = new Container();
DI.register('Logger', Logger, []);
DI.register('UserRepository', UserRepository, []);
DI.register('UserService', UserService, ['Logger', 'UserRepository']);
DI.register('UserController', UserController, ['UserService']);

const userController = DI.resolve('UserController');
userController.getUserById('sdsd');
// Inversion Of control