import streamlit as st

# Setting page configuration
st.set_page_config(layout="wide")

# Initialize session state for tracking which page is active
if 'active_page' not in st.session_state:
    st.session_state.active_page = 'OVERVIEW'  # Set OVERVIEW as the default landing page

# Function to navigate to a different page
def navigate_to(page):
    st.session_state.active_page = page

# Create two columns (one for TOC, one for content)
col1, col2 = st.columns([1, 3])

# Define button style to ensure equal length
button_style = """<style>
    .clickable {
        display: inline-block;
        width: 100%;  /* Set the width to 100% for equal length */
        height: 50px;  /* Set a fixed height for buttons */
        border-radius: 5px;  /* Modify the border radius for less roundness */
        text-align: center;
        padding: 10px;
        background-color: #007BFF;  /* Button color */
        color: white;  /* Text color */
        text-decoration: none;  /* Remove underline */
        margin-bottom: 10px;  /* Space between clickable items */
    }
    .clickable:hover {
        background-color: #0056b3;  /* Darker button color on hover */
    }
</style>"""

# Apply button styling
st.markdown(button_style, unsafe_allow_html=True)

# Table of Contents (Left-Hand Side)
with col1:
    st.write("## Table of Contents")

    # Using clickable text to navigate to sections
    st.markdown('<a class="clickable" href="#" onclick="window.parent.navigate_to(\'OVERVIEW\');">OVERVIEW</a>', unsafe_allow_html=True)

    with st.expander("#### A. Data assembly and Management"):
        st.write("### A.1 Shapefiles")
        st.markdown('<a class="clickable" href="#" onclick="window.parent.navigate_to(\'Import shapefiles\');">Import shapefiles</a>', unsafe_allow_html=True)
        st.markdown('<a class="clickable" href="#" onclick="window.parent.navigate_to(\'Rename and match names\');">Rename and match names</a>', unsafe_allow_html=True)
        st.markdown('<a class="clickable" href="#" onclick="window.parent.navigate_to(\'Link shapefiles to relevant scales\');">Link shapefiles to relevant scales</a>', unsafe_allow_html=True)

        st.markdown('<a class="clickable" href="#" onclick="window.parent.navigate_to(\'A.2 HEALTH FACILITIES\');">A.2 HEALTH FACILITIES</a>', unsafe_allow_html=True)
        st.markdown('<a class="clickable" href="#" onclick="window.parent.navigate_to(\'A.3 ROUTINE CASE DATA FROM DHIS2\');">A.3 ROUTINE CASE DATA FROM DHIS2</a>', unsafe_allow_html=True)
        st.markdown('<a class="clickable" href="#" onclick="window.parent.navigate_to(\'A.4 DHS DATA\');">A.4 DHS DATA</a>', unsafe_allow_html=True)
        st.markdown('<a class="clickable" href="#" onclick="window.parent.navigate_to(\'A.5 CLIMATE DATA\');">A.5 CLIMATE DATA</a>', unsafe_allow_html=True)
        st.markdown('<a class="clickable" href="#" onclick="window.parent.navigate_to(\'A.6 LMIS DATA\');">A.6 LMIS DATA</a>', unsafe_allow_html=True)
        st.markdown('<a class="clickable" href="#" onclick="window.parent.navigate_to(\'A.7 MODELED DATA\');">A.7 MODELED DATA</a>', unsafe_allow_html=True)
        st.markdown('<a class="clickable" href="#" onclick="window.parent.navigate_to(\'A.8 POPULATION DATA\');">A.8 POPULATION DATA</a>', unsafe_allow_html=True)

    with st.expander("B. EPIDEMIOLOGICAL STRATIFICATION"):
        st.write("### Epidemiological stratification")
        st.markdown('<a class="clickable" href="#" onclick="window.parent.navigate_to(\'B.1 REPORTING RATE PER VARIABLE\');">B.1 REPORTING RATE PER VARIABLE</a>', unsafe_allow_html=True)
        st.markdown('<a class="clickable" href="#" onclick="window.parent.navigate_to(\'B.2 GROUP AND MERGE DATA FRAME\');">B.2 GROUP AND MERGE DATA FRAME</a>', unsafe_allow_html=True)

# Content Display (Right-Hand Side)
with col2:
    st.write("## Authors: Mohamed Sillah Kanu, Sammy Oppong, Jaline Gerardin")

    # Display content based on the active page
    if st.session_state.active_page == "OVERVIEW":
        st.write("### MOTIVATION")
        st.write("""SNT is here to stay: many NMCPs have found it useful and are continuing to embrace it and further develop it for their analytical needs...""")

    elif st.session_state.active_page == "Import shapefiles":
        st.write("## A.1 Shapefiles")
        st.write("### A.1.1 Import shapefiles")
        st.write("#### Explanation")
        st.write("""
        To work with shapefiles in R, you can use the sf package. This package provides functions to read, manipulate, and visualize spatial data
        
        **Steps:**
        1. Install and load the sf package if you haven't already.
        2. Use the st_read() function to import the shapefile.
        """)

        st.write(" #### Code Snippet")
        st.code("""
        # Install and load the sf package
        install.packages("sf")
        library(sf)

        # Import the shapefile
        shapefile_data <- st_read("path_to_shapefile/your_shapefile.shp")

        # View the first few rows of the data
        print(head(shapefile_data))

        # Plot the shapefile data
        plot(shapefile_data)
        """, language="r")

    elif st.session_state.active_page == "A.2 HEALTH FACILITIES":
        st.write("### A.2 HEALTH FACILITIES")
        st.write("**Key Topics:**")
        st.write("""- **A.2.1 Get MFL from the Malaria Program**
- **A.2.2 Get the DHIS2 Health Facility (HF) List from the Malaria Program**
- **A.2.3 Reconciling the MFL and the DHIS2 HF List**""")
