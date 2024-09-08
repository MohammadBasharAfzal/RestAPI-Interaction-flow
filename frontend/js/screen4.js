document.getElementById('screen4-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const selectedOption = document.getElementById('sleep-hours').value;

    fetch('http://localhost:5001/api/screen4', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ sleepHours: selectedOption })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            loadPage('results'); // Navigate to Results Page
        } else {
            alert('Error: ' + data.message);
        }
    })
    .catch(err => console.error('Submission failed:', err));
});
