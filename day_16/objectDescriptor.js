const config = { appName: 'My App', version: '1.0.0' };
config.url = 'http://localhost:3000';
Object.defineProperty(config, 'url', {
    value: 'http://localhost:3000',
    enumerable: true, // to be shown in for..in loop
    writable: false, // to be changed/reassigned
    configurable: false // to be deleted
});
Object.freeze(config);

config.url = 'http://localhost/api/v1';
delete config.url;
delete config.appName;
delete config.version;
console.log(config);

// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     getFullName() {
//         return this.firstName + ' ' + this.lastName;
//     }
// }
// const person = new Person('Ahmed', 'Radwan');
// Object.defineProperty(person, 'getFullName', {
//     value: function() {
//         return this.firstName + ' ' + this.lastName;
//     },
//     enumerable: true
// });
// console.log(person)