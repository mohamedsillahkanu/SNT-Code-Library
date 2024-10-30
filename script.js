function toggleMenu(menuHeader) {
    const submenu = menuHeader.nextElementSibling;
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
}

function loadContent(page) {
    const content = {
        overview: `
            <h3 class="sidebar-title">Version: 3 October 2024 </h3>
            <h3 class="sidebar-title">Authors: Mohamed Sillah Kanu, Sammy Oppong, Jaline Gerardin </h3>
            <h2>Overview</h2>
            <h3>Motivation</h3>
            <p>SNT is here to stay: many NMCPs have found it useful and are continuing to embrace it and further develop it for their analytical needs. Since 2019, multiple individuals have supported the analysis portions of SNT. In most cases, individuals have built their own code in a variety of languages (Stata, R, and Python), sometimes building on others’ previous code and sometimes re-developed independently.
           
As SNT matures, more quality assurance is needed such that NMCPs can be confident that the analysis they use to inform their decisions is of high quality regardless of the individual supporting analyst. The continued rollout of SNT also means that analysis can become more efficient if analysts are better able to build on each other’s work rather than tempted to reinvent what has already been developed. Lastly, SNT analysis can become much more accessible if there is a common resource available to help those with intermediate coding skills quickly access the collective knowledge of the SNT analyst community.
.</p>

            <h3>Objectives</h3>
            <p>We will build a code library for SNT analysis to:
            <p>1. Improve quality and reproducibility of SNT analysis by ensuring that analysts are using similar, correct approaches.</p>
            <p>2. Improve efficiency of SNT analysis by minimizing duplication of effort.</p>
            <p>3. Promote accessibility of SNT analysis by lowering barriers to entry.</p>


            <h3>Target audience</h3>
            <p>Anyone doing this kind of work. We assume some basic knowledge of R, some understanding of the data, and a strong connection to the NMCP.</p>

            <h3>Scope</h3>
            <p>All analysis steps of SNT up to but not including mathematical modeling; some related analysis.</p>
        `,

        shapefiles_info: `
            
            <div class="fixed-buttons id="fixedButtons">
                
                <button class="text-button" style="color: white;">R</button>
                <button class="text-button">On this page:</button>
                <button class="text-button" data-section="fullCode" onclick="scrollToSection('fullCode')">Code</button>
                <button class="text-button" data-section="sampleR" onclick="scrollToSection('sampleR')">Sample result</button>
            </div>

            <h5 style="font-weight: normal; font-family: Verdana;">Data Assembly and Management / Shapefiles</h5>
            <h2 style="color: #47B5FF; font-family: Verdana;">Shapefiles</h2>
            <p><em>This section explains the workflow of importing and managing shapefiles using R.</em></p>

            <div class="round-buttons">
                <button class="rect-button" onclick="window.location.href='https://example.com/button1';">View R EN</button>
                <button class="rect-button" onclick="window.location.href='https://example.com/button2';">View R FR</button>
                <button class="rect-button" onclick="window.location.href='https://example.com/button3';">View R FR</button>
                <button class="rect-button" onclick="window.location.href='https://example.com/button4';">View St FR</button>
                <button class="rect-button" onclick="window.location.href='https://example.com/button5';">View St EN</button>
            </div>
            <h5 style="color: white;">#</h5>
            <h4 id="stepByStep" style="font-weight: normal;">Step-by-step guide</h4>

            <h3 id="fullCode">Full code</h3>
          
            <pre id="codeBlock">
                <code>
# Step 1: Import necessary libraries
import geopandas as gpd
import pandas as pd
import matplotlib.pyplot as plt

# Explanation:
# - geopandas: Used to work with geospatial data.
# - pandas: Used for general data manipulation.
# - matplotlib.pyplot: Used for data visualization.

# Step 2: Define the path to the shapefile
shapefile_path = 'https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/a43027a9454581dd57aec9244e33378da723d38e/Chiefdom%202021.shp'

# Explanation:
# - The variable 'shapefile_path' holds the raw path to your shapefile from the GitHub repository.
# - This link is the raw version of the file, allowing it to be accessed directly.
# - The variable 'shapefile_path' holds the path to your shapefile.
# - The current path is a link to a GitHub repository. You might need to download it or use a library that can access files directly from GitHub.
# - The variable 'shapefile_path' holds the path to your shapefile.
# - Make sure to replace the path with the correct location of your shapefile.

# Step 3: Load shapefile data into a GeoDataFrame
gdf = gpd.read_file(shapefile_path)

# Explanation:
# - gpd.read_file(): This function reads the shapefile into a GeoDataFrame, which is a data structure similar to a pandas DataFrame but with additional functionality for geospatial data.

# Step 4: View the first few rows of the GeoDataFrame
print(gdf.head())

# Explanation:
# - gdf.head(): Displays the first 5 rows of the GeoDataFrame to give you a preview of the data and understand its structure.

# Step 5: Check the structure and basic information of the GeoDataFrame
gdf.info()

# Explanation:
# - gdf.info(): Provides a concise summary of the GeoDataFrame, including column names, data types, and non-null values.

                </code>
                <button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here -->
            </pre>

            <h3 id="sampleR">Sample results</h3>
            <img src="https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/50b3fee1b7093c4014e647309562a3934fe4c801/Sh%20information.png" alt="Sample Results">;
            
        `,

    };

    document.getElementById('content').innerHTML = content[page];
}

