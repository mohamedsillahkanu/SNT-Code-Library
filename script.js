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
            <img src="https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/30b4709e9d2bc58c4649f9127756e8bb4c9fda75/final%20overlay.png" alt="Output">
            
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
install.packages("sf")          # Install 'sf' for spatial data handling
install.packages("readxl")      # Install 'readxl' for reading Excel files
install.packages("dplyr")       # Install 'dplyr' for data manipulation

# Step 2: Import necessary libraries
library(sf)          # Load 'sf' package for geospatial data manipulation
library(readxl)      # Load 'readxl' package for reading Excel files
library(dplyr)       # Load 'dplyr' for data manipulation

# Step 3: Define URLs to shapefile components for 'Chiefdom 2021'
chiefdom_shapefile_path <- 'https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/a43027a9454581dd57aec9244e33378da723d38e/Chiefdom%202021.shp'
chiefdom_shapefile_shx <- 'https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/a43027a9454581dd57aec9244e33378da723d38e/Chiefdom%202021.shx'
chiefdom_shapefile_dbf <- 'https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/a43027a9454581dd57aec9244e33378da723d38e/Chiefdom%202021.dbf'

# Step 3.1: Download the shapefile components locally for 'Chiefdom 2021'
download.file(chiefdom_shapefile_path, destfile = "Chiefdom_2021.shp", mode = "wb")
download.file(chiefdom_shapefile_shx, destfile = "Chiefdom_2021.shx", mode = "wb")
download.file(chiefdom_shapefile_dbf, destfile = "Chiefdom_2021.dbf", mode = "wb")

# Step 4: Load the shapefile into an sf object
adm3 <- st_read("Chiefdom_2021.shp")

# Step 5: Set the Coordinate Reference System (CRS) to ensure consistency
st_crs(adm3) <- 4326  # Set CRS to WGS84

# Step 6: Read the Excel file that contains additional attribute data
# Define the raw URL for the Excel file
excel_file_url <- "https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/0912c6f41ef3256396c145781450286a91147554/Chiefdom_data.xlsx"

# Step 6.1: Download the Excel file to the local directory
download.file(excel_file_url, destfile = "Chiefdom_data.xlsx", mode = "wb")

# Step 6.2: Load Excel data into R
excel_data <- read_excel("Chiefdom_data.xlsx")

# Explanation:
# - 'download.file()' downloads the Excel file from the raw GitHub URL and saves it locally.
# - 'read_excel()' reads the downloaded Excel file into an R data frame.
# - Ensure the Excel data has a common key column (e.g., 'adm3_id') to merge with the shapefile.

# Step 7: Perform the merge operation and validate 1:1 relationship
# Ensure that both adm3 and excel_data have a common column named 'adm3_id'
merged_data <- merge(adm3, excel_data, by = "FIRST_CHIE", all = FALSE)

# Validate 1:1 Merge:
# Identify rows that did not merge (in both adm3 and excel_data)
unmatched_adm3 <- anti_join(adm3, excel_data, by = "FIRST_CHIE")  # Rows in 'adm3' not in 'excel_data'
unmatched_excel <- anti_join(excel_data, adm3, by = "FIRST_CHIE") # Rows in 'excel_data' not in 'adm3'

# Print the non-matching rows
print("Rows in the shapefile (adm3) that did not merge:")
print(unmatched_adm3)

print("Rows in the Excel data that did not merge:")
print(unmatched_excel)

# Explanation:
# - 'anti_join(adm3, excel_data, by = "FIRST_CHIE")' finds rows in 'adm3' that do not have a matching row in 'excel_data'.
# - 'anti_join(excel_data, adm3, by = "FIRST_CHIE")' finds rows in 'excel_data' that do not have a matching row in 'adm3'.
# - The print statements display the rows that were not matched during the merge process.

# Step 8: Print the merged data to inspect the result
print("Merged Data:")
print(merged_data)

