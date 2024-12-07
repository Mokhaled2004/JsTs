function reduce(arr, callback, initialValue) {
    var result = initialValue;
    for (let i = 0; i < arr.length; i++) {
        result = callback(result, arr[i], i, arr);
    }
    return result;
}

var votes = ['n', 'y', 'y', 'y', 'y', 'y', 'n', 'n', 'n', 'r', 'r', 'r', 'Hi', 'Hi', 'Hi'];
var result = reduce(votes, (state, element) => {
    if (state[element] != null) {
        state[element] = state[element] + 1;
    }

    if (state[element] == null) {
        state[element] = 1;
    }
    return state;
}, {});
console.log(result);