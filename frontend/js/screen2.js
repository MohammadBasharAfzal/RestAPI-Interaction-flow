document.getElementById('screen2-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const selectedOption = document.querySelector('input[name="bedtime"]:checked').value;

    fetch('http://localhost:5001/api/screen2', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ bedtime: selectedOption })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            loadPage('screen3'); // Navigate to Screen 3
        } else {
            alert('Error: ' + data.message);
        }
    })
    .catch(err => console.error('Submission failed:', err));
});
