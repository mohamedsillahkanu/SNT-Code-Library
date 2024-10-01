function toggleMenu(menuHeader) {
    const submenu = menuHeader.nextElementSibling;
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
}

function loadContent(page) {
    const content = {
        overview: `
            <h3 class="sidebar-title">Version: 27 September 2024 </h3>
            <h3 class="sidebar-title">Authors: Mohamed Sillah Kanu, Sammy Oppong, Jaline Gerardin </h3>
            <h2>Overview</h2>
            <h3>Motivation</h3>
            <p>SNT is here to stay: many NMCPs have found it useful and are continuing to embrace it and further develop it for their analytical needs. Since 2019, multiple individuals have supported the analysis portions of SNT. In most cases, individuals have built their own code in a variety of languages (Stata, R, and Python), sometimes building on others’ previous code and sometimes re-developed independently.
           
As SNT matures, more quality assurance is needed such that NMCPs can be confident that the analysis they use to inform their decisions is of high quality regardless of the individual supporting analyst. The continued rollout of SNT also means that analysis can become more efficient if analysts are better able to build on each other’s work rather than tempted to reinvent what has already been developed. Lastly, SNT analysis can become much more accessible if there is a common resource available to help those with intermediate coding skills quickly access the collective knowledge of the SNT analyst community.
.</p>

            <h3>Objectives</h3>
            <p>We will build a code library for SNT analysis to:

1. Improve quality and reproducibility of SNT analysis by ensuring that analysts are using similar, correct approaches
2. Improve efficiency of SNT analysis by minimizing duplication of effort
3. Promote accessibility of SNT analysis by lowering barriers to entry.</p>


            <h3>Target audience</h3>
            <p>Anyone doing this kind of work. We assume some basic knowledge of R, some understanding of the data, and a strong connection to the NMCP.</p>


            <h3>Scope</h3>
            <p>All analysis steps of SNT up to but not including mathematical modeling; some related analysis..</p>
        `,
        shapefiles: `
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
        hf: `
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