# Explanation:
# - 'print(merged_data)' will display the contents of the merged sf object in the console.
# - This allows you to verify that the data merge was successful and to inspect the attributes.


                </code>
                <button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here -->
            </pre>

            <h3 id="sampleR">Output</h3>
            <img src="https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/4b58a824df47b56af2397452378dbc286423afae/row%20merging.png" alt="Output">

            <img src="https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/05f17c7e8e997d29e3a5000bc1adab46779554b6/Merge%20with%20excel.png" alt="Output">
            
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
# Step 1: Install necessary packages (if not installed)
install.packages("sf")          # Install 'sf' for spatial data handling
install.packages("readxl")      # Install 'readxl' for reading Excel files
install.packages("dplyr")       # Install 'dplyr' for data manipulation
install.packages("ggplot2")     # Install 'ggplot2' for plotting maps and visualizations
install.packages("viridis")     # Install 'viridis' for color palettes
install.packages("RColorBrewer")# Install 'RColorBrewer' for color palettes

# Step 2: Load the necessary libraries
library(sf)          # Load 'sf' package to work with spatial data
library(readxl)      # Load 'readxl' package to read Excel files
library(dplyr)       # Load 'dplyr' package to manipulate data
library(ggplot2)     # Load 'ggplot2' package to plot spatial data

# Step 3: Define URLs to download shapefile components for 'Chiefdom 2021'
chiefdom_shapefile_path <- 'https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/a43027a9454581dd57aec9244e33378da723d38e/Chiefdom%202021.shp'
chiefdom_shapefile_shx <- 'https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/a43027a9454581dd57aec9244e33378da723d38e/Chiefdom%202021.shx'
chiefdom_shapefile_dbf <- 'https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/a43027a9454581dd57aec9244e33378da723d38e/Chiefdom%202021.dbf'

# Step 3.1: Download the shapefile components locally for 'Chiefdom 2021'
download.file(chiefdom_shapefile_path, destfile = "Chiefdom_2021.shp", mode = "wb")
download.file(chiefdom_shapefile_shx, destfile = "Chiefdom_2021.shx", mode = "wb")
download.file(chiefdom_shapefile_dbf, destfile = "Chiefdom_2021.dbf", mode = "wb")

# Step 4: Load the shapefile into an sf object
adm3 <- st_read("Chiefdom_2021.shp")

# Step 5: Set the Coordinate Reference System (CRS) to ensure consistency
st_crs(adm3) <- 4326  # Set CRS to WGS84 (latitude/longitude)

# Step 6: Read the Excel file that contains additional attribute data
# Define the raw URL for the Excel file
excel_file_url <- "https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/d48b5acb7e4e79a6b4c929e9fa11a4335a47a389/Chiefdom_data1.xlsx"


# Step 6.1: Download the Excel file to the local directory
download.file(excel_file_url, destfile = "Chiefdom_data.xlsx", mode = "wb")

# Step 6.2: Load Excel data into R
excel_data <- read_excel("Chiefdom_data.xlsx")

# Step 7: Merge the shapefile and Excel data by a common key column ('adm3_id')
# Ensure that both adm3 and excel_data have a common column named 'adm3_id'
merged_data <- merge(adm3, excel_data, by = "FIRST_CHIE", all = FALSE)

# Step 8: Validate 1:1 Merge
# Identify rows that did not merge (in both adm3 and excel_data)
unmatched_adm3 <- anti_join(adm3, excel_data, by = "FIRST_CHIE")  # Rows in 'adm3' not in 'excel_data'
unmatched_excel <- anti_join(excel_data, adm3, by = "FIRST_CHIE") # Rows in 'excel_data' not in 'adm3'

# Step 8.1: Print the non-matching rows to check if any discrepancies exist
print("Rows in the shapefile (adm3) that did not merge:")
print(unmatched_adm3)

print("Rows in the Excel data that did not merge:")
print(unmatched_excel)

# Step 9: Categorize the 'Testing rate' column in the merged dataset
# Create a new column 'Testing_rate_category' based on defined ranges
merged_data <- merged_data %>%
  mutate(Testing_rate= cut(
    Testing_rate,  # Column to be categorized
    breaks = c(-Inf, 20, 40, 60, 80, 100),  # Define the breakpoints for categories
    labels = c("<20", "20-40", "41-60", "61-80", "81-100")  # Labels for each category
  ))

