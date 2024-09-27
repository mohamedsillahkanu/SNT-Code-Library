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
    - [A.1 Shapefiles](#a1-shapefiles)
        - [A.1.1 Import shapefiles](#a11-import-shapefiles)
    - [A.2 Health Facilities](#a2-health-facilities)
    - [A.3 Routine Case Data from DHIS2](#a3-routine-case-data-from-dhis2)
    - [A.4 DHS Data](#a4-dhs-data)
    - [A.5 Population Data](#a5-population-data)
        - [A.5.1 Extract Population Data from Raster Population Source (Option 1)](#a51-extract-population-data-from-raster-population-source-option-1)
        - [A.5.2 Extract Population Data from Country's Recent Census (Option 2)](#a52-extract-population-data-from-countrys-recent-census-option-2)
    - [A.6 Climate Data](#a6-climate-data)
    - [A.7 LMIS Data](#a7-lmis-data)
    - [A.8 Modeled Data](#a8-modeled-data)
    """)

with st.sidebar.expander("B. Epidemiological Stratification", expanded=False):
    st.write("""
    - [B.1 Reporting Rate per Variable](#b1-reporting-rate-per-variable)
    - [B.2 Group and Merge Data Frame](#b2-group-and-merge-data-frame)
    - [B.3 Crude Incidence by Year](#b3-crude-incidence-by-year)
    - [B.4 Adjusted Incidence by Year](#b4-adjusted-incidence-by-year)
    - [B.5 Option to Select Incidence](#b5-option-to-select-incidence)
    - [B.6 Risk Categorization](#b6-risk-categorization)
    """)

with st.sidebar.expander("C. Stratification of Other Determinants", expanded=False):
    st.write("""
    - [C.1 Access to Care](#c1-access-to-care)
    - [C.2 Seasonality](#c2-seasonality)
    """)

with st.sidebar.expander("D. Review of Past Interventions", expanded=False):
    st.write("""
    - [D.1 EPI Coverage and Dropout Rate](#d1-epi-coverage-and-dropout-rate)
    - [D.2 IPTp and ANC Coverage](#d2-iptp-and-anc-coverage)
    - [D.3 PMC (Prevention of Malaria in Pregnancy)](#d3-pmc-prevention-of-malaria-in-pregnancy)
    - [D.4 SMC (Seasonal Malaria Chemoprevention)](#d4-smc-seasonal-malaria-chemoprevention)
    - [D.5 Malaria Vaccine](#d5-malaria-vaccine)
    - [D.6 ITN Ownership, Access, Usage, and Type](#d6-itn-ownership-access-usage-and-type)
    - [D.7 ITN Operational Coverage](#d7-itn-operational-coverage)
    - [D.8 IRS (Indoor Residual Spraying)](#d8-irs-indoor-residual-spraying)
    - [D.9 School-Based Distribution of ITNs (SBD)](#d9-school-based-distribution-of-itns-sbd)
    - [D.10 LSM (Larval Source Management)](#d10-larval-source-management)
        - [D.10.1 LSM Coverage Analysis](#d101-lsm-coverage-analysis)
    - [D.11 Assessing the Quality of Case Management](#d11-assessing-the-quality-of-case-management)
    """)

with st.sidebar.expander("E. Targeting of Interventions", expanded=False):
    st.write("""
    - [E.1 Targeting of Interventions](#e1-targeting-of-interventions)
    """)

with st.sidebar.expander("F. Retrospective Analysis", expanded=False):
    st.write("""
    - [F.1 Retrospective Analysis](#f1-retrospective-analysis)
    """)

with st.sidebar.expander("G. Urban Microstratification", expanded=False):
    st.write("""
    - [G.1 Urban Microstratification](#g1-urban-microstratification)
    """)

# Main content area
st.markdown("<a id='motivation'></a>", unsafe_allow_html=True)
st.markdown("## Motivation")
st.write("Detailed information about motivation.")

st.markdown("<a id='objectives'></a>", unsafe_allow_html=True)
st.markdown("## Objectives")
st.write("Detailed information about objectives.")

st.markdown("<a id='target-audience'></a>", unsafe_allow_html=True)
st.markdown("## Target Audience")
st.write("Detailed information about target audience.")

st.markdown("<a id='scope'></a>", unsafe_allow_html=True)
st.markdown("## Scope")
st.write("Detailed information about the scope.")

st.markdown("<a id='a1-shapefiles'></a>", unsafe_allow_html=True)
st.markdown("## A.1 Shapefiles")
st.write("Information about shapefiles.")

st.markdown("<a id='a11-import-shapefiles'></a>", unsafe_allow_html=True)
st.markdown("## A.1.1 Import shapefiles")
st.write("Instructions for importing shapefiles.")

st.markdown("<a id='a2-health-facilities'></a>", unsafe_allow_html=True)
st.markdown("## A.2 Health Facilities")
st.write("Information regarding health facilities.")

st.markdown("<a id='a3-routine-case-data-from-dhis2'></a>", unsafe_allow_html=True)
st.markdown("## A.3 Routine Case Data from DHIS2")
st.write("Details about routine case data from DHIS2.")

st.markdown("<a id='a4-dhs-data'></a>", unsafe_allow_html=True)
st.markdown("## A.4 DHS Data")
st.write("Information about DHS data.")

st.markdown("<a id='a5-population-data'></a>", unsafe_allow_html=True)
st.markdown("## A.5 Population Data")
st.write("Details about population data.")

st.markdown("<a id='a6-climate-data'></a>", unsafe_allow_html=True)
st.markdown("## A.6 Climate Data")
st.write("Information about climate data.")

st.markdown("<a id='a7-lmis-data'></a>", unsafe_allow_html=True)
st.markdown("## A.7 LMIS Data")
st.write("Information about LMIS data.")

st.markdown("<a id='a8-modeled-data'></a>", unsafe_allow_html=True)
st.markdown("## A.8 Modeled Data")
st.write("Details about modeled data.")

st.markdown("<a id='b1-reporting-rate-per-variable'></a>", unsafe_allow_html=True)
st.markdown("## B.1 Reporting Rate per Variable")
st.write("Details about reporting rate per variable.")

st.markdown("<a id='b2-group-and-merge-data-frame'></a>", unsafe_allow_html=True)
st.markdown("## B.2 Group and Merge Data Frame")
st.write("Instructions for grouping and merging data frames.")

st.markdown("<a id='b3-crude-incidence-by-year'></a>", unsafe_allow_html=True)
st.markdown("## B.3 Crude Incidence by Year")
st.write("Details about crude incidence by year.")

st.markdown("<a id='b4-adjusted-incidence-by-year'></a>", unsafe_allow_html=True)
st.markdown("## B.4 Adjusted Incidence by Year")
st.write("Details about adjusted incidence by year.")

st.markdown("<a id='b5-option-to-select-incidence'></a>", unsafe_allow_html=True)
st.markdown("## B.5 Option to Select Incidence")
st.write("Options for selecting incidence.")

st.markdown("<a id='b6-risk-categorization'></a>", unsafe_allow_html=True)
st.markdown("## B.6 Risk Categorization")
st.write("Details about risk categorization.")

# Continue adding content for each section as needed...
