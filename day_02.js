// ECMAScript --> ES5 ES8 ES2020
// function Car(color) {
//     this.color = color;
// }

// const blueCar = new Car('blue');
// console.log(blueCar);

/*
  factory -->
*/
// class Employee {
//     constructor(name) {
//         this.name = name;
//     }

//     greeting() {
//         console.log(`Hello ${this.name}`);
//     }
// }

// class Manager extends Employee {
//     constructor(name) {
//         super(name)
//     }
// }

// var manager = new Employee('Gamal');
// manager.greeting();
// var secretary = new Employee('Hamza');
// secretary.greeting();

// console.log(manager);

// Literal Object
// var officeBody = {
//     name: 'Mohamed',
//     city: 'Cairo',
//     country: 'Egypt',
//     getLocation() {
//         return `${this.country}, ${this.city}`
//     },
//     greeting() {
//         console.log(`Hi I'm ${this.name}, And I'm from ${this.getLocation()}`);
//     }
// };
// officeBody.greeting();

var accountant = { name: 'Nader' };
accountant.greeting = function() {
    console.log(`Hello ${accountant.name}`);
};
accountant.greeting();

var officeBoy = {
    name: 'Mohamed',
    greeting() {
        console.log(`Hello ${this.name}`);
    }
};
// officeBody.greeting();

var accountant = {
    name: 'Nader',
    greeting() {
        console.log(`Hello ${this.name}`);
    },
    sayHi() {
        console.log(`Hi`);
    }
};
const newSayHiFunction = accountant.sayHi.bind();
// newSayHiFunction();

// console.log(accountant.greeting.name, accountant.greeting.toString());
var greetingFunction = accountant.greeting;
// console.log(accountant.greeting == greetingFunction);

const newGreetingFunction = accountant.greeting.bind(officeBoy);
// console.log(accountant.greeting == newGreetingFunction);
// newGreetingFunction();

function main(param1) {
    if (typeof param1 == 'function') {
        param1();
    } else {
        console.log(param1);
    }
}
// main('Morning');
// main(12232);
// main(true);
function greeting() {
    console.log('Hi there!');
}
// main(greeting);
// main(officeBoy.greeting); // [Important] Loses its `this` context
// main(officeBoy.greeting.bind(officeBoy));

class Employee {
    constructor(name) {
        // .forEach((fieldName) => {
        // if (typeof this[fieldName] == 'function') {
        //     this[fieldName] = this[fieldName].bind(this);
        // }
        // });
        this.name = name;
        this.calculateSalary = function () {
            return 1;
        };

        const fieldsNames = Object.getOwnPropertyNames(this);
        for (let i = 0; i < fieldsNames.length; i++) {
            const fieldName = fieldsNames[i]; // "name", "calculateSalary"
            if (typeof this[fieldName] == 'function') {
                this[fieldName] = this[fieldName].bind(this);
            }
        }
    }

    static myFunction() {
        console.log('this is a static method');
    }
}
const x = new Employee('Ahmed');
// x.calculateSalary
// Employee.myFunction();
main(x.calculateSalary);

// const myObject = new Object();
// myObject.toString(); // instance method
// Object.assign; // static(class) method

// console.log(Object.getOwnPropertyNames(officeBoy));
// console.log(Object.getOwnPropertyNames(x));

// officeBoy.name // dot notation
// officeBoy["greeting"]() // square brackets notation

// var methodName = "greeting";
// console.log(officeBoy.methodName) // undefined
// console.log(officeBoy[methodName]) // [Function: greeting]
