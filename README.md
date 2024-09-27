import streamlit as st

# Set page configuration
st.set_page_config(layout="wide")

# Initialize session state to track the active page and selected section
if 'active_page' not in st.session_state:
    st.session_state.active_page = 'TOC'  # Default to Table of Contents page
if 'selected_section' not in st.session_state:
    st.session_state.selected_section = None  # No section selected initially

# Function to navigate to a different page
def navigate_to(page, section=None):
    st.session_state.active_page = page
    st.session_state.selected_section = section

# Display Table of Contents on the first page
if st.session_state.active_page == 'TOC':
    st.title("Table of Contents")
    st.markdown("<details><summary>Overview</summary><ul>"
                "<li><a href='#' onclick='navigate_to(\"Overview\")'>Overview</a></li>"
                "<li><a href='#' onclick='navigate_to(\"Motivation\")'>Motivation</a></li>"
                "<li><a href='#' onclick='navigate_to(\"Objectives\")'>Objectives</a></li>"
                "<li><a href='#' onclick='navigate_to(\"Target Audience\")'>Target Audience</a></li>"
                "<li><a href='#' onclick='navigate_to(\"Scope\")'>Scope</a></li>"
                "</ul></details>", unsafe_allow_html=True)

    st.markdown("<details><summary>A. DATA ASSEMBLY AND MANAGEMENT</summary><ul>"
                "<li><a href='#' onclick='navigate_to(\"A1 Shapefiles\")'>A.1 Shapefiles</a></li>"
                "<li><a href='#' onclick='navigate_to(\"A2 Health Facilities\")'>A.2 Health Facilities</a></li>"
                "<li><a href='#' onclick='navigate_to(\"A3 Routine Case Data from DHIS2\")'>A.3 Routine Case Data from DHIS2</a></li>"
                "<li><a href='#' onclick='navigate_to(\"A4 DHS Data\")'>A.4 DHS Data</a></li>"
                "<li><a href='#' onclick='navigate_to(\"A5 Population Data\")'>A.5 Population Data</a></li>"
                "<li><a href='#' onclick='navigate_to(\"A6 Climate Data\")'>A.6 Climate Data</a></li>"
                "<li><a href='#' onclick='navigate_to(\"A7 LMIS Data\")'>A.7 LMIS Data</a></li>"
                "<li><a href='#' onclick='navigate_to(\"A8 Modeled Data\")'>A.8 Modeled Data</a></li>"
                "</ul></details>", unsafe_allow_html=True)

    st.markdown("<details><summary>B Epidemiological Stratification</summary><ul>"
                "<li><a href='#' onclick='navigate_to(\"B1 Reporting Rate per Variable\")'>B.1 Reporting Rate per Variable</a></li>"
                "<li><a href='#' onclick='navigate_to(\"B2 Group and Merge Data Frame\")'>B.2 Group and Merge Data Frame</a></li>"
                "</ul></details>", unsafe_allow_html=True)

    # Add more sections as needed...

    st.button("View Selected Section", on_click=navigate_to, args=("Content",))

# Display the content of the selected section on the second page
if st.session_state.active_page == 'Content':
    if st.session_state.selected_section == "Overview":
        st.title("Overview")
        st.write("## This is the overview section.")
    elif st.session_state.selected_section == "Motivation":
        st.title("Motivation")
        st.write("## This section explains the motivation behind the project.")
    elif st.session_state.selected_section == "Objectives":
        st.title("Objectives")
        st.write("## Here are the objectives of the study.")
    elif st.session_state.selected_section == "A1 Shapefiles":
        st.title("A.1 Shapefiles")
        st.write("## Content related to shapefiles goes here.")
    elif st.session_state.selected_section == "A2 Health Facilities":
        st.title("A.2 Health Facilities")
        st.write("## Content related to health facilities goes here.")
    # Add content for more sections as needed...

    # Option to go back to TOC
    st.button("Back to Table of Contents", on_click=navigate_to, args=("TOC",))

