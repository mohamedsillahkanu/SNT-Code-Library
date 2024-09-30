function toggleMenu(header) {
    const submenu = header.nextElementSibling; // Get the submenu
    submenu.style.display = (submenu.style.display === "block") ? "none" : "block";
}

function loadContent(page, link) {
    // Load the content from the specified page
    const mainContent = document.querySelector('.main-content');
    fetch(page)
        .then(response => response.text())
        .then(data => {
            mainContent.innerHTML = data; // Load the HTML into the main content area
            const links = document.querySelectorAll('.menu-link');
            links.forEach(l => l.classList.remove('active')); // Remove active class from all links
            link.classList.add('active'); // Add active class to the clicked link
        })
        .catch(error => console.error('Error loading page:', error));
}
