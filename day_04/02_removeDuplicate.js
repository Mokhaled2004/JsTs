var week = [
    'Saturday',
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday', // duplicate
    'Friday', // duplicate
    'Wednesday' // duplicate
];

function removeDuplicate(arr) {
    // our code goes here...
    var result = [];
    for (var element of arr) {
        if (!result.includes(element)) {
            result.push(element);
        }
    }

    return result;
}

var numbers = [1, 1, 1, 1, 1, 2, 3, 3, 34, 43, 3, 3, 3, 3, 4, 4, 54, 5];
console.log(removeDuplicate(week));
console.log(removeDuplicate(numbers));
