import streamlit as st

# Sidebar for navigation
st.sidebar.title("Report Outline")

# Create a select box for navigation
section = st.sidebar.selectbox("Select a Section", [
    "Overview", 
    "A. DATA ASSEMBLY AND MANAGEMENT", 
    "B. Epidemiological Stratification", 
    "C. Stratification of Other Determinants", 
    "D. Review of Past Interventions", 
    "E. Targeting of Interventions", 
    "F. Retrospective Analysis", 
    "G. Urban Microstratification"
])

# Main content display based on selection
if section == "Overview":
    st.title("Overview")
    st.markdown("""
    - Overview
    - Motivation
    - Objectives
    - Target Audience
    - Scope
    """)

elif section == "A. DATA ASSEMBLY AND MANAGEMENT":
    st.title("A. DATA ASSEMBLY AND MANAGEMENT")
    st.markdown("""
    - A.1 Shapefiles
    - A.2 Health Facilities
    - A.3 Routine Case Data from DHIS2
    - A.4 DHS Data
    - A.5 Population Data
        - A.5.1 Extract Population Data from Raster Population Source (Option 1)
        - A.5.2 Extract Population Data from Country's Recent Census (Option 2)
    - A.6 Climate Data
    - A.7 LMIS Data
    - A.8 Modeled Data
    """)

elif section == "B. Epidemiological Stratification":
    st.title("B. Epidemiological Stratification")
    st.markdown("""
    - B.1 Reporting Rate per Variable
    - B.2 Group and Merge Data Frame
    - B.3 Crude Incidence by Year
    - B.4 Adjusted Incidence by Year
    - B.5 Option to Select Incidence
    - B.6 Risk Categorization
    """)

elif section == "C. Stratification of Other Determinants":
    st.title("C. Stratification of Other Determinants")
    st.markdown("""
    - C.1 Access to Care
    - C.2 Seasonality
    """)

elif section == "D. Review of Past Interventions":
    st.title("D. Review of Past Interventions")
    st.markdown("""
    - D.1 EPI Coverage and Dropout Rate
    - D.2 IPTp and ANC Coverage
    - D.3 PMC (Prevention of Malaria in Pregnancy)
    - D.4 SMC (Seasonal Malaria Chemoprevention)
    - D.5 Malaria Vaccine
    - D.6 ITN Ownership, Access, Usage, and Type
    - D.7 ITN Operational Coverage
    - D.8 IRS (Indoor Residual Spraying)
    - D.13 School-Based Distribution of ITNs (SBD)
    - D.14 LSM (Larval Source Management)
        - D.14.1 LSM Coverage Analysis
    - D.15 Assessing the Quality of Case Management
    """)

elif section == "E. Targeting of Interventions":
    st.title("E. Targeting of Interventions")
    st.markdown("""
    - Targeting of Interventions
    """)

elif section == "F. Retrospective Analysis":
    st.title("F. Retrospective Analysis")
    st.markdown("""
    - Retrospective Analysis
    """)

elif section == "G. Urban Microstratification":
    st.title("G. Urban Microstratification")
    st.markdown("""
    - Urban Microstratification
    """)
