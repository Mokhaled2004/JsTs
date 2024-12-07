const originalFetch = window.fetch.bind(window);

function navigateToLoginPage() {
    window.location.href = 'login.html';
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
}

function updateTokenStorage(data) {
    if (data.access_token != null) {
        localStorage.setItem('access_token', data.access_token);
    }
    if (data.refresh_token != null) {
        localStorage.setItem('refresh_token', data.refresh_token);
    }
}

async function refreshToken() {
    const response = await originalFetch(
        `${environment.url}/user/refresh-token`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                refresh_token: localStorage.getItem('refresh_token'),
            }),
        }
    );
    if (response.status == 401) {
        return null;
    }

    const data = await response.json();
    const newAccessToken = data.access_token;
    const newRefreshToken = data.refresh_token;
    access_token = data.access_token;

    return {
        access_token: newAccessToken,
        refresh_token: newRefreshToken,
    };
}

function injectAccessToken(...args) {
    if (typeof args[0] == 'string') {
        args[1].headers = {
            ...args[1].headers,
            Authorization: localStorage.getItem('access_token'),
        };
    }
    if (typeof args[0] === 'object') {
        args[0].headers = {
            ...args[0].headers,
            Authorization: localStorage.getItem('access_token'),
        };
    }
}

window.fetch = function (...args) {
    injectAccessToken(...args);

    return originalFetch(...args).then(async (response) => {
        if (response.status == 401) {
            const refreshData = await refreshToken();
            if (refreshData == null) {
                navigateToLoginPage();
                return;
            }
            updateTokenStorage(refreshData);
            injectAccessToken(...args);

            return originalFetch(...args);
        }

        return response;
    });
};
