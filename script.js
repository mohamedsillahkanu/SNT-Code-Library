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
                <button class="text-button" data-section="sampleR" onclick="scrollToSection('sampleR')">Output</button>
            </div>

            <h5 style="font-weight: normal; font-family: Verdana;">Data Assembly and Management / Shapefiles / View shapefile data</h5>
            <h2 style="color: #47B5FF; font-family: Verdana;">View shapefile data</h2>
            <p><em>This section explains the workflow of importing and managing shapefiles using R.</em></p>

            <div class="round-buttons">
                <button class="rect-button" onclick="window.location.href='https://example.com/button1';">View R EN</button>
                <button class="rect-button" onclick="window.location.href='https://example.com/button2';">View R FR</button>
                <button class="rect-button" onclick="window.location.href='https://example.com/button3';">View R FR</button>
                <button class="rect-button" onclick="window.location.href='https://example.com/button4';">View St FR</button>
                <button class="rect-button" onclick="window.location.href='https://example.com/button5';">View St EN</button>
            </div>
            <h5 style="color: white;">#</h5>
            <h3 id="fullCode">Code</h3>
          
            <pre id="codeBlock">
                <code>
# Step 1: Install necessary libraries
install.packages("sf")

# Step 2: Import necessary libraries
library(sf)

# Explanation:
# - sf: Used to work with geospatial data in R.

# Step 3: Define the path to the shapefile components

shapefile_shx <- 'https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/a43027a9454581dd57aec9244e33378da723d38e/Chiefdom%202021.shx'
shapefile_dbf <- 'https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/a43027a9454581dd57aec9244e33378da723d38e/Chiefdom%202021.dbf'
shapefile_path <- 'https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/a43027a9454581dd57aec9244e33378da723d38e/Chiefdom%202021.shp'

# Explanation:
# - The variables 'shapefile_shx', 'shapefile_dbf', and 'shapefile_path' hold the raw paths to the shapefile components from the GitHub repository.
# - All three files (.shp, .shx, .dbf) are required to correctly read the shapefile.

# Step 3.1: Download the shapefile components
download.file(shapefile_path, destfile = "Chiefdom_2021.shp")
download.file(shapefile_shx, destfile = "Chiefdom_2021.shx")
download.file(shapefile_dbf, destfile = "Chiefdom_2021.dbf")

# Explanation:
# - 'download.file()' is used to download each component of the shapefile from GitHub and save them locally.
# - This ensures all necessary files are available for reading the shapefile.

# Step 4: Load shapefile data into an sf object
gdf <- st_read("Chiefdom_2021.shp")

# Explanation:
# - 'st_read()' reads the shapefile into an sf object, which is a data structure for handling geospatial data in R.
# - The sf object 'gdf' contains both the geometry (spatial features) and attributes (data values) of the shapefile.

# Step 4.1: Set the Coordinate Reference System (CRS)
st_crs(gdf) <- 4326

# Explanation:
# - 'st_crs()' is used to set the CRS of the sf object.
# - EPSG:4326 is a common CRS that represents coordinates in longitude and latitude.

# Step 5: View the first few rows of the sf object
print(gdf)

# Explanation:
# - 'print(gdf)' print only a portion of the spatial object by default.
                </code>
                <button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here -->
            </pre>

            <h3 id="sampleR">Output</h3>
            <img src="https://github.com/mohamedsillahkanu/SNT-Code-Library/raw/31b914c1115de3ccd6c8045946adc4a84eadc4bb/print%20gdf%20in%20R.png" alt="Output">
            
        `,

        basic_plot: `
            
            <div class="fixed-buttons id="fixedButtons">
                
                <button class="text-button" style="color: white;">R</button>
                <button class="text-button">On this page:</button>
                <button class="text-button" data-section="fullCode" onclick="scrollToSection('fullCode')">Code</button>
                <button class="text-button" data-section="sampleR" onclick="scrollToSection('sampleR')">Output</button>
            </div>

            <h5 style="font-weight: normal; font-family: Verdana;">Data Assembly and Management / Shapefiles / Basic plotting</h5>
            <h2 style="color: #47B5FF; font-family: Verdana;">Basic plotting</h2>
            <p><em>This section explains the workflow of importing and managing shapefiles using R.</em></p>

            <div class="round-buttons">
                <button class="rect-button" onclick="window.location.href='https://example.com/button1';">View R EN</button>
                <button class="rect-button" onclick="window.location.href='https://example.com/button2';">View R FR</button>
                <button class="rect-button" onclick="window.location.href='https://example.com/button3';">View R FR</button>
                <button class="rect-button" onclick="window.location.href='https://example.com/button4';">View St FR</button>
                <button class="rect-button" onclick="window.location.href='https://example.com/button5';">View St EN</button>
            </div>
            <h5 style="color: white;">#</h5>
            <h3 id="fullCode">Code</h3>
          
            <pre id="codeBlock">
                <code>
