function toggleMenu(header) {
    const submenu = header.nextElementSibling; // Get the submenu
    submenu.style.display = (submenu.style.display === "block") ? "none" : "block";
}

function loadContent(page, link) {
    const mainContent = document.querySelector('.main-content');
    const links = document.querySelectorAll('.menu-link');

    // Remove active class from all links
    links.forEach(l => l.classList.remove('active'));
    
    // Add active class to the clicked link
    link.classList.add('active');

    if (page.endsWith('.qmd')) {
        // Handle Quarto file loading if necessary
        fetch(page)
            .then(response => response.text())
            .then(data => {
                // If you're using Quarto, you'll need to process the markdown into HTML
                mainContent.innerHTML = data; // Load the HTML into the main content area
            })
            .catch(error => console.error('Error loading page:', error));
    } else {
        fetch(page)
            .then(response => response.text())
            .then(data => {
                mainContent.innerHTML = data; // Load the HTML into the main content area
            })
            .catch(error => console.error('Error loading page:', error));
    }
}
