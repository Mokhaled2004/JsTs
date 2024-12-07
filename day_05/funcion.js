function sayHi() {
    console.log('Hello, World!');
}
var sayHello = () => {
    console.log('Hello, World!');
};
// sayHello();
// sayHi();

function getCurrentYear() {
    return 2024;
}

// var currentYear = getCurrentYear();
// console.log(currentYear);

// var hi = sayHi();
// console.log(hi);

// null/true/false/0
// undefined/NaN are related to (javascript)

// console.log(undefined == null); // true
// console.log(undefined === null); // false

// var hi = sayHi();
// if (hi) {
//     console.log('Hi is true');
// }

// f(x) = x^2 + 2x + 1;
// f(2) = (2^2 + 2*2 + 1) = (output/result);
// f(x, y) = x^2 + 2x + 1 + y^2 + 2y + 1;
// f(number1, number1) = number1 + number2 = result;

// د(س) = س^2 + 2س + 1
// دالة = function

// function add(number1, number2) {
//     return number1 + number2;
// }

// var result = add(2, 3);
// console.log(result);

// Number, String, Boolean, Object, Array, and Function
// Higher Order Function
// function add(number1) {
//     // Lexical Scope
//     return function (number2) {
//         return number1 + number2;
//     };
// }

// var addTwo = add(2);
// // console.log(addTwo.toString());
// console.log(addTwo(3)); // 5

// var add10 = add(10);
// console.log(add10(5));

// var add100 = add(100);
// console.log(add100(500));

// Array, Object ...etc
// console.log(new Date("2022-01-01"));
// function calculateAge(birthYear) {
//     var currentYear = new Date().getFullYear();
//     return currentYear - birthYear;
// }
// var age = calculateAge(1990);
// console.log(age);

// function calculateAge(birthYear, doSomething) {
//     var currentYear = new Date().getFullYear();
//     var age = currentYear - birthYear;
//     doSomething(age);
// }

// calculateAge(1990, function (age) {
//     console.log('Your age is: ' + age);
// });

// var days = [
//     'Sunday',
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday'
// ];
// days.forEach(function (day, index, self) {
//     console.log(day);
// });
// class Array {
//     forEach(callback) {
//         for (var i = 0; i < this.length; i++) {
//             callback(this[i], index, this);
//         }
//     }
// }

// function greeting(name = 'Guest') {
//     console.log('Hello, ' + name);
// }
// greeting();
// greeting('Ahmed');

// spread operator
// Old style
// function sum() {
//     console.log(arguments);
//     for (var value of arguments) {

//     }
// }

// New style
// function sum(...numbers) {
//     var operation = numbers[0];
//     var result = 0;
//     for (var number of numbers) {
//         result = result + number;
//     }
//     return result;
// }
// sum('+', 1, 2, 3, 4, 5, 6, 7, 1, 2);
// console.log(sum(1, 2, 3, 4, 5, 6, 7, 1, 2));
// console.log(sum(12, 3, 2, 423, 423, 4, 534, 54, 3, 234, 2, 42));
// console.log(sum(12, 3, 2, 423, 423, 4, 534, 54, 3, 234, 2, 42, 324, 343, 565));

// operation: ["+", "-", "*"]
function mathOperation1(operation, ...numbers) {
    var result = 0;
    for (var number of numbers) {
        if (operation === '+') {
            result = result + number;
        } else if (operation === '-') {
            result = result - number;
        } else if (operation === '*') {
            result = (result === 0 ? 1 : result) * number;
        }
    }
    return result;
}
mathOperation1();
console.log(mathOperation1('-', 12, 2, 3423, 423, 42, 34));
console.log(mathOperation1('*', 12, 2, 34));
console.log(mathOperation1('+', 12, 2, 34));

function mathOperation(operation) {
    return function (...numbers) {
        var result = 0;
        for (var number of numbers) {
            if (operation === '+') {
                result = result + number;
            } else if (operation === '-') {
                result = result - number;
            } else if (operation === '*') {
                result = (result === 0 ? 1 : result) * number;
            }
        }
        return result;
    };
}

var sum = mathOperation('+');
var subtract = mathOperation('-');
var multiply = mathOperation('*');

sum(23, 234, 23, 4, 23);
subtract(23, 234, 23, 4, 23);

function Person(name) {
    this.name = name;
}
var person = new Person('Ahmed'); // Person { name: 'Ahmed' }
console.log(person);
console.log(Person('Ahmed'))