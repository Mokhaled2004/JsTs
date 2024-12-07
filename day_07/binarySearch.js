// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2);

//         if (arr[mid] === target) {
//             return mid;
//         } else if (arr[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }

//     return -1;
// }

// [].map
// [].filter
// [].find
// [].indexOf
// [].binarySearch
// class Array {
//     binarySearch() {
//         console.log(this);
//     }
// }

Array.prototype.binarySearch = function (target) {
    if (this.sortedVersion == null) {
        console.log('sorting');
        this.sortedVersion = this.sort((a, b) => a - b);
    }

    let left = 0;
    let right = this.sortedVersion.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (this.sortedVersion[mid] === target) {
            return mid;
        } else if (this.sortedVersion[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
};
/*
  bind(this)
  call(this, ...args)
  apply
*/
// [10, 5, 7 ,2] --> [2, 5, 7, 10];
// [10, 5, 7 ,2, 11] --> [2, 5, 7, 10];

var originalPushMethod = Array.prototype.push;
Array.prototype.push = function (...args) {
    // refresh sorted version
    if (this.sortedVersion == null) {
        this.sortedVersion = this.sort((a, b) => a - b);
    }
    this.sortedVersion = this.sortedVersion.concat(args).sort((a, b) => a - b);

    return originalPushMethod.call(this, ...args);
};

// push (add new element to the end)
// shift (add new element from the beginning)
// unshift (remove element from the beginning)
// pop (remove element from the end)
// splice (remove element from the middle)

var arr = [1, 233, 3, 4];
console.log(arr.binarySearch(3));
console.log(arr.binarySearch(4));

// BinarySearch flow
// How to add a new method to an existing class?
// .call function
// How to override an existing method in an existing class?
