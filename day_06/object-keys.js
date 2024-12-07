var object = {};
// object.y = 4;
// object['y'] = 4;

// isNil ---> value === null || value === undefined
// value == null --> (value === null || value === undefined)
// (value === null) != (value === undefined)

// if (object['y'] == null) {
//     object['y'] = 4;
// }

// if (object['y'] != null) {
//     object['y'] = object['y'] + 1;
// }
object.y = 5;
console.log(object);
object.y = 7;
console.log(object);