# Step 1: Install necessary libraries
install.packages("sf") # Installs the 'sf' library to handle spatial data
install.packages("ggplot2") # Installs the 'ggplot2' library for data visualization

# Step 2: Import the necessary libraries
library(sf) # Loads the 'sf' package, which is used to work with geospatial data in R
library(ggplot2) # Loads the 'ggplot2' package for advanced plotting

# Step 3: Define the path to the shapefile components on GitHub
shapefile_shx <- 'https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/a43027a9454581dd57aec9244e33378da723d38e/Chiefdom%202021.shx'
shapefile_dbf <- 'https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/a43027a9454581dd57aec9244e33378da723d38e/Chiefdom%202021.dbf'
shapefile_path <- 'https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/a43027a9454581dd57aec9244e33378da723d38e/Chiefdom%202021.shp'

# Explanation:
# - These variables hold the URLs to the raw shapefile components (shp, shx, and dbf files) in the GitHub repository.
# - A shapefile consists of multiple files, so all components must be downloaded.

# Step 3.1: Download the shapefile components locally
download.file(shapefile_path, destfile = "Chiefdom_2021.shp")
download.file(shapefile_shx, destfile = "Chiefdom_2021.shx")
download.file(shapefile_dbf, destfile = "Chiefdom_2021.dbf")

# Explanation:
# - 'download.file()' downloads each of the shapefile components and saves them locally.
# - This ensures that the entire shapefile (which includes geometry, attributes, and index) is available for analysis.

# Step 4: Load the shapefile into an sf object
gdf <- st_read("Chiefdom_2021.shp")

# Explanation:
# - 'st_read()' reads the shapefile into an 'sf' object (gdf).
# - The 'sf' object contains both the spatial features (geometry) and attributes of the shapefile.

# Step 4.1: Set the Coordinate Reference System (CRS)
st_crs(gdf) <- 4326

# Explanation:
# - 'st_crs() <- 4326' assigns the coordinate reference system (CRS) to the sf object.
# - EPSG 4326 represents latitude and longitude, commonly used for geographic data.

# Step 5: Plot the shapefile using ggplot2 for enhanced visualization, with customization
ggplot(data = gdf) +
  geom_sf() +
  theme_minimal() +
  theme(
    panel.grid = element_blank(),  # Remove grid lines
    axis.text = element_blank(),   # Remove x and y axis text (tick labels)
    axis.ticks = element_blank(),  # Remove x and y axis ticks
    plot.title = element_text(hjust = 0.5, size = 16)  # Center the title and adjust its size
  ) +
  ggtitle("Map of Sierra Leone")

