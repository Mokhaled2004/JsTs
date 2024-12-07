const rootElement = document.getElementById('app-root');

function navigateTo(url) {
    history.replaceState({ url }, null, url);
    renderApp();
}

function HomePage() {
    return `
        ${NavBar()}
        <div id="home-page">
            <h1>Home Page</h1>
        </div>
    `;
}

function LoginPage() {
    return `
        ${NavBar()}
        <div id="login-page">
            <h1>Login Page</h1>
        </div>
    `;
}

function ToDoItem(todoItem) {
    return `
        <div class="todo-item">
            <h3>${todoItem.id}</h3>
            <p>${todoItem.title}</p>
        </div>
    `;
}

async function ToDosPage() {
    const todoList = await fetch('http://localhost:3000/task', {
        method: 'GET', headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => response.json())

    return `
        ${NavBar()}
        <div id="todos-page">
            <h1>ToDos Page</h1>
            ${todoList.map(ToDoItem).join('')}
        </div>
    `;
}

async function renderApp() {
    console.log(history.state);
    if (history.state == null || history.state.url == null) {
        rootElement.innerHTML = HomePage();
        return;
    }
    const { url } = history.state;
    switch (true) {
        case url.includes('home'):
            rootElement.innerHTML = HomePage();
            break;
        case url.includes('login'):
            rootElement.innerHTML = LoginPage();
            break;
        case url.includes('todos'):
            rootElement.innerHTML = await ToDosPage();
            break;
        default:
            rootElement.innerHTML = HomePage();
            break;

    }
}

function NavBar() {
    return `
       <nav>
            <button id="home-button" onclick="navigateTo('home')">Home</button>
            <button id="login-button" onclick="navigateTo('login')">Login</button>
            <button id="todos-button" onclick="navigateTo('todos')">ToDos</button>
        </nav>
    `;
}
console.log('App is running');
renderApp();