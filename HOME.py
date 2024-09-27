import streamlit as st

# Set up the app title
st.title("Project Overview")

# Create two columns: one for the Table of Contents (TOC) and the other for the content
toc_col, page_col = st.columns([1, 3])

# Sidebar or Table of Contents (TOC)
with toc_col:
    st.header("Contents")

    # Expandable TOC sections without checkboxes or buttons
    with st.expander("Overview", expanded=False):
        st.session_state.selected_page = "Overview"
    
    with st.expander("A. DATA ASSEMBLY AND MANAGEMENT", expanded=False):
        st.session_state.selected_page = "A. DATA ASSEMBLY AND MANAGEMENT"
        # Sub-sections of A.
        st.write("A.1 Shapefiles")
        st.write("A.2 Health Facilities")
        st.write("A.3 Routine Case Data from DHIS2")
        st.write("A.4 DHS Data")
        st.write("A.5 Population Data")
        st.write("A.6 Climate Data")
        st.write("A.7 LMIS Data")
        st.write("A.8 Modeled Data")

    with st.expander("B. Epidemiological Stratification", expanded=False):
        st.session_state.selected_page = "B. Epidemiological Stratification"
        # Sub-sections of B.
        st.write("B.1 Reporting Rate per Variable")
        st.write("B.2 Group and Merge Data Frame")
        st.write("B.3 Crude Incidence by Year")
        st.write("B.4 Adjusted Incidence by Year")
        st.write("B.5 Option to Select Incidence")
        st.write("B.6 Risk Categorization")

# Main content area where only the selected section is displayed
with page_col:
    # Display content based on the selected TOC item
    selected_page = st.session_state.get("selected_page", "Overview")
    
    if selected_page == "Overview":
        st.markdown("## Overview")
        st.markdown("This section provides a high-level summary of the project.")
    
    elif selected_page == "A.1 Shapefiles":
        st.markdown("## A.1 Shapefiles")
        st.markdown("This section covers importing and managing shapefiles.")
    
    elif selected_page == "A.2 Health Facilities":
        st.markdown("## A.2 Health Facilities")
        st.markdown("Description of health facilities data management.")
    
    elif selected_page == "A.3 Routine Case Data from DHIS2":
        st.markdown("## A.3 Routine Case Data from DHIS2")
        st.markdown("How to manage and analyze routine case data from DHIS2.")
    
    # (Continue with the rest of the sections similarly)
