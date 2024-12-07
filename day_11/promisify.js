const utility = require('util');

function getTasks(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/tasks');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(null, JSON.parse(xhr.responseText));
            return;
        }

        if (xhr.readyState === 4 && xhr.status !== 200) {
            callback(xhr.status, null);
            return;
        }
    };
}
// const getTasksPromise = util.promisify(getTasks)
function promisify(fn) {
    return new Promise((resolve, reject) => {
        fn((error, data) => {
            if (error) {
                return reject(error);
            }
            return resolve(data);
        });
    });
}

getTasks((error, data) => {
    if (error) {
        // handle error...
        return;
    }

    // use data
    console.log(data);
});

const writeFilePromise = utility.promisify(fs.writeFile);
//
const fsPromise = require('fs/promises');
// fs.writeFile(absolutePath, '[]', (err, data) => {

// });
// try {
//     const result = fs.writeFileSync(absolutePath, '[]');
// } catch (exc) {

// }
