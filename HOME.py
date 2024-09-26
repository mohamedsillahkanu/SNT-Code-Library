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
    st.query_params['page'] = page  # Use st.query_params to set the query parameter

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
        
        # Collapsible expander for A.1 SHAPEFILES
        with st.expander("A.1 SHAPEFILES"):
            st.button("A.1.1 Import Shapefiles", key="A1.1_Import_Shapefiles", on_click=navigate_to, args=("A.1.1 Import Shapefiles",))
            st.button("A.1.2 Rename and match names", key="A1.2_Rename_and_Match_Names", on_click=navigate_to, args=("A.1.2 Rename and match names",))
            st.button("A.1.3 Link Shapefiles to relevant scales", key="A1.3_Link_to_Scales", on_click=navigate_to, args=("A.1.3 Link Shapefiles to relevant scales",))
            st.button("A.1.4 Visualizing Shapefiles and Making basic maps", key="A1.4_Visualizing_and_Mapping", on_click=navigate_to, args=("A.1.4 Visualizing Shapefiles and Making basic maps",))
        
        # Other sections under DATA ASSEMBLY AND MANAGEMENT
        st.button("A.2 HEALTH FACILITIES", key="A2_Health_Facilities", on_click=navigate_to, args=("A.2 HEALTH FACILITIES",))
        st.button("A.3 ROUTINE CASE DATA FROM DHIS2", key="A3_Routine_Case_Data", on_click=navigate_to, args=("A.3 ROUTINE CASE DATA FROM DHIS2",))
        st.button("A.4 DHS DATA", key="A4_DHS_data", on_click=navigate_to, args=("A.4 DHS DATA",))
        st.button("A.5 CLIMATE DATA", key="A5_Climate_data", on_click=navigate_to, args=("A.5 CLIMATE DATA",))
        st.button("A.6 LMIS DATA", key="A6_LMIS_data", on_click=navigate_to, args=("A.6 LMIS DATA",))
        st.button("A.7 MODELED DATA", key="A7_Modeled_data", on_click=navigate_to, args=("A.7 MODELED DATA",))
        st.button("A.8 POPULATION DATA", key="A6_Population_data", on_click=navigate_to, args=("A.8 POPULATION DATA",))

# The right-hand side can now display the content based on st.session_state.active_page
with col2:
    if st.session_state.active_page == 'OVERVIEW':
        st.write("# Overview Section")
        st.write("This is the content for the Overview.")
    
    elif st.session_state.active_page == 'A.1.1 Import Shapefiles':
        st.write("# A.1.1 Import Shapefiles")
        st.write("Details on how to import shapefiles into the system.")

    elif st.session_state.active_page == 'A.1.2 Rename and match names':
        st.write("# A.1.2 Rename and match names")
        st.write("Instructions for renaming and matching shapefiles with appropriate names.")

    elif st.session_state.active_page == 'A.1.3 Link Shapefiles to relevant scales':
        st.write("# A.1.3 Link Shapefiles to relevant scales")
        st.write("Link shapefiles to appropriate geographic or administrative scales.")

    elif st.session_state.active_page == 'A.1.4 Visualizing Shapefiles and Making basic maps':
        st.write("# A.1.4 Visualizing Shapefiles and Making basic maps")
        st.write("Steps for visualizing shapefiles and creating basic maps.")

    # Continue with other sections similarly
