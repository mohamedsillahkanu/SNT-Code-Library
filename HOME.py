import streamlit as st

# Set up the app title
st.title("Project Overview")

# Create two columns: one for the Table of Contents (TOC) and the other for content
toc_col, page_col = st.columns([1, 3])

# Initialize the session state to track which section is expanded
if "selected_page" not in st.session_state:
    st.session_state.selected_page = "Overview"

# Sidebar or Table of Contents (TOC)
with toc_col:
    st.header("Contents")

    # Expandable sections for the Table of Contents
    with st.expander("Overview", expanded=(st.session_state.selected_page == "Overview")):
        if st.button("Overview"):
            st.session_state.selected_page = "Overview"

    with st.expander("A. DATA ASSEMBLY AND MANAGEMENT", expanded=(st.session_state.selected_page.startswith("A."))):
        if st.button("A.1 Shapefiles"):
            st.session_state.selected_page = "A.1 Shapefiles"
        if st.button("A.2 Health Facilities"):
            st.session_state.selected_page = "A.2 Health Facilities"
        if st.button("A.3 Routine Case Data from DHIS2"):
            st.session_state.selected_page = "A.3 Routine Case Data from DHIS2"
        if st.button("A.4 DHS Data"):
            st.session_state.selected_page = "A.4 DHS Data"
        if st.button("A.5 Population Data"):
            st.session_state.selected_page = "A.5 Population Data"
        if st.button("A.6 Climate Data"):
            st.session_state.selected_page = "A.6 Climate Data"
        if st.button("A.7 LMIS Data"):
            st.session_state.selected_page = "A.7 LMIS Data"
        if st.button("A.8 Modeled Data"):
            st.session_state.selected_page = "A.8 Modeled Data"

    with st.expander("B. Epidemiological Stratification", expanded=(st.session_state.selected_page.startswith("B."))):
        if st.button("B.1 Reporting Rate per Variable"):
            st.session_state.selected_page = "B.1 Reporting Rate per Variable"
        if st.button("B.2 Group and Merge Data Frame"):
            st.session_state.selected_page = "B.2 Group and Merge Data Frame"
        if st.button("B.3 Crude Incidence by Year"):
            st.session_state.selected_page = "B.3 Crude Incidence by Year"
        if st.button("B.4 Adjusted Incidence by Year"):
            st.session_state.selected_page = "B.4 Adjusted Incidence by Year"
        if st.button("B.5 Option to Select Incidence"):
            st.session_state.selected_page = "B.5 Option to Select Incidence"
        if st.button("B.6 Risk Categorization"):
            st.session_state.selected_page = "B.6 Risk Categorization"

    # Add more sections as needed...

# Main content area where only the selected section is displayed
with page_col:
    # Display content based on the selected TOC item
    if st.session_state.selected_page == "Overview":
        st.markdown("## Overview")
        st.markdown("This section provides a high-level summary of the project.")
    
    elif st.session_state.selected_page == "A.1 Shapefiles":
        st.markdown("## A.1 Shapefiles")
        st.markdown("This section covers importing and managing shapefiles.")

    elif st.session_state.selected_page == "A.2 Health Facilities":
        st.markdown("## A.2 Health Facilities")
        st.markdown("Description of health facilities data management.")

    elif st.session_state.selected_page == "A.3 Routine Case Data from DHIS2":
        st.markdown("## A.3 Routine Case Data from DHIS2")
        st.markdown("How to manage and analyze routine case data from DHIS2.")

    elif st.session_state.selected_page == "A.4 DHS Data":
        st.markdown("## A.4 DHS Data")
        st.markdown("Description of how DHS data is processed and used in the project.")

    elif st.session_state.selected_page == "A.5 Population Data":
        st.markdown("## A.5 Population Data")
        st.markdown("- **A.5.1**: Extract Population Data from Raster Population Source (Option 1)")
        st.markdown("- **A.5.2**: Extract Population Data from Country's Recent Census (Option 2)")

    elif st.session_state.selected_page == "A.6 Climate Data":
        st.markdown("## A.6 Climate Data")
        st.markdown("Information on using climate data in the project.")

    elif st.session_state.selected_page == "A.7 LMIS Data":
        st.markdown("## A.7 LMIS Data")
        st.markdown("How to integrate LMIS data.")

    elif st.session_state.selected_page == "A.8 Modeled Data":
        st.markdown("## A.8 Modeled Data")
        st.markdown("Discussion of modeled data and its relevance to the project.")

    elif st.session_state.selected_page == "B.1 Reporting Rate per Variable":
        st.markdown("## B.1 Reporting Rate per Variable")
        st.markdown("How reporting rates are calculated.")

    elif st.session_state.selected_page == "B.2 Group and Merge Data Frame":
        st.markdown("## B.2 Group and Merge Data Frame")
        st.markdown("Explanation of data merging techniques.")

    elif st.session_state.selected_page == "B.3 Crude Incidence by Year":
        st.markdown("## B.3 Crude Incidence by Year")
        st.markdown("How crude incidence is calculated year by year.")

    elif st.session_state.selected_page == "B.4 Adjusted Incidence by Year":
        st.markdown("## B.4 Adjusted Incidence by Year")
        st.markdown("Adjusted incidence rate calculation.")

    elif st.session_state.selected_page == "B.5 Option to Select Incidence":
        st.markdown("## B.5 Option to Select Incidence")
        st.markdown("Option to select different incidence models.")

    elif st.session_state.selected_page == "B.6 Risk Categorization":
        st.markdown("## B.6 Risk Categorization")
        st.markdown("Explanation of risk categorization methods.")