# Step 10: Plot the map using ggplot2
ggplot(data = merged_data) +
  geom_sf(aes(fill = Testing_rate), color = "black", lwd = 0.5) +  # Fill regions based on Testing_rate_category
  scale_fill_brewer(palette = "RdYlGn", name = "Testing rate (%)") +  # Use RdYlGn palette with a customized legend title
  theme_minimal() +  # Apply a minimal theme for clean visualization
  theme(
    panel.grid = element_blank(),  # Remove background grid lines for a cleaner look
    axis.text = element_blank(),   # Remove axis labels (tick values)
    axis.ticks = element_blank(),  # Remove axis tick marks
    plot.title = element_text(hjust = 0.5, size = 16, face = "bold"),  # Center the title and make it bold
    legend.position = "right"      # Position the legend on the right
  ) +
  ggtitle("Testing Rate by Chiefdom")  # Add and center the title of the map


                </code>
                <button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here -->
            </pre>

            <h3 id="sampleR">Output</h3>
            <img src="https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/902afc6c44ec5806d47da4e9fb610cee365c9bf3/tesing%20replace.png" alt="Output">
            
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
# Step 1: Install necessary packages (if not installed)
install.packages("sf")          # Install 'sf' for spatial data handling
install.packages("readxl")      # Install 'readxl' for reading Excel files
install.packages("dplyr")       # Install 'dplyr' for data manipulation
install.packages("ggplot2")     # Install 'ggplot2' for plotting maps
install.packages("RColorBrewer")# Install 'RColorBrewer' for color palettes

# Step 2: Load the necessary libraries
library(sf)          # Load 'sf' package to work with spatial data
library(readxl)      # Load 'readxl' package to read Excel files
library(dplyr)       # Load 'dplyr' package to manipulate data
library(ggplot2)     # Load 'ggplot2' package to plot spatial data
library(RColorBrewer)# Load 'RColorBrewer' package for enhanced color palettes

# Step 3: Define URLs to download shapefile components for 'Chiefdom 2021'
chiefdom_shapefile_path <- 'https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/a43027a9454581dd57aec9244e33378da723d38e/Chiefdom%202021.shp'
chiefdom_shapefile_shx <- 'https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/a43027a9454581dd57aec9244e33378da723d38e/Chiefdom%202021.shx'
chiefdom_shapefile_dbf <- 'https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/a43027a9454581dd57aec9244e33378da723d38e/Chiefdom%202021.dbf'

# Step 3.1: Download the shapefile components locally for 'Chiefdom 2021'
download.file(chiefdom_shapefile_path, destfile = "Chiefdom_2021.shp", mode = "wb")
download.file(chiefdom_shapefile_shx, destfile = "Chiefdom_2021.shx", mode = "wb")
download.file(chiefdom_shapefile_dbf, destfile = "Chiefdom_2021.dbf", mode = "wb")

# Step 4: Load the shapefile into an sf object
adm3 <- st_read("Chiefdom_2021.shp")

# Step 5: Set the Coordinate Reference System (CRS) to ensure consistency
st_crs(adm3) <- 4326  # Set CRS to WGS84 (latitude/longitude)

# Step 6: Read the Excel file that contains additional attribute data
# Define the raw URL for the Excel file
excel_file_url <- "https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/d48b5acb7e4e79a6b4c929e9fa11a4335a47a389/Chiefdom_data1.xlsx"

# Step 6.1: Download the Excel file to the local directory
download.file(excel_file_url, destfile = "Chiefdom_data1.xlsx", mode = "wb")

# Step 6.2: Load Excel data into R
excel_data <- read_excel("Chiefdom_data1.xlsx")

# Step 7: Merge the shapefile and Excel data by a common key column ('adm3_id')
# Ensure that both adm3 and excel_data have a common column named 'adm3_id'
merged_data <- merge(adm3, excel_data, by = "FIRST_CHIE", all = FALSE)

# Step 8: Plot the map using ggplot2 with RColorBrewer Set3 palette for the categorical column IRS
ggplot(data = merged_data) +
  geom_sf(aes(fill = IRS), color = "black", size = 1.2, linetype = "solid") +  # Fill regions based on IRS column, add thicker borders for separation
  scale_fill_brewer(
    palette = "Set3",  # Use 'Set1' from RColorBrewer for distinct categorical colors
    name = "IRS Status"  # Legend title
  ) +
  theme_minimal() +  # Use a minimalistic theme for clean visualization
  theme(
    panel.grid = element_blank(),  # Remove background grid lines for a cleaner look
    axis.text = element_blank(),   # Remove axis labels (tick values)
    axis.ticks = element_blank(),  # Remove axis tick marks
    plot.title = element_text(hjust = 0.5, size = 16, face = "bold"),  # Center the title and make it bold
    legend.position = "right"      # Position the legend on the right
  ) +
  ggtitle("IRS Status by Chiefdom")  # Add and center the map title


                </code>
                <button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here -->
            </pre>

            <h3 id="sampleR">Output</h3>
            <img src="https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/c25bdfc559d70f15e282d15c7286d1d4e66c12c4/IRS%20NEW.png" alt="Output">
            
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
#Step 1: Install necessary packages (if not installed)
install.packages("sf")          # Install 'sf' for spatial data handling
install.packages("readxl")      # Install 'readxl' for reading Excel files
install.packages("dplyr")       # Install 'dplyr' for data manipulation
install.packages("ggplot2")     # Install 'ggplot2' for plotting maps

