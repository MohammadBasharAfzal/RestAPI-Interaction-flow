window.addEventListener('load', function() {
    fetch('http://localhost:5001/api/results')  // Assuming this is the API endpoint for fetching results
        .then(response => response.json())
        .then(data => {
            const resultList = document.getElementById('result-list');

            // Assuming data structure is an array of questions and answers
            data.results.forEach(result => {
                const li = document.createElement('li');
                li.textContent = `${result.question}: ${result.answer}`;
                resultList.appendChild(li);
            });
        })
        .catch(err => console.error('Failed to fetch results:', err));
});
