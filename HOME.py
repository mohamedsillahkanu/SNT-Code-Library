import streamlit as st

# Setting page configuration
st.set_page_config(layout="wide")

# Initialize session state for tracking which page is active
if 'active_page' not in st.session_state:
    st.session_state.active_page = 'OVERVIEW'  # Set OVERVIEW as the default landing page

# Function to navigate to a different page
def navigate_to(page):
    st.session_state.active_page = page
    st.experimental_rerun()  # Refresh the app to update URL parameters

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

    # Using clickable underlined text links for navigation
    st.markdown("<a href='#' onclick=\"document.getElementById('overview').scrollIntoView();\" style='text-decoration:underline; color:blue;'>OVERVIEW</a>", unsafe_allow_html=True)

    with st.expander("#### A. Data assembly and Management"):
        st.write("### A.1 Shapefiles")
        st.markdown("<a href='#' onclick=\"document.getElementById('import_shapefiles').scrollIntoView();\" style='text-decoration:underline; color:blue;'>Import shapefiles</a>", unsafe_allow_html=True)
        st.markdown("<a href='#' onclick=\"document.getElementById('rename_and_match_names').scrollIntoView();\" style='text-decoration:underline; color:blue;'>Rename and match names</a>", unsafe_allow_html=True)
        st.markdown("<a href='#' onclick=\"document.getElementById('link_shapefiles').scrollIntoView();\" style='text-decoration:underline; color:blue;'>Link shapefiles to relevant scales</a>", unsafe_allow_html=True)
        
        st.markdown("<a href='#' onclick=\"document.getElementById('A2_Health_Facilities').scrollIntoView();\" style='text-decoration:underline; color:blue;'>A.2 HEALTH FACILITIES</a>", unsafe_allow_html=True)
        st.markdown("<a href='#' onclick=\"document.getElementById('A3_Routine_Case_Data').scrollIntoView();\" style='text-decoration:underline; color:blue;'>A.3 ROUTINE CASE DATA FROM DHIS2</a>", unsafe_allow_html=True)
        st.markdown("<a href='#' onclick=\"document.getElementById('A4_DHS_data').scrollIntoView();\" style='text-decoration:underline; color:blue;'>A.4 DHS DATA</a>", unsafe_allow_html=True)
        st.markdown("<a href='#' onclick=\"document.getElementById('A5_Climate_data').scrollIntoView();\" style='text-decoration:underline; color:blue;'>A.5 CLIMATE DATA</a>", unsafe_allow_html=True)
        st.markdown("<a href='#' onclick=\"document.getElementById('A6_LMIS_data').scrollIntoView();\" style='text-decoration:underline; color:blue;'>A.6 LMIS DATA</a>", unsafe_allow_html=True)
        st.markdown("<a href='#' onclick=\"document.getElementById('A7_Modeled_data').scrollIntoView();\" style='text-decoration:underline; color:blue;'>A.7 MODELED DATA</a>", unsafe_allow_html=True)
        st.markdown("<a href='#' onclick=\"document.getElementById('A8_Population_data').scrollIntoView();\" style='text-decoration:underline; color:blue;'>A.8 POPULATION DATA</a>", unsafe_allow_html=True)

    with st.expander("B. EPIDEMIOLOGICAL STRATIFICATION"):
        st.markdown("<a href='#' onclick=\"document.getElementById('B1_Reporting_Rate').scrollIntoView();\" style='text-decoration:underline; color:blue;'>B.1 REPORTING RATE PER VARIABLE</a>", unsafe_allow_html=True)
        st.markdown("<a href='#' onclick=\"document.getElementById('B2_Group_Merge').scrollIntoView();\" style='text-decoration:underline; color:blue;'>B.2 GROUP AND MERGE DATA FRAME</a>", unsafe_allow_html=True)

# Content Display (Right-Hand Side)
with col2:
    st.write("## Authors: Mohamed Sillah Kanu, Sammy Oppong, Jaline Gerardin")

    # Display content based on the active page
    if st.session_state.active_page == "OVERVIEW":
        st.markdown("<div id='overview'></div>", unsafe_allow_html=True)
        st.write("### MOTIVATION")
        st.write("""SNT is here to stay: many NMCPs have found it useful and are continuing to embrace it and further develop it for their analytical needs...""")

    elif st.session_state.active_page == "Import shapefiles":
        st.markdown("<div id='import_shapefiles'></div>", unsafe_allow_html=True)
        st.write("#### Import shapefile")

         # Explanation of the R code
        st.write("#### Code Explanation:")
        st.write("""1. **Installing the `sf` package**: Ensure that the `sf` package is installed for handling shapefiles in R.
        2. **Loading the library**: Use `library(sf)` to load the `sf` package.
        3. **Reading the shapefile**: Use `st_read()` to read the shapefile into `shape_data`.
        4. **Displaying the data**: Use `head(shape_data)` to display the first few rows of the data.""")

        st.code("""# Install and load the sf package
        install.packages("sf")
        library(sf)

        # Import the shapefile
        shapefile_data <- st_read("path_to_shapefile/your_shapefile.shp")

        # View the first few rows of the data
        print(head(shapefile_data))

        # Plot the shapefile data
        plot(shapefile_data)""", language="r")

        sample_output_shapefiles_r = "https://github.com/mohamedsillahkanu/si/blob/99ccc5bd8425859a0a801f01ca713e36edbd0c21/MAP_R.png?raw=true"
        st.image(sample_output_shapefiles_r, caption="Sample output of Shapefiles")

    elif st.session_state.active_page == "A.2 HEALTH FACILITIES":
        st.markdown("<div id='A2_Health_Facilities'></div>", unsafe_allow_html=True)
        st.write("### A.2 HEALTH FACILITIES")
        st.write("**Key Topics:**")
        st.write("""- **A.2.1 Get MFL from the Malaria Program**
                     - **A.2.2 Get the DHIS2 Health Facility (HF) List from the Malaria Program**
                     - **A.2.3 Reconciling the MFL and the DHIS2 HF List**""")

        # Further content for A.2 HEALTH FACILITIES can be added here...