# Explanation:
# - 'geom_sf()' adds the geometry from the sf object to the plot.
# - 'theme_minimal()' sets a basic clean theme, which is further customized.
# - 'theme()' allows for specific customizations:
#   - 'panel.grid = element_blank()' removes grid lines.
#   - 'axis.text = element_blank()' removes the axis text (x and y tick labels).
#   - 'axis.ticks = element_blank()' removes the axis ticks.
#   - 'plot.title = element_text(hjust = 0.5)' centers the title by setting 'hjust' to 0.5 (horizontal justification).
#   - 'size = 16' adjusts the size of the title text to make it more readable.

                </code>
                <button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here -->
            </pre>

            <h3 id="sampleR">Output</h3>
            <img src="https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/67daf1ea675c806b6e3bae6facfee6e7c83f2f19/basic%20plot%20in%20R.png" alt="Sample Results">
            
        `,


        admin_units: `
            
            <div class="fixed-buttons id="fixedButtons">
                
                <button class="text-button" style="color: white;">R</button>
                <button class="text-button">On this page:</button>
                <button class="text-button" data-section="fullCode" onclick="scrollToSection('fullCode')">Code</button>
                <button class="text-button" data-section="sampleR" onclick="scrollToSection('sampleR')">Output</button>
            </div>

            <h5 style="font-weight: normal; font-family: Verdana;">Data Assembly and Management / Shapefiles / Admin units overlay</h5>
            <h2 style="color: #47B5FF; font-family: Verdana;">Admin units overlay</h2>
            <p><em>This section explains the workflow of importing and managing shapefiles using R.</em></p>

            <div class="round-buttons">
                <button class="rect-button" onclick="window.location.href='https://example.com/button1';">View R EN</button>
                <button class="rect-button" onclick="window.location.href='https://example.com/button2';">View R FR</button>
                <button class="rect-button" onclick="window.location.href='https://example.com/button3';">View R FR</button>
                <button class="rect-button" onclick="window.location.href='https://example.com/button4';">View St FR</button>
                <button class="rect-button" onclick="window.location.href='https://example.com/button5';">View St EN</button>
            </div>
            <h5 style="color: white;">#</h5>
            <h3 id="fullCode">Code</h3>
          
            <pre id="codeBlock">
                <code>
# Step 1: Install necessary libraries
install.packages("sf")       # Install 'sf' for spatial data handling
install.packages("ggplot2")  # Install 'ggplot2' for advanced plotting

# Step 2: Import necessary libraries
library(sf)       # Load 'sf' package for geospatial data manipulation
library(ggplot2)  # Load 'ggplot2' for plotting

# Step 3: Define URLs to shapefile components for adm1 and adm3
adm1_shapefile_path <- 'https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/b319b4afc5168a33cfe1173a1ea0de7094e9593f/geoBoundaries-BFA-ADM1.shp'
adm1_shapefile_shx <- 'https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/b319b4afc5168a33cfe1173a1ea0de7094e9593f/geoBoundaries-BFA-ADM1.shx'
adm1_shapefile_dbf <- 'https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/b319b4afc5168a33cfe1173a1ea0de7094e9593f/geoBoundaries-BFA-ADM1.dbf'

adm3_shapefile_path <- 'https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/b319b4afc5168a33cfe1173a1ea0de7094e9593f/geoBoundaries-BFA-ADM3.shp'
adm3_shapefile_shx <- 'https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/b319b4afc5168a33cfe1173a1ea0de7094e9593f/geoBoundaries-BFA-ADM3.shx'
adm3_shapefile_dbf <- 'https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/b319b4afc5168a33cfe1173a1ea0de7094e9593f/geoBoundaries-BFA-ADM3.dbf'

# Step 3.1: Download the shapefile components locally for adm1 and adm3
# Download adm1 shapefile components
download.file(adm1_shapefile_path, destfile = "geoBoundaries_BFA_ADM1.shp", mode = "wb")
download.file(adm1_shapefile_shx, destfile = "geoBoundaries_BFA_ADM1.shx", mode = "wb")
download.file(adm1_shapefile_dbf, destfile = "geoBoundaries_BFA_ADM1.dbf", mode = "wb")

# Download adm3 shapefile components
download.file(adm3_shapefile_path, destfile = "geoBoundaries_BFA_ADM3.shp", mode = "wb")
download.file(adm3_shapefile_shx, destfile = "geoBoundaries_BFA_ADM3.shx", mode = "wb")
download.file(adm3_shapefile_dbf, destfile = "geoBoundaries_BFA_ADM3.dbf", mode = "wb")

# Step 4: Load shapefiles into sf objects
adm1 <- st_read("geoBoundaries_BFA_ADM1.shp")   # Reads administrative level 1 shapefile
adm3 <- st_read("geoBoundaries_BFA_ADM3.shp")   # Reads administrative level 3 shapefile

# Step 5: Set the Coordinate Reference System (CRS) to ensure consistency
st_crs(adm1) <- 4326  # Set CRS to WGS84 for adm1
st_crs(adm3) <- 4326  # Set CRS to WGS84 for adm3

# Explanation:
# - It is crucial to make sure both spatial layers have the same CRS to overlay them accurately.

