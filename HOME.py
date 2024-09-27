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
    .stButton { 
        width: 100%;  /* Set the width to 100% for equal length */
        height: 50px;  /* Set a fixed height for buttons */
        border-radius: 5px;  /* Modify the border radius for less roundness */
    }  
</style>"""

# Apply button styling
st.markdown(button_style, unsafe_allow_html=True)

# Table of Contents (Left-Hand Side)
with col1:
    st.write("## Table of Contents")

    # Using clickable buttons to navigate to sections
    st.button("OVERVIEW", key="overview", on_click=navigate_to, args=("OVERVIEW",))

    with st.expander("#### A. Data assembly and Management"):
        st.write("### A.1 Shapefiles")
        st.button("Import shapefiles", key="import_shapefiles", on_click=navigate_to, args=("Import shapefiles",))
        st.button("Rename and match names", key="rename_and_match_names", on_click=navigate_to, args=("Rename and match names",))
        st.button("Link shapefiles to relevant scales", key="link_shapefiles", on_click=navigate_to, args=("Link shapefiles to relevant scales",))
                 
        st.button("A.2 HEALTH FACILITIES", key="A2_Health_Facilities", on_click=navigate_to, args=("A.2 HEALTH FACILITIES",))
        st.button("A.3 ROUTINE CASE DATA FROM DHIS2", key="A3_Routine_Case_Data", on_click=navigate_to, args=("A.3 ROUTINE CASE DATA FROM DHIS2",))
        st.button("A.4 DHS DATA", key="A4_DHS_data", on_click=navigate_to, args=("A.4 DHS DATA",))
        st.button("A.5 CLIMATE DATA", key="A5_Climate_data", on_click=navigate_to, args=("A.5 CLIMATE DATA",))
        st.button("A.6 LMIS DATA", key="A6_LMIS_data", on_click=navigate_to, args=("A.6 LMIS DATA",))
        st.button("A.7 MODELED DATA", key="A7_Modeled_data", on_click=navigate_to, args=("A.7 MODELED DATA",))
        st.button("A.8 POPULATION DATA", key="A8_Population_data", on_click=navigate_to, args=("A.8 POPULATION DATA",))

    with st.expander("B. EPIDEMIOLOGICAL STRATIFICATION"):
        st.write("### Epidemiological stratification")
        st.button("B.1 REPORTING RATE PER VARIABLE", key="B1_Reporting_Rate", on_click=navigate_to, args=("B.1 REPORTING RATE PER VARIABLE",))
        st.button("B.2 GROUP AND MERGE DATA FRAME", key="B2_Group_Merge", on_click=navigate_to, args=("B.2 GROUP AND MERGE DATA FRAME",))

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
