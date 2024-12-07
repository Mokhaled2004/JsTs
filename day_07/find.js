// Generate random number
// Sort array
// Binary search in array of numbers
// Binary search in array of objects
// Array.prototype.binarySearch = function () {}

console.time('building list');
let arr = Array.from({ length: 100_000_000 }).map((element, index) => index + 1);
console.timeEnd('building list');

function find(arr, callback) {
    for (const element of arr) {
        if (callback(element)) {
            return element;
        }
    }
    return null;
}


// const element = arr.find((value) => value == 99999999);
// 66 index?
// Math.ceil ~=
// Math.floor -> removes decimal part

// target == 97 -> one step/iteration
// target == 654 -> three steps

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}
console.log('\n');

console.time('searching with binary search');
const element = binarySearch(arr, 100_000_000);
console.timeEnd('searching with binary search');

console.log('\n');

console.time('searching with find');
const element2 = find(arr, (value) => value == 100_000_000);
console.timeEnd('searching with find');

console.log('\n');

console.log({ element, element2 });

// find: 1512ms
// binary search: 0.06ms