# Step 6: Plot the adm1 and adm3 layers together using ggplot2
ggplot() +
  geom_sf(data = adm1, fill = NA, color = "blue", lwd = 1.8) +  # Plot adm1 boundaries in blue
  geom_sf(data = adm3, fill = NA, color = "red", size = 1) +   # Plot adm3 boundaries in red
  theme_minimal() +
  theme(
    panel.grid = element_blank(),   # Remove grid lines
    axis.text = element_blank(),    # Remove axis tick labels
    axis.ticks = element_blank(),   # Remove axis ticks
    plot.title = element_text(hjust = 0.5, size = 16)  # Center and adjust the title size
  ) +
  ggtitle("Overlay of Administrative Units (ADM1 and ADM3)")

# Explanation:
# - 'geom_sf(data = adm1, fill = NA, color = "blue")' plots the adm1 boundaries in blue without filling.
# - 'geom_sf(data = adm3, fill = NA, color = "red")' plots the adm3 boundaries in red without filling.
# - 'theme_minimal()' sets a simple theme, and 'theme()' is used to remove unwanted elements like grid lines and axis ticks.
# - 'ggtitle()' adds a title and centers it for better visual presentation.
                </code>
                <button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here -->
            </pre>

            <h3 id="sampleR">Output</h3>
            <img src="https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/67daf1ea675c806b6e3bae6facfee6e7c83f2f19/basic%20plot%20in%20R.png" alt="Sample Results">
            
        `,

        merge_excel: `
            
            <div class="fixed-buttons id="fixedButtons">
                
                <button class="text-button" style="color: white;">R</button>
                <button class="text-button">On this page:</button>
                <button class="text-button" data-section="fullCode" onclick="scrollToSection('fullCode')">Code</button>
                <button class="text-button" data-section="sampleR" onclick="scrollToSection('sampleR')">Output</button>
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
            <h3 id="fullCode">Code</h3>
          
            <pre id="codeBlock">
                <code>
# Step 1: Install necessary libraries
install.packages("sf") # Installs the 'sf' library to handle spatial data
install.packages("ggplot2") # Installs the 'ggplot2' library for data visualization

# Step 2: Import the necessary libraries
library(sf) # Loads the 'sf' package, which is used to work with geospatial data in R
library(ggplot2) # Loads the 'ggplot2' package for advanced plotting

# Step 3: Define the path to the shapefile components on GitHub
shapefile_shx <- 'https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/a43027a9454581dd57aec9244e33378da723d38e/Chiefdom%202021.shx'
shapefile_dbf <- 'https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/a43027a9454581dd57aec9244e33378da723d38e/Chiefdom%202021.dbf'
shapefile_path <- 'https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/a43027a9454581dd57aec9244e33378da723d38e/Chiefdom%202021.shp'

# Explanation:
# - These variables hold the URLs to the raw shapefile components (shp, shx, and dbf files) in the GitHub repository.
# - A shapefile consists of multiple files, so all components must be downloaded.

# Step 3.1: Download the shapefile components locally
download.file(shapefile_path, destfile = "Chiefdom_2021.shp")
download.file(shapefile_shx, destfile = "Chiefdom_2021.shx")
download.file(shapefile_dbf, destfile = "Chiefdom_2021.dbf")

# Explanation:
# - 'download.file()' downloads each of the shapefile components and saves them locally.
# - This ensures that the entire shapefile (which includes geometry, attributes, and index) is available for analysis.

# Step 4: Load the shapefile into an sf object
gdf <- st_read("Chiefdom_2021.shp")

# Explanation:
# - 'st_read()' reads the shapefile into an 'sf' object (gdf).
# - The 'sf' object contains both the spatial features (geometry) and attributes of the shapefile.

# Step 4.1: Set the Coordinate Reference System (CRS)
st_crs(gdf) <- 4326

# Explanation:
# - 'st_crs() <- 4326' assigns the coordinate reference system (CRS) to the sf object.
# - EPSG 4326 represents latitude and longitude, commonly used for geographic data.

# Step 5: Plot the shapefile using ggplot2 for enhanced visualization, with customization
ggplot(data = gdf) +
  geom_sf() +
  theme_minimal() +
  theme(
    panel.grid = element_blank(),  # Remove grid lines
    axis.text = element_blank(),   # Remove x and y axis text (tick labels)
    axis.ticks = element_blank(),  # Remove x and y axis ticks
    plot.title = element_text(hjust = 0.5, size = 16)  # Center the title and adjust its size
  ) +
  ggtitle("Map of Sierra Leone")

