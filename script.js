// JavaScript to handle content loading, URL changes, and selected menu item
function loadContent(page) {
    // Update the URL without reloading the page
    window.history.pushState({}, '', `#${page}`);
    
    // Get the content element to display content dynamically
    const content = document.getElementById('content');
    
    // Update content based on the selected page
    switch(page) {
        case 'overview':
            content.innerHTML = '<h1>Overview</h1><p>This is the overview page.</p>';
            break;
        case 'shapefiles':
            content.innerHTML = '<h1>A.1 Shapefiles</h1><p>This page contains shapefile information.</p>';
            break;
        case 'hf':
            content.innerHTML = '<h1>A.2 Health Facilities</h1><p>This page contains health facilities data.</p>';
            break;
        case 'quartoExample':
            content.innerHTML = '<h1>Quarto Example</h1><p>This is an example of using Quarto.</p>';
            break;
        default:
            content.innerHTML = '<h1>Overview</h1><p>This is the default overview page.</p>';
            break;
    }

    // Highlight the selected menu link by adding a 'selected' class
    highlightSelectedMenu(page);
}

function highlightSelectedMenu(page) {
    // Remove 'selected' class from all menu links
    const allLinks = document.querySelectorAll('.menu-link');
    allLinks.forEach(link => link.classList.remove('selected'));

    // Add 'selected' class to the clicked menu link
    const selectedLink = document.querySelector(`a[onclick="loadContent('${page}')"] .link-text`);
    if (selectedLink) {
        selectedLink.classList.add('selected');
    }
}

// Open submenu when menu header is clicked
function toggleMenu(menuHeader) {
    const submenu = menuHeader.nextElementSibling;
    if (submenu.style.display === 'block') {
        submenu.style.display = 'none';
    } else {
        submenu.style.display = 'block';
    }
}

// Load overview page by default when page is opened
window.onload = function() {
    const hash = window.location.hash.substring(1);
    if (hash) {
        loadContent(hash);
    } else {
        loadContent('overview');
    }
};
