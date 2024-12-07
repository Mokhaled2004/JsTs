const person = {
    name: 'Alice',
    age: 25,
    getName: function() {
        return this.name;
    }
};

console.log(person.getName()); // Replace me with the printed value