window.onload = function() {
    // Get the current URL
    const currentUrl = window.location.href;

    // Example 1: Load 'overview' if URL contains '#Overview'
    if (currentUrl.includes('#Overview')) {
        loadContent('overview');
    }

    // Example 2: Load 'shapefiles' if URL contains '#Shapefiles'
    if (currentUrl.includes('#shapefiles')) {
        loadContent('shapefiles');
    }

    // Example 3: Load 'data-management' if URL contains '#DataManagement'
    if (currentUrl.includes('#hf')) {
        loadContent('hf');
    }
};



// Function to scroll to the section when the button is clicked
function scrollToSection(sectionId) {
    // Scroll to the specific section smoothly
    document.getElementById(sectionId).scrollIntoView({ behavior: 'auto' });
    
    // Remove the 'active' class from all buttons
    document.querySelectorAll('.text-button').forEach(button => button.classList.remove('active'));
    
    // Add the 'active' class to the clicked button
    document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');
}

// Function to check which section is at the top and update the active button
function handleScroll() {
    const sections = ['stepByStep', 'sampleR', 'fullCode'];
    let activeSection = null;

    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        const rect = section.getBoundingClientRect();
        
        // Check if the section is exactly at the top of the viewport
        if (rect.top <= 0 && rect.bottom >= 0) {
            activeSection = sectionId;
        }
    });

    // Remove the 'active' class from all buttons
    document.querySelectorAll('.text-button').forEach(button => button.classList.remove('active'));

    // Add the 'active' class to the button corresponding to the section at the top
    if (activeSection) {
        document.querySelector(`[data-section="${activeSection}"]`).classList.add('active');
    }
}

// Attach the scroll event listener to update the active button based on scroll position
window.addEventListener('scroll', handleScroll);


function copyCode() {
    const codeBlock = document.getElementById("codeBlock").innerText;
    navigator.clipboard.writeText(codeBlock).then(() => {
        alert("Code copied to clipboard!");
    }).catch(err => {
        console.error('Error copying text: ', err);
    });
}

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
    // Remove 'selected' class from all links
    var links = document.getElementsByClassName('menu-link');
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('selected');
    }
    // Add 'selected' class to the clicked link
    selectedLink.classList.add('selected');
}

function toggleMenu(menuHeader) {
    var submenu = menuHeader.nextElementSibling; // Get the submenu
    if (submenu.style.display === "none" || submenu.style.display === "") {
        submenu.style.display = "block"; // Show the submenu
        menuHeader.querySelector('.menu-indicator').textContent = 'v'; // Change indicator to 'v'
    } else {
        submenu.style.display = "none"; // Hide the submenu
        menuHeader.querySelector('.menu-indicator').textContent = '>'; // Change indicator back to '>'
    }
}

// Add styles for rectangular buttons
const styles = `
    .rect-buttons {
        display: flex;
        gap: 10px; /* Adds space between the buttons */
        margin-top: 10px;
    }

    .rect-button {
        width: 100px;  /* Set width to make the button rectangular */
        height: 40px;  /* Set height for better visibility */
        border-radius: 5px; /* Small radius for slightly rounded corners, or set to 0 for sharp edges */
        border: none;
        background-color: #47B5FF;
        color: white;
        font-size: 14px;
        cursor: pointer;
    }
`;

// Inject styles into the document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);     





document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector('.fixed-buttons');

    function changeButtonColorOnScroll() {
        if (window.scrollY > 50) { // Change '100' to the scroll distance you want
            button.classList.add('scrolled');
        } else {
            button.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', changeButtonColorOnScroll);
});


function selectLink(element) {
    // Remove 'active' class from all submenu links
    const links = document.querySelectorAll('.submenu-link');
    links.forEach(link => {
      link.classList.remove('active');
    });

    // Add 'active' class to the clicked link
    element.classList.add('active');
  }




document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector('.text-button');
    const headings = document.querySelectorAll('h3'); // All headings to track

    function updateButtonState() {
        // Get the current scroll position
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        // Loop through all headings
        headings.forEach((heading) => {
            const headingTop = heading.offsetTop;

            if (scrollPosition >= headingTop) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    // Add scroll event listener
    window.addEventListener('scroll', updateButtonState);
    updateButtonState(); // Initial call in case already scrolled
});






