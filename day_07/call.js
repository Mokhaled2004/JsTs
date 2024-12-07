var person = {
    age: 33,
    name: 'Khalid'
};
function greeting(personName) {
    console.log(`Hello ${this.name}, I'm ${personName}`);
}
// greeting('Ahmed');

// var newGreetingFunction = greeting.bind(person);
// newGreetingFunction();

greeting.call(person, 'Ahmed');
