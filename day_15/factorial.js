
// JS Doc
// /**
//  * This function will calculate the factorial of the given number
//  * @param {number} number 
//  * @returns {number}
//  */

///
function factorial(number) {
    if (typeof number === 'string') {
        if (!isNaN(Number(number))) {
            number = Number(number);
        } else {
            throw new Error('Invalid input');
        }
    }
    if (number === 0) {
        return 1;
    }
    return number * factorial(number - 1);
}
module.exports = { factorial };

