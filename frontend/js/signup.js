document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nickname = document.getElementById('nickname').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:5001/api/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nickname, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Sign-up successful!');
            window.location.href = '../pages/screen1.html'; // Redirect to assessment
        } else {
            alert('Error: ' + data.message);
        }
    })
    .catch(err => console.error('Sign-up failed:', err));
});
