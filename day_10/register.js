var firstNameInputElement = document.getElementById(
    'register-first-name-input'
);
var lastNameInputElement = document.getElementById('register-last-name-input');
var emailInputElement = document.getElementById('register-email-input');
var passwordInputElement = document.getElementById('register-password-input');
var registerSubmitButtonElement = document.getElementById('register-button');
var errorMessagesBoxElement = document.getElementById('error-messages');

function validateUserObject(userObject) {
    if (userObject.firstName === '') {
        return 'First Name is required';
    }
    if (userObject.lastName === '') {
        return 'Last Name is required';
    }
    if (userObject.email === '') {
        return 'Email is required';
    }
    if (userObject.password === '') {
        return 'Password is required';
    }

    return null;
}

registerSubmitButtonElement.addEventListener('click', async function () {
    const userObject = {
        firstName: firstNameInputElement.value,
        lastName: lastNameInputElement.value,
        email: emailInputElement.value,
        password: passwordInputElement.value,
    };
    const error = validateUserObject(userObject);
    if (error) {
        errorMessagesBoxElement.innerHTML = `<p style="color: red;">${error}</p>`;
        return;
    }

        const response = await fetch(`${environment.url}/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userObject),
        });
        const responseJsonData = await response.json();
        
        if (response.status != 201) {
            errorMessagesBoxElement.innerHTML = `<p style="color: red;">${responseJsonData.message}</p>`;
        } else {
            window.location.href = 'login.html';
        }
        
});
