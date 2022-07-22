async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        try {
            const response = await fetch('/api/users/login', {
                method: 'post',
                body: JSON.stringify({
                    email,
                    password,
                }),
                headers: { 'Content-Type': 'application/json' },
            });

            // check the response status
            if (response.ok) {
                document.location.replace('/dashboard');
            } else {
                alert(response.statusText);
            }
        } catch (error) {
            alert(error);
        }
    }
}

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