# Explanation:
# - 'geom_sf()' adds the geometry from the sf object to the plot.
# - 'theme_minimal()' sets a basic clean theme, which is further customized.
# - 'theme()' allows for specific customizations:
#   - 'panel.grid = element_blank()' removes grid lines.
#   - 'axis.text = element_blank()' removes the axis text (x and y tick labels).
#   - 'axis.ticks = element_blank()' removes the axis ticks.
#   - 'plot.title = element_text(hjust = 0.5)' centers the title by setting 'hjust' to 0.5 (horizontal justification).
#   - 'size = 16' adjusts the size of the title text to make it more readable.

                </code>
                <button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here -->
            </pre>

            <h3 id="sampleR">Output</h3>
            <img src="https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/67daf1ea675c806b6e3bae6facfee6e7c83f2f19/basic%20plot%20in%20R.png" alt="Sample Results">
            
        `,

        map_numeric: `
            
            <div class="fixed-buttons id="fixedButtons">
                
                <button class="text-button" style="color: white;">R</button>
                <button class="text-button">On this page:</button>
                <button class="text-button" data-section="fullCode" onclick="scrollToSection('fullCode')">Code</button>
                <button class="text-button" data-section="sampleR" onclick="scrollToSection('sampleR')">Output</button>
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
            <h3 id="fullCode">Code</h3>
          
            <pre id="codeBlock">
                <code>
# Step 1: Install necessary libraries
install.packages("sf") # Installs the 'sf' library to handle spatial data
install.packages("ggplot2") # Installs the 'ggplot2' library for data visualization

# Step 2: Import the necessary libraries
library(sf) # Loads the 'sf' package, which is used to work with geospatial data in R
library(ggplot2) # Loads the 'ggplot2' package for advanced plotting

# Step 3: Define the path to the shapefile components on GitHub
shapefile_shx <- 'https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/a43027a9454581dd57aec9244e33378da723d38e/Chiefdom%202021.shx'
shapefile_dbf <- 'https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/a43027a9454581dd57aec9244e33378da723d38e/Chiefdom%202021.dbf'
shapefile_path <- 'https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/a43027a9454581dd57aec9244e33378da723d38e/Chiefdom%202021.shp'

# Explanation:
# - These variables hold the URLs to the raw shapefile components (shp, shx, and dbf files) in the GitHub repository.
# - A shapefile consists of multiple files, so all components must be downloaded.

# Step 3.1: Download the shapefile components locally
download.file(shapefile_path, destfile = "Chiefdom_2021.shp")
download.file(shapefile_shx, destfile = "Chiefdom_2021.shx")
download.file(shapefile_dbf, destfile = "Chiefdom_2021.dbf")

# Explanation:
# - 'download.file()' downloads each of the shapefile components and saves them locally.
# - This ensures that the entire shapefile (which includes geometry, attributes, and index) is available for analysis.

# Step 4: Load the shapefile into an sf object
gdf <- st_read("Chiefdom_2021.shp")

# Explanation:
# - 'st_read()' reads the shapefile into an 'sf' object (gdf).
# - The 'sf' object contains both the spatial features (geometry) and attributes of the shapefile.

# Step 4.1: Set the Coordinate Reference System (CRS)
st_crs(gdf) <- 4326

# Explanation:
# - 'st_crs() <- 4326' assigns the coordinate reference system (CRS) to the sf object.
# - EPSG 4326 represents latitude and longitude, commonly used for geographic data.

# Step 5: Plot the shapefile using ggplot2 for enhanced visualization, with customization
ggplot(data = gdf) +
  geom_sf() +
  theme_minimal() +
  theme(
    panel.grid = element_blank(),  # Remove grid lines
    axis.text = element_blank(),   # Remove x and y axis text (tick labels)
    axis.ticks = element_blank(),  # Remove x and y axis ticks
    plot.title = element_text(hjust = 0.5, size = 16)  # Center the title and adjust its size
  ) +
  ggtitle("Map of Sierra Leone")

