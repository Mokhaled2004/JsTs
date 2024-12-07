// NodeJS
const _ = require('lodash');
const express = require('express');
// console.log(lodash);
// const greetingModule = require('./greeting');
// greetingModule.greeting();

const numbers1 = [1, 2, 3];
const numbers2 = [1, 2, 4];

// function getDifference(arr1, arr2) {
//     const result = [];
//     for (const number1 of arr1) {
//         if (!arr2.includes(number1)) {
//             result.push(number1);
//         }
//     }
//     return result;
// }
// console.log(getDifference(numbers1, numbers2));

// console.log(_.difference(numbers1, numbers2));
// console.log(_.intersection(numbers1, numbers2));

// PROTOCOL (HTTP, HTTPS, FTP, FTPS, SSH, TCP, UDP, SMTP, POP3, IMAP, ...etc)
// A way of communication between two devices
// Device need info (Client) - Device own the info (Server)

const app = express();

// http://localhost:3000/hello
// route/ endpoint
app.get('/hello', function (req, res) {
    res.send({ message: 'Hello World' });
});
// Initialize HTTP Server --> by listening on PORT
app.listen(3000);
