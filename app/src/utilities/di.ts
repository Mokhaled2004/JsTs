class DIContainer {
    Classes: Record<
        string,
        {
            def: new (...args: any[]) => any;
            deps: Array<new (...args: any[]) => any>;
            instance?: any;
        }
    >;

    constructor() {
        this.Classes = {};
    }

    register(
        Class: new (...args: any[]) => any,
        deps: Array<new (...args: any[]) => any>
    ) {
        if (!this.Classes[Class.name]) {
            this.Classes[Class.name] = {
                def: Class,
                deps,
            };
        }
    }

    resolve<T>(Class: new (...args: any[]) => T): T {
        const classInfo = this.Classes[Class.name];

        if (!classInfo) {
            throw new Error(`Class ${Class.name} not found`);
        }

        if (classInfo.instance) {
            return classInfo.instance;
        }

        let resolvedDeps = [];
        if (classInfo.deps.length > 0) {
            resolvedDeps.push(
                ...classInfo.deps.map((dep) => this.resolve(dep))
            );
        }

        const instance = new classInfo.def(...resolvedDeps);
        classInfo.instance = instance;
        return instance;
    }
}

const diContainer = new DIContainer();
export default diContainer;

function pairValues<T, K>(a: T, b: K): [T, K] {
    return [a, b];
}

const result = pairValues(342, false);
