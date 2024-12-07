window.console.log('Hello there!');
// DOM, BOM
// Document Object Model
// Browser Object Model
// Window Object

var appElement = document.getElementById('root');
var tasksULElement = document.getElementById('tasks-list');
var logoutButtonElement = document.getElementById('logout-button');
// tasksULElement.innerHTML = `
//     <li>Task 1</li>
//     <li>Task 2</li>
//     <li>Task 3</li>
// `;

// Built-in class XMLHttpRequest()
// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'http://localhost:3000/task');
// xhr.send();
// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status == 200) {
//         var tasks = JSON.parse(xhr.responseText);
//         tasksULElement.innerHTML = tasks.reduce(
//             (state, item) => `${state}<li>${item.title}</li>`,
//             ''
//         );
//         // <li>Task 1</li><li>Task 2</li>
//     }
//     if (xhr.readyState === 4 && xhr.status != 200) {
//         tasksULElement.innerHTML = xhr.responseText;
//     }
// };

// jQuery.ajax('http://localhost:3000/task', {headers: { method: 'GET'}}, function (error, data) {
// if (error) {
//   return
// } else {
// }
// })

// [axios] (HTTP requests)
// NodeJS (http)
// Browser (XMLHttpRequest)

// ECMAScript --> fetch
// Promise

function updateTask(taskTitle) {
    const tasksLisElementsArray = tasksULElement.innerHTML
        .split('<li>')
        .filter((item) => item !== '');
    const taskLiStringElement = tasksLisElementsArray.find((item) =>
        item.includes(taskTitle)
    );
    const taskLiStringElementIndex =
        tasksLisElementsArray.indexOf(taskLiStringElement);

    const newLiStringElement = `<input id="li-input-${taskTitle}" value="${taskTitle}" /> <button onclick="saveUpdate('${taskTitle}')">Save</button> <button onclick="cancelUpdate('${taskTitle}')">Cancel</button>`;
    tasksLisElementsArray[taskLiStringElementIndex] = newLiStringElement;
    tasksULElement.innerHTML = '<li>' + tasksLisElementsArray.join('<li>');
}

function cancelUpdate(taskTitle) {
    const tasksLisElementsArray = tasksULElement.innerHTML
        .split('<li>')
        .filter((item) => item !== '');
    const taskLiStringElement = tasksLisElementsArray.find((item) =>
        item.includes(taskTitle)
    );
    const taskLiStringElementIndex =
        tasksLisElementsArray.indexOf(taskLiStringElement);

    const newLiStringElement = `${taskTitle} <button onclick="updateTask('${taskTitle}')">Update</button>`;
    tasksLisElementsArray[taskLiStringElementIndex] = newLiStringElement;
    tasksULElement.innerHTML = '<li>' + tasksLisElementsArray.join('<li>');
}

async function saveUpdate(taskTitle) {
    const taskInputElement = document.getElementById(`li-input-${taskTitle}`);
    const newTitle = taskInputElement.value;
    await updateTaskByTitle(taskTitle, newTitle);
    const tasks = await getTasks();
    renderTasks(tasks);
}

async function deleteTask(taskTitle) {
    const okDelete = confirm('Are you sure to delete the task?');
    if (!okDelete) {
        return;
    }

    await deleteTaskByTitle(taskTitle);
    const tasks = await getTasks();
    renderTasks(tasks);
}

const queryParams = window.location.search
    .replace('?', '')
    .split('&')
    .map((query) => {
        const splittedQuery = query.split('=');
        return { [splittedQuery[0]]: splittedQuery[1] };
    })
    .reduce((state, item) => {
        return { ...state, ...item };
    }, {});

let access_token = localStorage.getItem('access_token');
let CURRENT_USER = access_token != null ? parseJwt(access_token).email : null;

logoutButtonElement.addEventListener('click', function () {
    localStorage.removeItem('access_token');
    location.reload();
});

function getTasks() {
    // URL Schema protocol://host:port/task?name=abc&age=20&page=1&limit=30
    return fetch(`${environment.url}/task`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((resp) => resp.json());
}

function renderTasks(tasks) {
    tasksULElement.innerHTML = tasks.reduce(
        (state, item) =>
            `${state}<li>${item.title} <button onclick="updateTask('${item.title}')">Update</button> <button onclick="deleteTask('${item.title}')">Delete</button></li>`,
        ''
    );
}

if (CURRENT_USER == null) {
    appElement.innerHTML = `
        <h1> You are not allowed to use the application, please login </h1>
        <a href="login.html">Login</a> or <a href="register.html">Register</a>
    `;
} else {
    getTasks().then((tasks) => renderTasks(tasks));

    var taskInputElement = document.getElementById('add-task-input');
    var taskSubmitButtonElement = document.getElementById(
        'add-task-submit-button'
    );

    var taskTitle = '';
    taskInputElement.addEventListener('input', function (event) {
        taskTitle = taskTitle + event.data;
    });

    function createTask(taskTitle) {
        return fetch(`http://localhost:3000/task?user=${CURRENT_USER}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: taskTitle }),
        })
            .then((response) => response.json())
            .finally(() => {
                taskInputElement.value = '';
            });
    }

    function updateTaskByTitle(taskTitle, newTitle) {
        return fetch('http://localhost:3000/task', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ newTitle: newTitle, title: taskTitle }),
        }).then((res) => res.json());
    }

    function deleteTaskByTitle(taskTitle) {
        return fetch('http://localhost:3000/task', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: taskTitle }),
        }).then((res) => res.json());
    }

    function afterTaskCreatedHook() {
        taskInputElement.value = '';
        getTasks().then((tasks) => renderTasks(tasks));
    }

    taskSubmitButtonElement.addEventListener('click', function () {
        createTask(taskTitle).then(() => afterTaskCreatedHook());
    });

    // 1. Promise
    // 2. DELETE, UPDATE
}
