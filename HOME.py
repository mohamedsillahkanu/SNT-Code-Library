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

# Table of Contents (Left-Hand Side)
with col1:
    st.write("## Table of Contents")

    # Using clickable text to navigate to sections
    st.markdown('[OVERVIEW](#)', unsafe_allow_html=True)

    with st.expander("#### A. Data assembly and Management"):
        st.write("### A.1 Shapefiles")
        st.markdown('[Import shapefiles](#)', unsafe_allow_html=True)
        st.markdown('[Rename and match names](#)', unsafe_allow_html=True)
        st.markdown('[Link shapefiles to relevant scales](#)', unsafe_allow_html=True)

        st.markdown('[A.2 HEALTH FACILITIES](#)', unsafe_allow_html=True)
        st.markdown('[A.3 ROUTINE CASE DATA FROM DHIS2](#)', unsafe_allow_html=True)
        st.markdown('[A.4 DHS DATA](#)', unsafe_allow_html=True)
        st.markdown('[A.5 CLIMATE DATA](#)', unsafe_allow_html=True)
        st.markdown('[A.6 LMIS DATA](#)', unsafe_allow_html=True)
        st.markdown('[A.7 MODELED DATA](#)', unsafe_allow_html=True)
        st.markdown('[A.8 POPULATION DATA](#)', unsafe_allow_html=True)

    with st.expander("B. EPIDEMIOLOGICAL STRATIFICATION"):
        st.write("### Epidemiological stratification")
        st.markdown('[B.1 REPORTING RATE PER VARIABLE](#)', unsafe_allow_html=True)
        st.markdown('[B.2 GROUP AND MERGE DATA FRAME](#)', unsafe_allow_html=True)

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
