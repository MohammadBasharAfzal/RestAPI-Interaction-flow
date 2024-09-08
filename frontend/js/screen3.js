document.getElementById('screen3-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const selectedOption = document.querySelector('input[name="wake-up-time"]:checked').value;

    fetch('http://localhost:5001/api/screen3', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ wakeUpTime: selectedOption })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = '../pages/screen4.html'; // Navigate to Screen 4
        } else {
            alert('Error: ' + data.message);
        }
    })
    .catch(err => console.error('Submission failed:', err));
});
