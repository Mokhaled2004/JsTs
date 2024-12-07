function find(arr, callback) {
    var result = null;
    for (const element of arr) {
        if (callback(element)) {
            result = element;
            break;
        }
    }

    return result;
}
var persons = [{ age: 1 }, { age: 2 }, { age: 3 }, { age: 4 }];

var personOfAge3 = find(persons, (person) => person.age == 3);
console.log(personOfAge3);
