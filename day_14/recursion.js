// Recursion
// Base Case

// Factorial(5) = 1 * 2 * 3 * 4 * 5 = 120;
// Factorial(4) = 1 * 2 * 3 * 4 = 24;
// 24 * 5 = 120;

// Factorial(10) = 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10 = 3628800;

// 5 * 4 * 3 * 2 * 1


// n * (n - 1)
// 
/*
    let result = 1;
    for (let i = number; i > 0; i--) {
        result = result * i;
    }
    return result;
*/
function factorial(number) {
    if (number === 0) {
        return 1;
    }
    return number * factorial(number - 1);
}
// console.log(factorial(5));

const fs = require('fs/promises');
async function readFiles(directoryPath) {
    const result = [];
    const files = await fs.readdir(directoryPath);

    for (let file of files) {
        const stats = await fs.stat(`${directoryPath}/${file}`);
        if (stats.isDirectory()) {
            const directoryFiles = await readFiles(`${directoryPath}/${file}`);
            result.push(...directoryFiles);
        } else {
            result.push(file)
        }
    }
    return result;
}
// absolute/relative path
// absolute: /
readFiles('/Users/ahmedradwan/Documents/IN3/repos/2024-internship/day_14/dir01')
    .then((files) => console.log(files)); // [test.js, readme.txt];