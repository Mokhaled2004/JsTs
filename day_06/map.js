
function map(arr, callback) {
    // implementation goes here..
    var result = [];
    for (const element of arr) {
        result.push(callback(element));
    }
    return result;
}

const numbers = [1, 2, 3];
const square = map(numbers, (number) => number * number); // [1, 4, 9]
console.log(square)
/*
  Set
  1  --> 1
  2  --> 4
  4  --> 9
*/
// var result = [1, 2, 3].map((number) => number * number); // [ 1, 4, 9 ]
// console.log(result);
