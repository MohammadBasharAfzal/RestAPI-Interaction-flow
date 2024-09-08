function loadPage(url) {
    fetch(`./pages/${url}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('app').innerHTML = data;
        })
        .catch(err => console.error('Failed to load page:', err));
}

// Initial load for signup page
window.addEventListener('load', () => {
    loadPage('signup');
});
