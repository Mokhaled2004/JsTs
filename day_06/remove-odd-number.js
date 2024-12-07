// Objective: Use the filter function to filter out odd numbers from an array.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumber = numbers.filter((number) => number % 2 === 1);
const evenNumber = numbers.filter((number) => number % 2 === 0);
console.log({ oddNumber, evenNumber });
