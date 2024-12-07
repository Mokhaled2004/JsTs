function filter(arr, callback) {
    // implementation goes here..
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        var isMatch = callback(element);
        if (isMatch) {
            result.push(element);
        }
    }

    return result;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumber = filter(numbers, (number) => number % 2 === 1);
const evenNumber = filter(numbers, (number) => number % 2 === 0);
console.log({ oddNumber, evenNumber });
