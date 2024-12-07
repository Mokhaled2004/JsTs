var week = [
    'Saturday', // 0
    'Sunday', // 1
    'Monday', // 2
    'Tuesday', // 3
    'Wednesday', // 4
    'Thursday', // 5
    'Friday' // 6
];

// for (var i = 0; i < week.length; i++) {
//     var day = week[i];
//     console.log(day);
// }

// ECMAScript ES5
// for (var day of week) {
//     console.log(day);
// }

const person = {
    name: 'John Doe',
    age: 20,
    greeting() {
        console.log(`Hi there!`);
    }
};
// var personFieldsNames = Object.getOwnPropertyNames(person);
// for (var fieldName of personFieldsNames) {
//     console.log(person[fieldName]); // person.name, person.age, person.greeting
// }

// for (var fieldName in person) {
//     console.log(fieldName, person[fieldName]);
// }

// var obj = {
//     name: 'I am an object'
// };
// var fieldName = 'age';
// var fieldName2 = 'name';
// console.log(obj.fieldName) // undefined

// console.log(obj[fieldName] -- obj.age) // undefined
// console.log(obj[fieldName2] -- obj.name) // I am an object

var week2 = {
    0: 'Saturday',
    1: 'Sunday',
    2: 'Monday',
    length: 3,
    [Symbol.iterator]: function () {
        let index = 0;
        let self = this;
        return {
            next: function () {
                if (index < self.length) {
                    return { value: self[index++], done: false };
                } else {
                    return { value: undefined, done: true };
                }
            }
        };
    }
};
// for (var day of week2) {
//     console.log(day);
// }
// console.log();
for (var field in week) {
    console.log(field, week[field]);
}

// For of --> Iterable (Array, String, Map, Set)
// For in --> Object   ({}, Array, String, Map, Set)


// for (var field in amAFunction) {
//     console.log(field, amAFunction[field]);
// }
