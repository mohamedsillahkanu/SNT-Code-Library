# Code Library for Sub-National Tailoring

**Version:** 11 September 2024  
**Authors:** Mohamed Kanu, Sammy Oppong, Jaline Gerardin  

---

## Table of Contents

<details>
<summary>Overview</summary>

### Overview
This code library aims to standardize the analytical approaches used in Sub-National Tailoring (SNT), ensuring consistency and quality in data analysis across various programs.

### Motivation
SNT is here to stay: many National Malaria Control Programs (NMCPs) have found it useful and are continuing to embrace it and further develop it for their analytical needs. Since 2019, multiple individuals have supported the analysis portions of SNT. In most cases, individuals have built their own code in a variety of languages (Stata, R, and Python), sometimes building on others’ previous code and sometimes re-developed independently.

As SNT matures, more quality assurance is needed such that NMCPs can be confident that the analysis they use to inform their decisions is of high quality regardless of the individual supporting analyst. The continued rollout of SNT also means that analysis can become more efficient if analysts are better able to build on each other’s work rather than tempted to reinvent what has already been developed. Lastly, SNT analysis can become much more accessible if there is a common resource available to help those with intermediate coding skills quickly access the collective knowledge of the SNT analyst community.
</details>

<details>
<summary>Objectives</summary>

### Objectives
We will build a code library for SNT analysis to:
- Ensure that SNT analysts are using similar, correct approaches.
- Improve efficiency of SNT analysis by minimizing duplication of effort.
- Promote accessibility of SNT analysis by lowering barriers to entry.
</details>

<details>
<summary>Target Audience</summary>

### Target Audience
Anyone doing this kind of work. We assume some basic knowledge of R, some understanding of the data, and a strong connection to the NMCP.
</details>

<details>
<summary>Scope</summary>

### Scope
All analysis steps of SNT up to but not including mathematical modeling; some related analysis. The code library will be in R and publicly available. It will be quality-assured and well-commented. When multiple algorithmic options could be used, strengths and limitations of each one, along with discussion of when to use each option, as possible. Framing text, and when possible the code comments, will be available in both English and French.
</details>

<details>
<summary>Library Elements</summary>

### Library Elements

#### A. DATA ASSEMBLY AND MANAGEMENT
- **A.1 Shapefiles**
  - A.1.1 Import shapefiles
  - A.1.2 Rename and match names
  - A.1.3 Link shapefiles to relevant scales
  - A.1.4 Visualizing shapefiles and making basic maps
- **A.2 Health Facilities**
  - A.2.1 Get MFL from the Malaria Program
    - Useful Columns:
      - adm0 - country
      - adm1 - province/region
      - adm2 - district
      - adm3 - sub district/sub-county
      - Health Facility (HF)
      - Date HF started reporting
      - Is HF still active?
      - If no, when did HF become inactive?
      - Type of HF (District hospital, teaching hospital, health post, etc.)
  - A.2.2 Get the DHIS2 Health Facility (HF) List from the Malaria Program
    - Useful Columns:
      - adm0, adm1, adm2, adm3, Health Facility (HF), Date HF started reporting in DHIS2, Is HF still active? If no, when did HF become inactive? Type of HF (MCHP, CHP, CHC, Hospital)
  - A.2.3 Reconciling the MFL and the DHIS2 HF list
    - Identifying HFs in both or one list based on HF name
      - Output:
        - HF in both DHIS2 and MFL
        - HF in MFL but not in DHIS2
        - HF in DHIS2 but not in MFL
    - Reconciling inconsistent HF Type (MCHP, CHP, CHC, Hospital)
    - Reconciling HF adm1, adm2, and adm3 designation
    - HF active/inactive status
    - Health Facility Reporting Periods
    - Health Facility Reporting Frequency
      - Output: One HF database (with active and inactive HFs)
      - Visualization (Heatmap)
  - A.2.5 Restricting HFs in database
  - A.2.6 Summary outputs
  - A.2.7 Health facility coordinates

- **A.3 Routine Case Data from DHIS2**
  - A.3.1 Data extraction from DHIS2
  - A.3.2 Sanity Checks
  - A.3.3 Merge Dataset
  - A.3.4 Data Cleaning
  - A.3.5 Outlier Detection and Correction

#### B. EPIDEMIOLOGICAL STRATIFICATION
- **B.1 Reporting Rate per Variable**
- **B.2 Group and merge data frame**
- **B.3 Crude Incidence by Year**
- **B.4 Adjusted Incidence by Year**
- **B.5 Option to Select Incidence**
- **B.6 Risk Categorization**

#### C. STRATIFICATION OF OTHER DETERMINANTS
- **C.1 Access to Care**
- **C.2 Seasonality**
- **C.3 Insecticide Resistance**
- **C.4 Anti-Malaria Drug Resistance**

#### D. REVIEW OF PAST INTERVENTIONS
- **D.1 EPI Coverage and Dropout Rate**
- **D.2 IPTp and ANC Coverage**
- **D.3 PMC (Prevention of Malaria in Pregnancy)**
- **D.4 SMC (Seasonal Malaria Chemoprevention)**
- **D.5 Malaria Vaccine**
- **D.6 ITN Ownership, Access, Usage, and Type**
- **D.7 ITN Operational Coverage**
- **D.8 IRS (Indoor Residual Spraying)**
- **D.9 LSM (Larval Source Management)**
- **D.10 Assessing the Quality of Case Management**

#### E. Targeting of Interventions
#### F. Retrospective Analysis
#### G. Urban Microstratification

</details>

---

### How to Contribute
We welcome contributions from the community! If you'd like to add your own code, improve existing functions, or suggest changes, please create a pull request.

### License
This code library is publicly available and can be used under the MIT License.

---

For any questions or further information, feel free to reach out to the authors or submit an issue on the repository.
