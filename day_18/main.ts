// [1] access modifiers (encapsulation)
// public, private, protected

// import { fileContent } from "./load-data";
// var { fileContent } = require('./load-data');
// fileContent = 'sdfsdf';

// import { LoadData } from "./load-data";
// var content = new LoadData().getContent();
// content = 'asfsa';

// [2] Polymorphism
// [2.1] Overriding
// class Employee {
//     getSalary(bonus: number): number {
//         return 100 + bonus;
//     }
// }

// class Manager extends Employee {
//     getSalary(bonus: number): number {
//         return (100 + bonus) * 2;
//     }
// }
// console.log(
//     new Employee().getSalary(50),
//     new Manager().getSalary(50)
// );

// [2.2] Overloading
//  - change parameters types
//  - change number of parameters
// class Employee {
//     getSalary(bonus: number): number;
//     getSalary(bonus: string): string;
//     getSalary(bonus: number, tax: number): number;

//     getSalary(bonus: number | string, tax?: number): number | string {
//         let result = 0;
//         if (typeof bonus === 'string') {
//             result = 100 + Number(bonus);
//         } else {
//             result = 100 + bonus;
//         }

//         if (tax != null && tax > 0) {
//             result = result - tax;
//         }

//         if (typeof bonus === 'string') {
//             return `Salary is ${result}`;
//         }

//         return result;
//     }
// }
// const adel = new Employee();

// console.log(adel.getSalary('50'));

// [4] Abstraction --> day_17 (Employee example)

// [5] Inheritance

// [6] Composition
// class A {
//     b: B;
//     c: C;
//     doSomething() {
//         this.b.do1();
//         this.c.do2();
//     }
// }