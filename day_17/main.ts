console.log('SOLID');
// Single Responsibility Principle
// open for extension, closed for modification
// Liskove substitution
// interface segregation
// dependency inversion

// class Employee {
//     id: number;
//     name: string;

//     netSalary = 100;

//     getSalary() {
//         return this.netSalary;
//     }
// }

interface IEmployee {
    id: number;
    name: string;
    netSalary: number;
    getSalary(): number;
}
// new IEmployee()
// const x: Employee;
// const y: IEmployee;

abstract class Employee {
    protected someField: number;
    id: number;
    name: string;
    abstract netSalary: number;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    abstract calculateSalary(): number;
    // override (same parameters and return type)
    // overload (different parameters)
}
// new Employee()

class Manager extends Employee {
    netSalary = 1000;
    private bonus = 500;

    calculateSalary(): number {
        this.someField;
        return this.netSalary + this.bonus;
    }
}
// console.log(new Manager(1, 'Islam'));

class Developer extends Employee {
    netSalary = 800;
    private bonus = 400;

    calculateSalary(): number {
        return this.netSalary + this.bonus;
    }
}
// const Islam = (new Developer(1, 'Islam')) as Employee;

class Secretary extends Employee {
    netSalary = 600;
    private bonus = 200;

    calculateSalary(): number {
        return this.netSalary + this.bonus;
    }
}

class OfficeBoy extends Employee {
    netSalary = 400;
    private bonus = 100;

    calculateSalary(): number {
        return this.netSalary + this.bonus;
    }
}

class ProductOwner extends Employee {
    netSalary = 600;
    private bonus = 200;

    calculateSalary(): number {
        return this.netSalary + this.bonus;
    }
}
// class Employee {
//     constructor(
//         public id: number,
//         public name: string,
//         public type:
//             | 'Manager'
//             | 'Developer'
//             | 'Secretary'
//             | 'Office Boy'
//             | 'Product Owner',
//         public netSalary: number
//     ) {}

//     calculateSalary() {
//         let bonus = 0;
//         switch (this.type) {
//             case 'Manager':
//                 bonus = 500;
//                 break;
//             case 'Developer':
//                 bonus = 400;
//                 break;
//             case 'Secretary':
//             case 'Product Owner':
//                 bonus = 200;
//                 break;
//             case 'Office Boy':
//                 bonus = 100;
//                 bonus = 200;
//                 break;
//             default:
//                 throw new Error('Invalid Employee Type');
//         }
//         return this.netSalary + bonus;
//     }
// }
// const Islam = new Employee(1, 'Islam', 'Manager', 1000);
// const Saeed = new Employee(2, 'Saeed', 'Developer', 800);
// const Khaled = new Employee(3, 'Khaled', 'Secretary', 600);
// const Qasem = new Employee(4, 'Qasem', 'Office Boy', 400);
// console.log(
//     Islam.calculateSalary(),
//     Saeed.calculateSalary(),
//     Khaled.calculateSalary(),
//     Qasem.calculateSalary()
// );

interface IUserPassword {
    password: string;
}
interface IUserHashPassword {
    hashPassword(): string;
}
interface IUserLastLogin {
    lastLoginAt: Date;
}

class User implements IUserPassword, IUserHashPassword, IUserLastLogin {
    id: number;
    name: string;
    email: string;
    password = 'sdfsdf';
    lastLoginAt: Date;
    hashPassword(): string {
        return 'sdfsdfsdf';
    }
}

class UserSummary implements IUserLastLogin {
    id: number;
    name: string;
    lastLoginAt: Date;
}

// ORM