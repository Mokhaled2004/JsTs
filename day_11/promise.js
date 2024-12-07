// wrap this logic into a function
function getToDos(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(JSON.parse(xhr.responseText));
        }
    };

    xhr.send();
}

// Callback hell!
// getToDos((toDos) => {
//     var numbers = 0;
//     updateToDo(toDos[0].id, (result) => {
//         insertToDo({ title: "I'm a new task" }, (result) => {
//             console.log('All done!');
//             numbers = 1;
//             insertToDo({ title: "I'm a new task" }, (result) => {
//                 console.log('All done!');
//                 insertToDo({ title: "I'm a new task" }, (result) => {
//                     numbers = 1;
//                     console.log('All done!');
//                     insertToDo({ title: "I'm a new task" }, (result) => {
//                         console.log('All done!');
//                         insertToDo({ title: "I'm a new task" }, (result) => {
//                             console.log('All done!');
//                             insertToDo(
//                                 { title: "I'm a new task" },
//                                 (result) => {
//                                     console.log('All done!');
//                                     insertToDo(
//                                         { title: "I'm a new task" },
//                                         (result) => {
//                                             console.log('All done!');
//                                         }
//                                     );
//                                 }
//                             );
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });

// Promise
// class Promise {
//     constructor(callback) {
//         this.data = null;
//         this.error = null;
//         callback(this.resolve.bind(this), this.reject.bind(this));
//     }

//     resolve(data) {
//         this.data = data;
//     }

//     reject(error) {
//         this.error = error;
//     }

//     then(callback) {
//         return Promise.resolve(callback(this.data));
//     }

//     catch(callback) {
//         callback(this.error);
//     }
// }
// pending, fulfilled, rejected

function getToDosV2() {
    return new Promise((resolve, reject) => {
        // return reject(new Error('Custom error for testing'));

        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText));
                return;
            }

            if (xhr.readyState === 4 && xhr.status !== 200) {
                reject(xhr.status);
                return;
            }
        };

        xhr.send();
    });
}
function getPosts() {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText));
                return;
            }

            if (xhr.readyState === 4 && xhr.status !== 200) {
                reject(xhr.status);
                return;
            }
        };

        xhr.send();
    });
}

// const fulfilledPromise = Promise.resolve("Hello");
// fulfilledPromise.then()
// const rejectedPromise = Promise.reject("Hello");
// rejectedPromise.catch()

// .then + .catch returns -> Promise
// [1] recursive call to resolve promises
// [2] .then + .catch returns -> Promise
//   - return fulfilled Promise -> (return / return Promise.resolve())
//   - return rejected Promise -> (throw new Error() / return Promise.reject())
// getToDosV2()
//     .then((toDos) => {
//         // return "Ok"; // Promise => fulfilled
//         // return Promise.resolve("Ok"); // Promise => fulfilled

//         // throw new Error('OK');
//         // return Promise.reject(new Error('Ok'));

//         console.log({ toDos });
//         // return toDos[0];

//         // recursion Promise1 ("Ok") -> Promise2 -> Promise3 -> Promise4 -> "Ok";
//         return getPosts(); // Promise ( Post[] ) -> Promise -> Post[]?
//     })
//     .then((data) => {
//         console.log({ data2: data });
//         throw new Error("i'm a fake error");
//     })
//     .catch((error) => {
//         console.error({ error });
//         // return undefined;
//     })
//     .then((data) => {
//         // - pending?
//         // - undefined
//         console.log({ data3: data });
//     });

// .then();

// Async / Await
async function main() {
    try {
        var toDos = await getToDosV2();
        // do somethings with the ToDos array
        var posts = await getPosts();
        // do somethings with the Posts array
        console.log({ toDos, posts });
    } catch (exc) {
        console.error('catch block', exc);
    }
}
main();
