// Scripting   / Programming
// Interpreter .js / Compiler .exe
// Browser - NodeJS

// Static Language - Dynamic Language
// List<Int> = [1, 2, 3];
// var x = "Hi";
// x = 122;
// var arr = [1232, "Hi", true];

// JavaScript is a dynamic language - main.js
// TypeScript // main.ts --> Makes JavaScript semi static language
// TypeScript (transpiler) --> mains.ts --> main.js --> node main.js

// Browser
/**
  - DOM manipulation (remove div, add div, add span)
  - HTTP request -> fetch data from server
  - Form Inputs
*/

// NodeJS
/**
  - Access "OS"
  - Create server listen port
  - Establish TCP connection -> database
  - create Web-socket server
  - I/O operation -> read file/ write file/ create directory(folder)
*/

// Primitive/Non-Primitive data types
/*
    Primitive
    - Boolean
    - String
    - Number (Int, Double, Float)

    Non-Primitive (pass by reference)
    - Object (Hash Map)
    - Array
    - Function
*/

var name = 'Ahmed';
// (name)["Ahmed"]
var person = {
    name: 'Ahmed'
};
// (name)[x7736sxx28d]
// console.log(name == "Ahmed");
// console.log(person == { name: "Ahmed" });

// NaN
// console.log("34234");
// console.log(parseInt("a3s4s234")); // Not a Number (NaN)
// console.log(NaN == NaN);
// console.log([] == [])

// if ([]) {
//     console.log('This is an array');
// }
// true/false
// Truthy value/Falsy value

// if (null) {
//     console.log('this is a null');
// }

/* Truthy
  - []
  - {}
  - "Hi"
  - 324234
  - true
*/

/* Falsy
  - 0
  - ""
  - NaN
  - null
  - undefined
  - false
*/

// var greeting = 'Hi there!';
// var name = new String('Ahmed');
// var shouldGreetPeople = Boolean(true);
// console.log(shouldGreetPeople)
// if (shouldGreetPeople) {
//     console.log(shouldGreetPeople, greeting, name);
// }

// Constructor Function
function Person(name) {
    this.name = name;
    return this;
}
const person1 = new Person("Mohammed");
// console.log(person1);

// var names = new Array("10kasjdkla", true)
var names = ["Ahmed", "Mohammed", "Walid", "Mayar"];
// console.log(names);

// var object1 = new Object(true);
// console.log(object1)

console.log("Ahmed" == "Ahmed");
console.log("123" == "123");
console.log(123 == "123"); // 123 == "123" (true) = true
console.log(123 === "123"); // 123 == "123" (true) + "number" == "string" (false) = false
console.log(typeof 123, typeof "123")
/*
  AND
  true + false  --> false
  false + false --> false
  true + true   --> true

  OR
  true + false  --> true
  false + false --> false
  true + true   --> true
*/