const person = {
    name: 'Bob',
    age: 30,
    greet: function() {
        function nestedFunction() {
            // this.name = 'Samer';
            console.log(this.name);
        }
        nestedFunction(); // undefined

        // ES6 Arrow function
        const nestedArrowFunction = () => {
            console.log(this.name);
        }
        nestedArrowFunction(); // Bob
    }
};

person.greet();