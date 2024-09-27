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
    .stButton { width: 300px; }  /* Set a fixed width for buttons */
</style>"""

# Apply button styling
st.markdown(button_style, unsafe_allow_html=True)

# Table of Contents (Left-Hand Side)
with col1:
    st.write("## Table of Contents")

    # Using clickable buttons to navigate to sections
    st.button("OVERVIEW", key="overview", on_click=navigate_to, args=("OVERVIEW",))

    with st.expander("A. Data assembly and Management"):
        st.write("A.1 Shapefiles")
        st.button("Import shapefiles", key="import_shapefiles", on_click=navigate_to, args=("Import shapefiles",))
                 
        st.button("A.2 HEALTH FACILITIES", key="A2_Health_Facilities", on_click=navigate_to, args=("A.2 HEALTH FACILITIES",))
        st.button("A.3 ROUTINE CASE DATA FROM DHIS2", key="A3_Routine_Case_Data", on_click=navigate_to, args=("A.3 ROUTINE CASE DATA FROM DHIS2",))
        st.button("A.4 DHS DATA", key="A4_DHS_data", on_click=navigate_to, args=("A.4 DHS DATA",))
        st.button("A.5 CLIMATE DATA", key="A5_Climate_data", on_click=navigate_to, args=("A.5 CLIMATE DATA",))
        st.button("A.6 LMIS DATA", key="A6_LMIS_data", on_click=navigate_to, args=("A.6 LMIS DATA",))
        st.button("A.7 MODELED DATA", key="A7_Modeled_data", on_click=navigate_to, args=("A.7 MODELED DATA",))
        st.button("A.8 POPULATION DATA", key="A8_Population_data", on_click=navigate_to, args=("A.8 POPULATION DATA",))

        with st.expander("A.1 SHAPEFILES"):
            st.button("A.1.1 Import Shapefiles", key="A11_Shapefiles", on_click=navigate_to, args=("A.1.1 Import Shapefiles",))
            st.button("A.1.2 Rename and match names", key="A12_Rename_Names", on_click=navigate_to, args=("A.1.2 Rename and match names",))
            st.button("A.1.3 Visualizing shapefiles and making basic maps", key="A13_Visualize_Shapefiles", on_click=navigate_to, args=("A.1.3 Visualizing shapefiles and making basic maps",))

    with st.expander("B. EPIDEMIOLOGICAL STRATIFICATION"):
        st.button("B.1 REPORTING RATE PER VARIABLE", key="B1_Reporting_Rate", on_click=navigate_to, args=("B.1 REPORTING RATE PER VARIABLE",))
        st.button("B.2 GROUP AND MERGE DATA FRAME", key="B2_Group_Merge", on_click=navigate_to, args=("B.2 GROUP AND MERGE DATA FRAME",))

# Content Display (Right-Hand Side)
with col2:
    st.write("## Authors: Mohamed Sillah Kanu, Sammy Oppong, Jaline Gerardin")

    # Display content based on the active page
    if st.session_state.active_page == "OVERVIEW":
        st.write("### MOTIVATION")
        st.write("""
        SNT is here to stay: many NMCPs have found it useful and are continuing to embrace it and further develop it for their analytical needs...
        """)

    elif st.session_state.active_page == "Import shapefiles":
        st.write("### A.1 SHAPEFILES")
        st.write("""
        **Key Topics:**
        - A.1.1 Import shapefiles
        - A.1.2 Rename and match names
        - A.1.3 Visualizing shapefiles and making basic maps
        """)

        # Display R code
        st.write("#### Example R Code to Read a Shapefile")
        st.code("""
        # Install the 'sf' package if not already installed
        # install.packages("sf")

        # Load the library
        library(sf)

        # Read the shapefile into an R object
        shapefile_path <- "path_to_your_shapefile.shp"
        shape_data <- st_read(shapefile_path)

        # Display the first few rows of the shapefile data
        head(shape_data)
        """, language="r")

        # Explanation of the R code
        st.write("#### Code Explanation:")
        st.write("""
        1. **Installing the `sf` package**: Ensure that the `sf` package is installed for handling shapefiles in R.
        2. **Loading the library**: Use `library(sf)` to load the `sf` package.
        3. **Reading the shapefile**: Use `st_read()` to read the shapefile into `shape_data`.
        4. **Displaying the data**: Use `head(shape_data)` to display the first few rows of the data.
        """)

        sample_output_shapefiles_r = "https://github.com/mohamedsillahkanu/si/blob/99ccc5bd8425859a0a801f01ca713e36edbd0c21/MAP_R.png?raw=true"

        st.image(sample_output_shapefiles_r, caption="Sample output of Shapefiles")

    elif st.session_state.active_page == "A.2 HEALTH FACILITIES":
        st.write("### A.2 HEALTH FACILITIES")
        st.write("**Key Topics:**")
        st.write("""
        - **A.2.1 Get MFL from the Malaria Program**
        - **A.2.2 Get the DHIS2 Health Facility (HF) List from the Malaria Program**
        - **A.2.3 Reconciling the MFL and the DHIS2 HF List**
        """)

        # Further content for A.2 HEALTH FACILITIES can be added here...
