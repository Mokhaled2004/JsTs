function find(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return arr[i];
        }
    }

    /*
    for (var i = 0; i < arr.length; i++) {
        for (var i = 0; i < arr.length; i++) {
        
        }    
    }

    Person


    */
    return null;
}

// var numbers = [123, 423, 4288, 23, 392, 423, 454, 4332, 223, 42, 34];
//                0     1    2     3   4    5    6     7    8    9  10
// find(numbers, (element) => element == 423) O(n)
// numbers[5] --> 423 O(1)

// var result = find(numbers, (number) => number == 42);
// console.log(result);

// var iterable = {
//     length: 10,
//     [Symbol.iterator]: function () {
//     }
// } Map Set

// var numbers = new Array(100_000_000).fill(1)

// console.time('building list');
// var numbers = Array.from({ length: 100_000_000 }).map(
//     (element, index) => index + 1
// );
// console.timeEnd('building list');

// // find 100_000_000

// console.time('searching using find');
// find(numbers, (number) => number === 1);
// console.timeEnd('searching using find');

const students = [
    {
        id: 12,
        name: 'Mohammed',
        age: 33
    },
    {
        id: 14,
        name: 'Aliaa',
        age: 31
    },
    {
        id: 15,
        name: 'Alaa',
        age: 33
    },
    {
        id: 18,
        name: 'Alaa',
        age: 33
    }
];
const lectures = [
    {
        lectureId: 2,
        authorId: 3,
        attendantStudentId: 12
    },
    {
        lectureId: 2,
        authorId: 3,
        attendantStudentId: 14
    },
    {
        lectureId: 2,
        authorId: 3,
        attendantStudentId: 15
    },
    {
        lectureId: 20,
        authorId: 3,
        attendantStudentId: 1
    },
    {
        lectureId: 21,
        authorId: 5,
        attendantStudentId: 1
    }
];
const result = [];
for (const student of students) {
    for (const lecture of lectures) {
        if (
            student.id == lecture.attendantStudentId &&
            lecture.lectureId == 2
        ) {
            result.push(student);
        }
    }
}
console.log(result);
