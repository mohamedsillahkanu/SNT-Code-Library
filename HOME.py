import streamlit as st

# Set up the app title
st.title("Project Overview")

# Create two columns: one for the Table of Contents (TOC) and the other for content
toc_col, page_col = st.columns([1, 3])

# Sidebar or Table of Contents (TOC)
with toc_col:
    st.header("Contents")
    
    # Create sections and sub-sections in the TOC using clickable links
    with st.expander("Overview", expanded=True):
        st.markdown("[Motivation](#motivation)")
        st.markdown("[Objectives](#objectives)")
        st.markdown("[Target Audience](#target-audience)")
        st.markdown("[Scope](#scope)")

    with st.expander("A. DATA ASSEMBLY AND MANAGEMENT", expanded=False):
        st.markdown("[A.1 Shapefiles](#shapefiles)")
        st.markdown("[A.2 Health Facilities](#health-facilities)")
        st.markdown("[A.3 Routine Case Data from DHIS2](#routine-case-data-from-dhis2)")
        st.markdown("[A.4 DHS Data](#dhs-data)")
        st.markdown("[A.5 Population Data](#population-data)")
        st.markdown("[A.6 Climate Data](#climate-data)")
        st.markdown("[A.7 LMIS Data](#lmis-data)")
        st.markdown("[A.8 Modeled Data](#modeled-data)")

    # Add more sections like B, C, D, etc., similarly
    with st.expander("B. Epidemiological Stratification", expanded=False):
        st.markdown("[B.1 Reporting Rate per Variable](#reporting-rate-per-variable)")
        st.markdown("[B.2 Group and Merge Data Frame](#group-and-merge-data-frame)")
        st.markdown("[B.3 Crude Incidence by Year](#crude-incidence-by-year)")
        st.markdown("[B.4 Adjusted Incidence by Year](#adjusted-incidence-by-year)")
        st.markdown("[B.5 Option to Select Incidence](#option-to-select-incidence)")
        st.markdown("[B.6 Risk Categorization](#risk-categorization)")

    # Continue with other sections (C, D, E, etc.) as needed...

# Main content area where the selected page will be displayed
with page_col:
    # Render content based on anchors
    st.markdown("""
    ## Overview

    ### <a name="motivation"></a>Motivation
    This section covers the motivation for the project.
    
    ### <a name="objectives"></a>Objectives
    This section explains the project objectives.
    
    ### <a name="target-audience"></a>Target Audience
    This section describes the target audience for the project.
    
    ### <a name="scope"></a>Scope
    This section details the scope of the project.

    ## A. DATA ASSEMBLY AND MANAGEMENT

    ### <a name="shapefiles"></a>A.1 Shapefiles
    Description of how to import and manage shapefiles.

    ### <a name="health-facilities"></a>A.2 Health Facilities
    Overview of health facilities data management.

    ### <a name="routine-case-data-from-dhis2"></a>A.3 Routine Case Data from DHIS2
    How to manage and analyze routine case data from DHIS2.

    ### <a name="dhs-data"></a>A.4 DHS Data
    Description of how DHS data is processed and used in the project.

    ### <a name="population-data"></a>A.5 Population Data
    - **A.5.1**: Extract Population Data from Raster Population Source (Option 1)
    - **A.5.2**: Extract Population Data from Country's Recent Census (Option 2)

    ### <a name="climate-data"></a>A.6 Climate Data
    Information on using climate data in the project.

    ### <a name="lmis-data"></a>A.7 LMIS Data
    How to integrate LMIS data.

    ### <a name="modeled-data"></a>A.8 Modeled Data
    Discussion of modeled data and its relevance to the project.

    ## B. Epidemiological Stratification

    ### <a name="reporting-rate-per-variable"></a>B.1 Reporting Rate per Variable
    How reporting rates are calculated.

    ### <a name="group-and-merge-data-frame"></a>B.2 Group and Merge Data Frame
    Explanation of data merging techniques.

    ### <a name="crude-incidence-by-year"></a>B.3 Crude Incidence by Year
    How crude incidence is calculated year by year.

    ### <a name="adjusted-incidence-by-year"></a>B.4 Adjusted Incidence by Year
    Adjusted incidence rate calculation.

    ### <a name="option-to-select-incidence"></a>B.5 Option to Select Incidence
    Option to select different incidence models.

    ### <a name="risk-categorization"></a>B.6 Risk Categorization
    Explanation of risk categorization methods.

    """, unsafe_allow_html=True)
