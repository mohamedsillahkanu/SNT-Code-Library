function toggleMenu(menuHeader) {
    const submenu = menuHeader.nextElementSibling;
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
}

function loadContent(page) {
    const content = {
        overview: `
            <h1>Overview</h1>
            <h2>Motivation</h2>
            <p>SNT is here to stay: many NMCPs have found it useful and are continuing to embrace it and further develop it for their analytical needs. Since 2019, multiple individuals have supported the analysis portions of SNT. In most cases, individuals have built their own code in a variety of languages (Stata, R, and Python), sometimes building on others’ previous code and sometimes re-developed independently.

As SNT matures, more quality assurance is needed such that NMCPs can be confident that the analysis they use to inform their decisions is of high quality regardless of the individual supporting analyst. The continued rollout of SNT also means that analysis can become more efficient if analysts are better able to build on each other’s work rather than tempted to reinvent what has already been developed. Lastly, SNT analysis can become much more accessible if there is a common resource available to help those with intermediate coding skills quickly access the collective knowledge of the SNT analyst community.
.</p>
        `,
        page1: `
            <h2>Importing Shapefiles in R</h2>
            <pre id="codeBlock">
                <code>
# Load necessary library
library(sf) # Load the necessary library

# Read shapefile
shapefile <- st_read("path/to/your/shapefile.shp") # Read the shapefile

# Print the shapefile
print(shapefile) # Print the shapefile
                </code>
                <button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here -->
            </pre>
            <p>This R code loads the 'sf' library, reads a shapefile, and prints its contents.</p>
            <h3>R Code Explanation</h3>
            <p>The 'sf' package is used to work with spatial data in R.</p>
        `,
        page2: `
            <h2>Page 2 Content</h2>
            <p>This is the content for Page 2.</p>
        `,
        quartoExample: `
            <h2>Quarto Example</h2>
            <p>This is an example of Quarto.</p>
        `,
    };

    document.getElementById('content').innerHTML = content[page];
}

// Load the overview content when the page opens
window.onload = function() {
    loadContent('overview');
};

function copyCode() {
    const codeBlock = document.getElementById("codeBlock").innerText;
    navigator.clipboard.writeText(codeBlock).then(() => {
        alert("Code copied to clipboard!");
    }).catch(err => {
        console.error('Error copying text: ', err);
    });
}
