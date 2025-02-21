document.addEventListener('DOMContentLoaded', function () {
    const contentElement = document.getElementById('content');
    const navLinks = document.querySelectorAll('.navbar a');

    // Function to load content
    function loadContent(url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                contentElement.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading content:', error);
                contentElement.innerHTML = '<p>Error loading content. Please try again later.</p>';
            });
    }

    // Load default content
    loadContent('sections/user-research-persona-creation.html');

    // Add event listeners to navbar links
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default link behavior
            const sectionUrl = this.getAttribute('data-section');
            loadContent(sectionUrl);
        });
    });
});