# Step 2: Load the necessary libraries

library(sf)          # Load 'sf' package to work with spatial data
library(readxl)      # Load 'readxl' package to read Excel files
library(dplyr)       # Load 'dplyr' package to manipulate data
library(ggplot2)     # Load 'ggplot2' package to plot spatial data

# Step 3: Define URLs to download shapefile components for 'Chiefdom 2021'
chiefdom_shapefile_path <- 'https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/a43027a9454581dd57aec9244e33378da723d38e/Chiefdom%202021.shp'
chiefdom_shapefile_shx <- 'https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/a43027a9454581dd57aec9244e33378da723d38e/Chiefdom%202021.shx'
chiefdom_shapefile_dbf <- 'https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/a43027a9454581dd57aec9244e33378da723d38e/Chiefdom%202021.dbf'

# Step 3.1: Download the shapefile components locally for 'Chiefdom 2021'
download.file(chiefdom_shapefile_path, destfile = "Chiefdom_2021.shp", mode = "wb")
download.file(chiefdom_shapefile_shx, destfile = "Chiefdom_2021.shx", mode = "wb")
download.file(chiefdom_shapefile_dbf, destfile = "Chiefdom_2021.dbf", mode = "wb")

# Step 4: Load the shapefile into an sf object
adm3 <- st_read("Chiefdom_2021.shp")

# Step 5: Set the Coordinate Reference System (CRS) to ensure consistency
st_crs(adm3) <- 4326  # Set CRS to WGS84 (latitude/longitude)

# Step 6: Read the Excel file that contains additional attribute data
# Define the raw URL for the Excel file
excel_file_url <- "https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/d48b5acb7e4e79a6b4c929e9fa11a4335a47a389/Chiefdom_data1.xlsx"

# Step 6.1: Download the Excel file to the local directory
download.file(excel_file_url, destfile = "Chiefdom_data1.xlsx", mode = "wb")

# Step 6.2: Load Excel data into R
excel_data <- read_excel("Chiefdom_data1.xlsx")

# Step 7: Merge the shapefile and Excel data by a common key column ('adm3_id')
# Ensure that both adm3 and excel_data have a common column named 'adm3_id'
merged_data <- merge(adm3, excel_data, by = "FIRST_CHIE", all = FALSE)

# Step 8: Plot the map using ggplot2 with manual color coding for `IRS`
ggplot(data = merged_data) +
  geom_sf(aes(fill = IRS), color = "black", size = 1.2, linetype = "solid") +  # Fill regions based on `IRS` column, add thicker borders for separation
  scale_fill_manual(
    values = c("YES" = "#87CEEB", "NO" = "#B0E0E6"),  # Define manual colors: YES (light blue) and NO (lighter blue)
    name = "IRS Status"  # Legend title
  ) +
  theme_minimal() +  # Use a minimalistic theme for clean visualization
  theme(
    panel.grid = element_blank(),  # Remove background grid lines for a cleaner look
    axis.text = element_blank(),   # Remove axis labels (tick values)
    axis.ticks = element_blank(),  # Remove axis tick marks
    plot.title = element_text(hjust = 0.5, size = 16, face = "bold"),  # Center the title and make it bold
    legend.position = "right"      # Position the legend on the right
  ) +
  ggtitle("IRS Status by Chiefdom")  # Add and center the map title

                </code>
                <button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here -->
            </pre>

            <h3 id="sampleR">Output</h3>
            <img src="https://raw.githubusercontent.com/mohamedsillahkanu/SNT-Code-Library/07020381e3bed8011bc1ef27151947bdffad7a7f/manual%20color%20coding.png" alt="Output">
            
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






