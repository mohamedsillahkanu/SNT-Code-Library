// Load the overview content when the page opens
window.onload = function() {
    loadContent('overview');
};


// Function to load content based on the selected menu item
function loadContent(page) {   
    const content = {
        overview: `
            <h3 class="sidebar-title">Version: 3 October 2024 </h3>
            <h3 class="sidebar-title">Authors: Mohamed Sillah Kanu, Sammy Oppong, Jaline Gerardin </h3>
            <h2>Overview</h2>
            <h3>Motivation</h3>
            <p>SNT is here to stay: many NMCPs have found it useful and are continuing to embrace it and further develop it for their analytical needs. Since 2019, multiple individuals have supported the analysis portions of SNT. In most cases, individuals have built their own code in a variety of languages (Stata, R, and Python), sometimes building on others’ previous code and sometimes re-developed independently.</p>
            <p>As SNT matures, more quality assurance is needed such that NMCPs can be confident that the analysis they use to inform their decisions is of high quality regardless of the individual supporting analyst. The continued rollout of SNT also means that analysis can become more efficient if analysts are better able to build on each other’s work rather than tempted to reinvent what has already been developed. Lastly, SNT analysis can become much more accessible if there is a common resource available to help those with intermediate coding skills quickly access the collective knowledge of the SNT analyst community.</p>
            <h3>Objectives</h3>
            <ul>
                <li>1. Improve quality and reproducibility of SNT analysis by ensuring that analysts are using similar, correct approaches.</li>
                <li>2. Improve efficiency of SNT analysis by minimizing duplication of effort.</li>
                <li>3. Promote accessibility of SNT analysis by lowering barriers to entry.</li>
            </ul>
            <h3>Target audience</h3>
            <p>Anyone doing this kind of work. We assume some basic knowledge of R, some understanding of the data, and a strong connection to the NMCP.</p>
            <h3>Scope</h3>
            <p>All analysis steps of SNT up to but not including mathematical modeling; some related analysis.</p>
        `,
        // Other content objects can be added here in the same format
    };

    const contentContainer = document.getElementById("content");

    if (content[page]) {
        contentContainer.innerHTML = content[page];
        window.location.hash = `#${page}`;
    } else {
        contentContainer.innerHTML = content['overview'];
        window.location.hash = `#overview`;
    }
}

// Function to set the active button/link
function setActiveButton(button) {
    const buttons = document.querySelectorAll('.sidebar-button, .menu-link');
    buttons.forEach(btn => btn.classList.remove('active'));
    if (button) {
        button.classList.add('active');
    }
}

// Scroll to the relevant section when buttons are clicked
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'auto' });
    }
}

// Function to copy code to clipboard
function copyCode() {
    const codeBlock = document.getElementById("codeBlock").innerText;
    navigator.clipboard.writeText(codeBlock).then(() => {
        alert("Code copied to clipboard!");
    }).catch(err => {
        console.error('Error copying text: ', err);
    });
}

// Search functionality for filtering menu items
document.querySelector('.search-bar').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const menuItems = document.querySelectorAll('.menu-link, .menu-header');
    
    menuItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
            item.style.display = 'block'; // Show matching items
        } else {
            item.style.display = 'none'; // Hide non-matching items
        }
    });
});

// Function to handle link selection
function selectLink(selectedLink) {
    const links = document.getElementsByClassName('menu-link');
    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove('selected');
    }
    selectedLink.classList.add('selected');
}

// Function to toggle submenus
function toggleMenu(menuHeader) {
    const submenu = menuHeader.nextElementSibling; // Get the submenu
    if (submenu.style.display === "none" || submenu.style.display === "") {
        submenu.style.display = "block"; // Show the submenu
        menuHeader.querySelector('.menu-indicator').textContent = 'v'; // Change indicator to 'v'
    } else {
        submenu.style.display = "none"; // Hide the submenu
        menuHeader.querySelector('.menu-indicator').textContent = '>'; // Change indicator back to '>'
    }
}
