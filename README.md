<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Two-Column TOC</title>
    <style>
        .container {
            display: flex;
            flex-direction: row;
        }
        .column {
            width: 50%;
            padding: 20px;
        }
        .toc {
            border-right: 1px solid #ccc;
            padding-right: 20px;
        }
        .content {
            padding-left: 20px;
        }
    </style>
</head>
<body>

<div class="container">
    <div class="column toc">
        <h2>Table of Contents</h2>

        <details>
            <summary>Overview</summary>
            <ul>
                <li><a href="#motivation">Motivation</a></li>
                <li><a href="#objectives">Objectives</a></li>
                <li><a href="#target-audience">Target Audience</a></li>
                <li><a href="#scope">Scope</a></li>
            </ul>
        </details>

        <details>
            <summary>Library Elements</summary>
            <ul>
                <li><a href="#a-data-assembly-and-management">A. Data Assembly and Management</a></li>
                <ul>
                    <li><a href="#a1-shapefiles">A.1 Shapefiles</a></li>
                    <li><a href="#a2-health-facilities">A.2 Health Facilities</a></li>
                    <li><a href="#a3-routine-case-data-from-dhis2">A.3 Routine Case Data from DHIS2</a></li>
                    <li><a href="#a4-dhs-data">A.4 DHS Data</a></li>
                    <li><a href="#a5-population-data">A.5 Population Data</a></li>
                    <ul>
                        <li><a href="#a51-extract-population-data-from-raster-population-source-option-1">A.5.1 Extract Population Data from Raster Population Source (Option 1)</a></li>
                        <li><a href="#a52-extract-population-data-from-countrys-recent-census-option-2">A.5.2 Extract Population Data from Census (Option 2)</a></li>
                    </ul>
                </ul>
            </ul>
        </details>
    </div>

    <div class="column content">
        <h2 id="overview">Overview</h2>
        <p>Details about the overview go here...</p>

        <h3 id="motivation">Motivation</h3>
        <p>Details about the motivation go here...</p>

        <h3 id="objectives">Objectives</h3>
        <p>Details about the objectives go here...</p>

        <h3 id="target-audience">Target Audience</h3>
        <p>Details about the target audience go here...</p>

        <h3 id="scope">Scope</h3>
        <p>Details about the scope go here...</p>

        <h2 id="a-data-assembly-and-management">A. Data Assembly and Management</h2>
        <p>Details about the data assembly and management go here...</p>

        <h3 id="a1-shapefiles">A.1 Shapefiles</h3>
        <p>Information about shapefiles goes here...</p>

        <h3 id="a2-health-facilities">A.2 Health Facilities</h3>
        <p>Information about health facilities goes here...</p>

        <h3 id="a3-routine-case-data-from-dhis2">A.3 Routine Case Data from DHIS2</h3>
        <p>Information about DHIS2 routine case data goes here...</p>

        <h3 id="a4-dhs-data">A.4 DHS Data</h3>
        <p>Information about DHS data goes here...</p>

        <h3 id="a5-population-data">A.5 Population Data</h3>
        <p>Details about population data go here...</p>

        <h4 id="a51-extract-population-data-from-raster-population-source-option-1">A.5.1 Extract Population Data from Raster Population Source (Option 1)</h4>
        <p>Details about extracting population data from raster sources go here...</p>

        <h4 id="a52-extract-population-data-from-countrys-recent-census-option-2">A.5.2 Extract Population Data from Census (Option 2)</h4>
        <p>Details about extracting population data from the recent census go here...</p>
    </div>
</div>

</body>
</html>
