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
    .active { color: red; font-weight: bold; }
    .link { color: blue; text-decoration: underline; }
    .stButton { width: 300px; }  /* Set a fixed width for buttons */
</style>"""

# Apply button styling
st.markdown(button_style, unsafe_allow_html=True)

# Table of Contents (Left-Hand Side)
with col1:
    st.write("## Table of Contents")

    # Create clickable links for navigation
    st.markdown(f'<span class="{"active" if st.session_state.active_page == "OVERVIEW" else "link"}" onclick="window.location.reload();" style="cursor:pointer;">OVERVIEW</span>', unsafe_allow_html=True)

    with st.expander("#### A. Data assembly and Management"):
        st.write("### A.1 Shapefiles")
        st.markdown(f'<span class="{"active" if st.session_state.active_page == "Import shapefiles" else "link"}" onclick="window.location.reload();" style="cursor:pointer;" onClick="navigate_to(\'Import shapefiles\');">Import shapefiles</span>', unsafe_allow_html=True)
        st.markdown(f'<span class="{"active" if st.session_state.active_page == "rename_and_match_names" else "link"}" onclick="window.location.reload();" style="cursor:pointer;" onClick="navigate_to(\'Rename and match names\');">Rename and match names</span>', unsafe_allow_html=True)
        st.markdown(f'<span class="{"active" if st.session_state.active_page == "link_shapefiles" else "link"}" onclick="window.location.reload();" style="cursor:pointer;" onClick="navigate_to(\'Link shapefiles to relevant scales\');">Link shapefiles to relevant scales</span>', unsafe_allow_html=True)

        st.markdown(f'<span class="{"active" if st.session_state.active_page == "A.2 HEALTH FACILITIES" else "link"}" onclick="window.location.reload();" style="cursor:pointer;" onClick="navigate_to(\'A.2 HEALTH FACILITIES\');">A.2 HEALTH FACILITIES</span>', unsafe_allow_html=True)
        st.markdown(f'<span class="{"active" if st.session_state.active_page == "A.3 ROUTINE CASE DATA FROM DHIS2" else "link"}" onclick="window.location.reload();" style="cursor:pointer;" onClick="navigate_to(\'A.3 ROUTINE CASE DATA FROM DHIS2\');">A.3 ROUTINE CASE DATA FROM DHIS2</span>', unsafe_allow_html=True)
        st.markdown(f'<span class="{"active" if st.session_state.active_page == "A.4 DHS DATA" else "link"}" onclick="window.location.reload();" style="cursor:pointer;" onClick="navigate_to(\'A.4 DHS DATA\');">A.4 DHS DATA</span>', unsafe_allow_html=True)
        st.markdown(f'<span class="{"active" if st.session_state.active_page == "A.5 CLIMATE DATA" else "link"}" onclick="window.location.reload();" style="cursor:pointer;" onClick="navigate_to(\'A.5 CLIMATE DATA\');">A.5 CLIMATE DATA</span>', unsafe_allow_html=True)
        st.markdown(f'<span class="{"active" if st.session_state.active_page == "A.6 LMIS DATA" else "link"}" onclick="window.location.reload();" style="cursor:pointer;" onClick="navigate_to(\'A.6 LMIS DATA\');">A.6 LMIS DATA</span>', unsafe_allow_html=True)
        st.markdown(f'<span class="{"active" if st.session_state.active_page == "A.7 MODELED DATA" else "link"}" onclick="window.location.reload();" style="cursor:pointer;" onClick="navigate_to(\'A.7 MODELED DATA\');">A.7 MODELED DATA</span>', unsafe_allow_html=True)
        st.markdown(f'<span class="{"active" if st.session_state.active_page == "A.8 POPULATION DATA" else "link"}" onclick="window.location.reload();" style="cursor:pointer;" onClick="navigate_to(\'A.8 POPULATION DATA\');">A.8 POPULATION DATA</span>', unsafe_allow_html=True)

    with st.expander("B. EPIDEMIOLOGICAL STRATIFICATION"):
        st.markdown(f'<span class="{"active" if st.session_state.active_page == "B.1 REPORTING RATE PER VARIABLE" else "link"}" onclick="window.location.reload();" style="cursor:pointer;" onClick="navigate_to(\'B.1 REPORTING RATE PER VARIABLE\');">B.1 REPORTING RATE PER VARIABLE</span>', unsafe_allow_html=True)
        st.markdown(f'<span class="{"active" if st.session_state.active_page == "B.2 GROUP AND MERGE DATA FRAME" else "link"}" onclick="window.location.reload();" style="cursor:pointer;" onClick="navigate_to(\'B.2 GROUP AND MERGE DATA FRAME\');">B.2 GROUP AND MERGE DATA FRAME</span>', unsafe_allow_html=True)

# Content Display (Right-Hand Side)
with col2:
    st.write("## Authors: Mohamed Sillah Kanu, Sammy Oppong, Jaline Gerardin")

    # Display content based on the active page
    if st.session_state.active_page == "OVERVIEW":
        st.write("### MOTIVATION")
        st.write("""SNT is here to stay: many NMCPs have found it useful and are continuing to embrace it and further develop it for their analytical needs...""")

    elif st.session_state.active_page == "Import shapefiles":
        st.write("#### Import shapefile")
        
        # Explanation of the R code
        st.write("#### Code Explanation:")
        st.write("""1. **Installing the `sf` package**: Ensure that the `sf` package is installed for handling shapefiles in R.
        2. **Loading the library**: Use `library(sf)` to load the `sf` package.
        3. **Reading the shapefile**: Use `st_read()` to read the shapefile into `shape_data`.
        4. **Displaying the data**: Use `head(shape_data)` to display the first few rows of the data.
        """)
        st.code("""# Install and load the sf package
        install.packages("sf")
        library(sf)

        # Import the shapefile
        shapefile_data <- st_read("path_to_shapefile/your_shapefile.shp")

        # View the first few rows of the data
        print(head(shapefile_data))

        # Plot the shapefile data
        plot(shapefile_data)
        """, language="r")

        sample_output_shapefiles_r = "https://github.com/mohamedsillahkanu/si/blob/99ccc5bd8425859a0a801f01ca713e36edbd0c21/MAP_R.png?raw=true"

        st.image(sample_output_shapefiles_r, caption="Sample output of Shapefiles")

    elif st.session_state.active_page == "A.2 HEALTH FACILITIES":
        st.write("### A.2 HEALTH FACILITIES")
        st.write("**Key Topics:**")
        st.write("""- **A.2.1 Get MFL from the Malaria Program**
        - **A.2.2 Get the DHIS2 Health Facility (HF) List from the Malaria Program**
        - **A.2.3 Reconciling the MFL and the DHIS2 HF List**""")

        # Further content for A.2 HEALTH FACILITIES can be added here...
