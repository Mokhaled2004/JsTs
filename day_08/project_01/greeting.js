const age = 22;
const person = {
    name: 'Mohammed',
    age: age
};

function greeting() {
    console.log('Hello, World!');
}

const exportedFields = {
    greeting,
    person
};
module.exports = exportedFields;