# Explanation:
# - 'geom_sf()' adds the geometry from the sf object to the plot.
# - 'theme_minimal()' sets a basic clean theme, which is further customized.
# - 'theme()' allows for specific customizations:
#   - 'panel.grid = element_blank()' removes grid lines.
#   - 'axis.text = element_blank()' removes the axis text (x and y tick labels).
#   - 'axis.ticks = element_blank()' removes the axis ticks.
#   - 'plot.title = element_text(hjust = 0.5)' centers the title by setting 'hjust' to 0.5 (horizontal justification).
#   - 'size = 16' adjusts the size of the title text to make it more readable.

                </code>
                <button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here -->
            </pre>

            <h3 id="sampleR">Output</h3>
            <img src="https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/67daf1ea675c806b6e3bae6facfee6e7c83f2f19/basic%20plot%20in%20R.png" alt="Sample Results">
            
        `,

        map_categorical: `
            
            <div class="fixed-buttons id="fixedButtons">
                
                <button class="text-button" style="color: white;">R</button>
                <button class="text-button">On this page:</button>
                <button class="text-button" data-section="fullCode" onclick="scrollToSection('fullCode')">Code</button>
                <button class="text-button" data-section="sampleR" onclick="scrollToSection('sampleR')">Output</button>
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
            <h3 id="fullCode">Code</h3>
          
            <pre id="codeBlock">
                <code>
# Step 1: Install necessary libraries
install.packages("sf") # Installs the 'sf' library to handle spatial data
install.packages("ggplot2") # Installs the 'ggplot2' library for data visualization

# Step 2: Import the necessary libraries
library(sf) # Loads the 'sf' package, which is used to work with geospatial data in R
library(ggplot2) # Loads the 'ggplot2' package for advanced plotting

# Step 3: Define the path to the shapefile components on GitHub
shapefile_shx <- 'https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/a43027a9454581dd57aec9244e33378da723d38e/Chiefdom%202021.shx'
shapefile_dbf <- 'https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/a43027a9454581dd57aec9244e33378da723d38e/Chiefdom%202021.dbf'
shapefile_path <- 'https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/a43027a9454581dd57aec9244e33378da723d38e/Chiefdom%202021.shp'

# Explanation:
# - These variables hold the URLs to the raw shapefile components (shp, shx, and dbf files) in the GitHub repository.
# - A shapefile consists of multiple files, so all components must be downloaded.

# Step 3.1: Download the shapefile components locally
download.file(shapefile_path, destfile = "Chiefdom_2021.shp")
download.file(shapefile_shx, destfile = "Chiefdom_2021.shx")
download.file(shapefile_dbf, destfile = "Chiefdom_2021.dbf")

# Explanation:
# - 'download.file()' downloads each of the shapefile components and saves them locally.
# - This ensures that the entire shapefile (which includes geometry, attributes, and index) is available for analysis.

# Step 4: Load the shapefile into an sf object
gdf <- st_read("Chiefdom_2021.shp")

# Explanation:
# - 'st_read()' reads the shapefile into an 'sf' object (gdf).
# - The 'sf' object contains both the spatial features (geometry) and attributes of the shapefile.

# Step 4.1: Set the Coordinate Reference System (CRS)
st_crs(gdf) <- 4326

# Explanation:
# - 'st_crs() <- 4326' assigns the coordinate reference system (CRS) to the sf object.
# - EPSG 4326 represents latitude and longitude, commonly used for geographic data.

# Step 5: Plot the shapefile using ggplot2 for enhanced visualization, with customization
ggplot(data = gdf) +
  geom_sf() +
  theme_minimal() +
  theme(
    panel.grid = element_blank(),  # Remove grid lines
    axis.text = element_blank(),   # Remove x and y axis text (tick labels)
    axis.ticks = element_blank(),  # Remove x and y axis ticks
    plot.title = element_text(hjust = 0.5, size = 16)  # Center the title and adjust its size
  ) +
  ggtitle("Map of Sierra Leone")

