const emailInputElement = document.getElementById('login-email-input');
const passwordInputElement = document.getElementById('login-password-input');
const loginSubmitButtonElement = document.getElementById('login-button');
const errorMessagesBoxElement = document.getElementById('error-messages');

function validateCredentials(credentials) {
    if (credentials.email === '') {
        return 'Email is required';
    }
    if (credentials.password === '') {
        return 'Password is required';
    }

    return null;
}

loginSubmitButtonElement.addEventListener('click', async function () {
    const credentials = {
        email: emailInputElement.value,
        password: passwordInputElement.value,
    };
    const error = validateCredentials(credentials);
    if (error) {
        errorMessagesBoxElement.innerHTML = `<p style="color: red;">${error}</p>`;
        return;
    }

    const response = await fetch(`${environment.url}/user/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });
    const responseJsonData = await response.json();

    if (response.status != 200) {
        errorMessagesBoxElement.innerHTML = `<p style="color: red;">${responseJsonData.message}</p>`;
    } else {
        window.localStorage.setItem(
            'access_token',
            responseJsonData.access_token
        );
        window.localStorage.setItem(
            'refresh_token',
            responseJsonData.refresh_token
        );
        window.location.href = `index.html`;
    }
});
