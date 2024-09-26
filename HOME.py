import streamlit as st

# Overview Section
with st.expander("Overview"):
    st.write("""
    - [Overview](#overview)
    - [Motivation](#motivation)
    - [Objectives](#objectives)
    - [Target Audience](#target-audience)
    - [Scope](#scope)
    """)

# A. DATA ASSEMBLY AND MANAGEMENT
with st.expander("A. DATA ASSEMBLY AND MANAGEMENT"):
    st.write("""
    - [A.1 Shapefiles](#shapefiles)
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

# B. Epidemiological Stratification
with st.expander("B Epidemiological Stratification"):
    st.write("""
    - [B.1 Reporting Rate per Variable](#reporting-rate-per-variable)
    - [B.2 Group and Merge Data Frame](#group-and-merge-data-frame)
    - [B.3 Crude Incidence by Year](#crude-incidence-by-year)
    - [B.4 Adjusted Incidence by Year](#adjusted-incidence-by-year)
    - [B.5 Option to Select Incidence](#option-to-select-incidence)
    - [B.6 Risk Categorization](#risk-categorization)
    """)

# C. Stratification of Other Determinants
with st.expander("C Stratification of Other Determinants"):
    st.write("""
    - [C.1 Access to Care](#access-to-care)
    - [C.2 Seasonality](#seasonality)
    """)

# D. Review of Past Interventions
with st.expander("D Review of Past Interventions"):
    st.write("""
    - [D.1 EPI Coverage and Dropout Rate](#epi-coverage-and-dropout-rate)
    - [D.2 IPTp and ANC Coverage](#iptp-and-anc-coverage)
    - [D.3 PMC (Prevention of Malaria in Pregnancy)](#pmc-prevention-of-malaria-in-pregnancy)
    - [D.4 SMC (Seasonal Malaria Chemoprevention)](#smc-seasonal-malaria-chemoprevention)
    - [D.5 Malaria Vaccine](#malaria-vaccine)
    - [D.6 ITN Ownership, Access, Usage, and Type](#itn-ownership-access-usage-and-type)
    - [D.7 ITN Operational Coverage](#itn-operational-coverage)
    - [D.8 IRS (Indoor Residual Spraying)](#irs-indoor-residual-spraying)
    - [D.13 School-Based Distribution of ITNs (SBD)](#school-based-distribution-of-itns-sbd)
    - [D.14 LSM (Larval Source Management)](#lsm-larval-source-management)
        - [D.14.1 LSM Coverage Analysis](#lsm-coverage-analysis)
    - [D.15 Assessing the Quality of Case Management](#assessing-the-quality-of-case-management)
    """)

# E. Targeting of Interventions
with st.expander("E Targeting of Interventions"):
    st.write("""
    - [E Targeting of Interventions](#targeting-of-interventions)
    """)

# F. Retrospective Analysis
with st.expander("F Retrospective Analysis"):
    st.write("""
    - [F Retrospective Analysis](#retrospective-analysis)
    """)

# G. Urban Microstratification
with st.expander("G Urban Microstratification"):
    st.write("""
    - [G Urban Microstratification](#urban-microstratification)
    """)

# Run the Streamlit app
if __name__ == "__main__":
    st.run()
