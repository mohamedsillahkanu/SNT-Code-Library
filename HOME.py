import streamlit as st

# Set the title of the app
st.title("Project Overview")

# Create a sidebar for navigation
st.sidebar.header("Contents")

# Collapsible sections for each main category
with st.sidebar.expander("Overview", expanded=True):
    st.write("""
    - [Motivation](#motivation)
    - [Objectives](#objectives)
    - [Target Audience](#target-audience)
    - [Scope](#scope)
    """)

with st.sidebar.expander("A. DATA ASSEMBLY AND MANAGEMENT", expanded=False):
    st.write("""
    - [A.1 Shapefiles](#shapefiles)
        - [A.1.1 Import shapefiles](#import-shapefiles)
    - [A.2 Health Facilities](#health-facilities)
    - [A.3 Routine Case Data from DHIS2](#routine-case-data-from-dhis2)
    - [A.4 DHS Data](#dhs-data)
    - [A.5 Population Data](#population-data)
        - [A.5.1 Extract Population Data from Raster Population Source (Option 1)](#extract-population-data-from-raster-population-source-option-1)
        - [A.5.2 Extract Population Data from Country's Recent Census (Option 2)](#extract-population-data-from-countrys-recent-census-option-2)
    - [A.6 Climate Data](#climate-data)
    - [A.7 LMIS Data](#lmis-data)
    - [A.8 Modeled Data](#modeled-data)
    """)

with st.sidebar.expander("B. Epidemiological Stratification", expanded=False):
    st.write("""
    - [B.1 Reporting Rate per Variable](#reporting-rate-per-variable)
    - [B.2 Group and Merge Data Frame](#group-and-merge-data-frame)
    - [B.3 Crude Incidence by Year](#crude-incidence-by-year)
    - [B.4 Adjusted Incidence by Year](#adjusted-incidence-by-year)
    - [B.5 Option to Select Incidence](#option-to-select-incidence)
    - [B.6 Risk Categorization](#risk-categorization)
    """)

with st.sidebar.expander("C. Stratification of Other Determinants", expanded=False):
    st.write("""
    - [C.1 Access to Care](#access-to-care)
    - [C.2 Seasonality](#seasonality)
    """)

with st.sidebar.expander("D. Review of Past Interventions", expanded=False):
    st.write("""
    - [D.1 EPI Coverage and Dropout Rate](#epi-coverage-and-dropout-rate)
    - [D.2 IPTp and ANC Coverage](#iptp-and-anc-coverage)
    - [D.3 PMC (Prevention of Malaria in Pregnancy)](#pmc-prevention-of-malaria-in-pregnancy)
    - [D.4 SMC (Seasonal Malaria Chemoprevention)](#smc-seasonal-malaria-chemoprevention)
    - [D.5 Malaria Vaccine](#malaria-vaccine)
    - [D.6 ITN Ownership, Access, Usage, and Type](#itn-ownership-access-usage-and-type)
    - [D.7 ITN Operational Coverage](#itn-operational-coverage)
    - [D.8 IRS (Indoor Residual Spraying)](#irs-indoor-residual-spraying)
    - [D.9 School-Based Distribution of ITNs (SBD)](#school-based-distribution-of-itns-sbd)
    - [D.10 LSM (Larval Source Management)](#lsm-larval-source-management)
        - [D.10.1 LSM Coverage Analysis](#lsm-coverage-analysis)
    - [D.11 Assessing the Quality of Case Management](#assessing-the-quality-of-case-management)
    """)

with st.sidebar.expander("E. Targeting of Interventions", expanded=False):
    st.write("""
    - [E.1 Targeting of Interventions](#targeting-of-interventions)
    """)

with st.sidebar.expander("F. Retrospective Analysis", expanded=False):
    st.write("""
    - [F.1 Retrospective Analysis](#retrospective-analysis)
    """)

with st.sidebar.expander("G. Urban Microstratification", expanded=False):
    st.write("""
    - [G.1 Urban Microstratification](#urban-microstratification)
    """)

# Section selection
section = st.sidebar.selectbox("Select a section to view", [
    "Overview", 
    "A.1 Shapefiles", 
    "A.1.1 Import shapefiles", 
    "A.2 Health Facilities", 
    "A.3 Routine Case Data from DHIS2", 
    "A.4 DHS Data", 
    "A.5 Population Data", 
    "A.6 Climate Data", 
    "A.7 LMIS Data", 
    "A.8 Modeled Data",
    "B. Epidemiological Stratification",
    "C. Stratification of Other Determinants",
    "D. Review of Past Interventions",
    "E. Targeting of Interventions",
    "F. Retrospective Analysis",
    "G. Urban Microstratification"
])

# Main content area
if section == "Overview":
    st.markdown("## Overview Content")
    st.write("Detailed information about motivation, objectives, target audience, and scope.")

elif section == "A.1 Shapefiles":
    st.markdown("## A.1 Shapefiles Content")
    st.write("Information about shapefiles.")

elif section == "A.1.1 Import shapefiles":
    st.markdown("## A.1.1 Import shapefiles Content")
    st.write("Instructions for importing shapefiles.")

elif section == "A.2 Health Facilities":
    st.markdown("## A.2 Health Facilities Content")
    st.write("Information regarding health facilities.")

elif section == "A.3 Routine Case Data from DHIS2":
    st.markdown("## A.3 Routine Case Data from DHIS2 Content")
    st.write("Details about routine case data from DHIS2.")

# Continue adding `elif` for each section as needed
