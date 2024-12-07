var numbers = [1, 2, 3, 4, 5]; // 15

// numbers.reduce(() =>{},)

// Initial value, array reference, index reference, array element, state reference (latest value of "result")
// var result = 0;
// for (var i = 0; i < numbers.length; i++) {
//     result = (result + numbers[i]);
// }
// var result = numbers.reduce((state, element, index, self) => {
//     return state + element;
// }, 0);
// console.log(result);

var votes = ['n', 'y', 'y', 'y', 'y', 'y', 'n', 'n', 'n', 'r', 'r', 'r', 'Hi', 'Hi', 'Hi'];
// output: { y: 5, n: 4 }
// var result = {};
// for (var i = 0; i < votes.length; i++) {
//     var element = votes[i]; // 'y' | 'n'

//     if (result[element] != null) {
//         result[element] = result[element] + 1;
//     }

//     if (result[element] == null) {
//         result[element] = 1;
//     }
// }
// console.log(result);

var result = votes.reduce((state, element) => {
    if (state[element] != null) {
        state[element] = state[element] + 1;
    }
    // if (state['n'] != null) {
    //     state['n'] = state['n'] + 1;
    // }

    if (state[element] == null) {
        state[element] = 1;
    }
    // if (state['n'] == null) {
    //     state['n'] = 1;
    // }

    return state;
}, {});
console.log(result);
