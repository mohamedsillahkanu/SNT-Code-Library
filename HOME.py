import streamlit as st

# Setting page configuration
st.set_page_config(layout="wide")

# Initialize session state for tracking which page is active
if 'active_page' not in st.session_state:
    st.session_state.active_page = 'OVERVIEW'  # Set OVERVIEW as the default landing page

# Function to navigate to a different page and update the URL query parameters
def navigate_to(page):
    st.session_state.active_page = page
    # Set the query parameters in the URL
    # st.experimental_set_query_params(page=page)

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

    # Using clickable text to navigate to sections with consistent button width
    st.button("OVERVIEW", key="overview", on_click=navigate_to, args=("OVERVIEW",))
    
    with st.expander("A. DATA ASSEMBLY AND MANAGEMENT"):
        st.button("A.1 SHAPEFILES", key="A1_Shapefiles", on_click=navigate_to, args=("A.1 SHAPEFILES",))
        st.button("A.2 HEALTH FACILITIES", key="A2_Health_Facilities", on_click=navigate_to, args=("A.2 HEALTH FACILITIES",))
        st.button("A.3 ROUTINE CASE DATA FROM DHIS2", key="A3_Routine_Case_Data", on_click=navigate_to, args=("A.3 ROUTINE CASE DATA FROM DHIS2",))
        st.button("A.4 DHS DATA", key="A4_DHS_data", on_click=navigate_to, args=("A.4 DHS DATA",))
        st.button("A.5 CLIMATE DATA", key="A5_Climate_data", on_click=navigate_to, args=("A.5 CLIMATE DATA",))
        st.button("A.6 LMIS DATA", key="A6_LMIS_data", on_click=navigate_to, args=("A.6 LMIS DATA",))
        st.button("A.7 MODELED DATA", key="A7_Modeled_data", on_click=navigate_to, args=("A.7 MODELED DATA",))
        st.button("A.8 POPULATION DATA", key="A6_Population_data", on_click=navigate_to, args=("A.8 POPULATION DATA",))
        
        # Expand sub-sections for A.1 SHAPEFILES
        with st.expander("A.1 SHAPEFILES"):
            st.button("A.1.1 Import Shapefiles", key="A11_Shapefiles", on_click=navigate_to, args=("A.1.1 Import Shapefiles",))
            st.button("A.1.2 Rename and match names", key="A12_Health_Facilities", on_click=navigate_to, args=("A.1.2 Rename and match names",))
            st.button("A.1.3 Visualizing shapefiles and making basic maps", key="A13_Routine_Case_Data", on_click=navigate_to, args=("A.1.3 Visualizing shapefiles and making basic maps",))

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
        SNT is here to stay: many NMCPs have found it useful and are continuing to embrace it and further develop it for their analytical needs. Since 2019, multiple individuals have supported the analysis portions of SNT. In most cases, individuals have built their own code in a variety of languages (Stata, R, and Python), sometimes building on others’ previous code and sometimes re-developed independently.
        
        As SNT matures, more quality assurance is needed such that NMCPs can be confident that the analysis they use to inform their decisions is of high quality regardless of the individual supporting analyst. The continued rollout of SNT also means that analysis can become more efficient if analysts are better able to build on each other’s work rather than tempted to reinvent what has already been developed. Lastly, SNT analysis can become much more accessible if there is a common resource available to help those with intermediate coding skills quickly access the collective knowledge of the SNT analyst community.
        """)

        st.write("### OBJECTIVES")
        st.write(""" 
        We will build a code library for SNT analysis to:
        
        - Ensure that SNT analysts are using similar, correct approaches.
        - Improve efficiency of SNT analysis by minimizing duplication of effort.
        - Promote accessibility of SNT analysis by lowering barriers to entry.
        """)

        st.write("### TARGET AUDIENCE")
        st.write(""" 
        Anyone doing this kind of work. We assume some basic knowledge of R, some understanding of the data, and a strong connection to the NMCP.
        """)

        st.write("### SCOPE")
        st.write(""" 
        All analysis steps of SNT up to but not including mathematical modeling; some related analysis.
        
        The code library will be in R and publicly available. It will be quality-assured and well-commented.
        
        When multiple algorithmic options could be used, strengths and limitations of each one, along with discussion of when to use each option, as possible.
        
        Framing text, and when possible the code comments, will be available in both English and French.
        """)

    elif st.session_state.active_page == "A.1 SHAPEFILES":
        st.write("### A.1 SHAPEFILES")
        st.write(""" 
        **Key Topics:**
        - A.1.1 Import shapefiles
        - A.1.2 Rename and match names
        - A.1.3 Link shapefiles to relevant scales
        - A.1.4 Visualizing shapefiles and making basic maps
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
        1. **Installing the `sf` package**: The code starts by ensuring that the `sf` package, which is used for handling shapefiles in R, is installed. If it's not installed, you would uncomment the `install.packages("sf")` line to install it.
        
        2. **Loading the library**: The `library(sf)` function is used to load the `sf` package into the current R session.
        
        3. **Reading the shapefile**: The `st_read()` function is called to read the shapefile, where `shapefile_path` is the location of your `.shp` file. This reads the shapefile into the `shape_data` object, which is a data frame-like object containing geospatial information.
        
        4. **Displaying the data**: The `head(shape_data)` command is used to display the first few rows of the shapefile data, allowing you to check the structure and contents of the file.
        """)

        sample_output_shapefiles_r = "https://github.com/mohamedsillahkanu/si/blob/99ccc5bd8425859a0a801f01ca713e36edbd0c21/MAP_R.png?raw=true"
    
        st.image(sample_output_shapefiles_r, caption="Sample output of Shapefiles")

    elif st.session_state.active_page == "A.2 HEALTH FACILITIES":
        st.write("### A.2 HEALTH FACILITIES")
        st.write("""         
        **Key Topics:**
        - **A.2.1 Get MFL from the Malaria Program**
          - **A.2.1.1 Useful Columns:**
            - `adm0` - Country
            - `adm1` - Province/Region
            - `adm2` - District
            - `adm3` - Sub-district/Sub-county
            - `Health Facility (HF)` - Name of the health facility
            - `Date HF Started Reporting` - Date when the health facility began reporting
            - `Is HF Still Active?` - Status indicating if the health facility is still operational

        """)
    # Add similar elif blocks for other sections as needed
