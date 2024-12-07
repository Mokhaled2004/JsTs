// abcdefghijklmnopqrstuvwxyz
// The quick brown fox jumps over the lazy dog
// 0123456789
// t == T -> false

function pangram(statement) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    // for (let i = 0; i < alphabet.length; i++) {
    //     var alphabetChar = alphabet[i] // 1:a 2:b 3:c
    // }

    // for (var alphabetCar of alphabet) {

    // }

    for (let alphabetChar of alphabet) {
        if (!statement.toLowerCase().includes(alphabetChar)) {
            return false;
        }
    }

    return true;
}

// console.log('case 1', pangram('32423 The quick brown fox jumps over the lazy dog'));
console.log('case 2', pangram('The quick brown fox jumps over The lazy dog'));
// console.log('case 3', pangram('the lazy dog'));
// 'Tasdfdf'.includes('t') -> false
// 'tasdfdf'.includes('t') -> true