# Explanation:
# - 'geom_sf()' adds the geometry from the sf object to the plot.
# - 'theme_minimal()' sets a basic clean theme, which is further customized.
# - 'theme()' allows for specific customizations:
#   - 'panel.grid = element_blank()' removes grid lines.
#   - 'axis.text = element_blank()' removes the axis text (x and y tick labels).
#   - 'axis.ticks = element_blank()' removes the axis ticks.
#   - 'plot.title = element_text(hjust = 0.5)' centers the title by setting 'hjust' to 0.5 (horizontal justification).
#   - 'size = 16' adjusts the size of the title text to make it more readable.

                </code>
                <button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here -->
            </pre>

            <h3 id="sampleR">Output</h3>
            <img src="https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/67daf1ea675c806b6e3bae6facfee6e7c83f2f19/basic%20plot%20in%20R.png" alt="Sample Results">
            
        `,

        manual_color: `
            
            <div class="fixed-buttons id="fixedButtons">
                
                <button class="text-button" style="color: white;">R</button>
                <button class="text-button">On this page:</button>
                <button class="text-button" data-section="fullCode" onclick="scrollToSection('fullCode')">Code</button>
                <button class="text-button" data-section="sampleR" onclick="scrollToSection('sampleR')">Output</button>
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
            <h3 id="fullCode">Code</h3>
          
            <pre id="codeBlock">
                <code>
# Step 1: Install necessary libraries
install.packages("sf") # Installs the 'sf' library to handle spatial data
install.packages("ggplot2") # Installs the 'ggplot2' library for data visualization

# Step 2: Import the necessary libraries
library(sf) # Loads the 'sf' package, which is used to work with geospatial data in R
library(ggplot2) # Loads the 'ggplot2' package for advanced plotting

# Step 3: Define the path to the shapefile components on GitHub
shapefile_shx <- 'https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/a43027a9454581dd57aec9244e33378da723d38e/Chiefdom%202021.shx'
shapefile_dbf <- 'https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/a43027a9454581dd57aec9244e33378da723d38e/Chiefdom%202021.dbf'
shapefile_path <- 'https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/a43027a9454581dd57aec9244e33378da723d38e/Chiefdom%202021.shp'

# Explanation:
# - These variables hold the URLs to the raw shapefile components (shp, shx, and dbf files) in the GitHub repository.
# - A shapefile consists of multiple files, so all components must be downloaded.

# Step 3.1: Download the shapefile components locally
download.file(shapefile_path, destfile = "Chiefdom_2021.shp")
download.file(shapefile_shx, destfile = "Chiefdom_2021.shx")
download.file(shapefile_dbf, destfile = "Chiefdom_2021.dbf")

# Explanation:
# - 'download.file()' downloads each of the shapefile components and saves them locally.
# - This ensures that the entire shapefile (which includes geometry, attributes, and index) is available for analysis.

# Step 4: Load the shapefile into an sf object
gdf <- st_read("Chiefdom_2021.shp")

# Explanation:
# - 'st_read()' reads the shapefile into an 'sf' object (gdf).
# - The 'sf' object contains both the spatial features (geometry) and attributes of the shapefile.

# Step 4.1: Set the Coordinate Reference System (CRS)
st_crs(gdf) <- 4326

# Explanation:
# - 'st_crs() <- 4326' assigns the coordinate reference system (CRS) to the sf object.
# - EPSG 4326 represents latitude and longitude, commonly used for geographic data.

# Step 5: Plot the shapefile using ggplot2 for enhanced visualization, with customization
ggplot(data = gdf) +
  geom_sf() +
  theme_minimal() +
  theme(
    panel.grid = element_blank(),  # Remove grid lines
    axis.text = element_blank(),   # Remove x and y axis text (tick labels)
    axis.ticks = element_blank(),  # Remove x and y axis ticks
    plot.title = element_text(hjust = 0.5, size = 16)  # Center the title and adjust its size
  ) +
  ggtitle("Map of Sierra Leone")

# Explanation:
# - 'geom_sf()' adds the geometry from the sf object to the plot.
# - 'theme_minimal()' sets a basic clean theme, which is further customized.
# - 'theme()' allows for specific customizations:
#   - 'panel.grid = element_blank()' removes grid lines.
#   - 'axis.text = element_blank()' removes the axis text (x and y tick labels).
#   - 'axis.ticks = element_blank()' removes the axis ticks.
#   - 'plot.title = element_text(hjust = 0.5)' centers the title by setting 'hjust' to 0.5 (horizontal justification).
#   - 'size = 16' adjusts the size of the title text to make it more readable.

                </code>
                <button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here -->
            </pre>

            <h3 id="sampleR">Output</h3>
            <img src="https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/67daf1ea675c806b6e3bae6facfee6e7c83f2f19/basic%20plot%20in%20R.png" alt="Sample Results">
            
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






