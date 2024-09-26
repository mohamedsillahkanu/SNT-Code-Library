<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Table of Contents</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      display: flex;
    }
    .sidebar {
      width: 250px;
      background-color: #f4f4f4;
      padding: 20px;
      height: 100vh;
      position: fixed;
      overflow-y: auto;
      border-right: 1px solid #ddd;
    }
    .content {
      margin-left: 270px;
      padding: 20px;
      flex-grow: 1;
    }
    .sidebar a {
      text-decoration: none;
      color: #333;
    }
    .sidebar a:hover {
      color: #007bff;
    }
    .sidebar ul {
      list-style-type: none;
      padding-left: 0;
    }
    .sidebar ul ul {
      padding-left: 20px;
    }
    .sidebar summary {
      cursor: pointer;
      font-weight: bold;
    }
  </style>
</head>
<body>

<div class="sidebar">
  <details open>
    <summary>Overview</summary>
    <ul>
      <li><a href="#overview">Overview</a></li>
      <li><a href="#motivation">Motivation</a></li>
      <li><a href="#objectives">Objectives</a></li>
      <li><a href="#target-audience">Target Audience</a></li>
      <li><a href="#scope">Scope</a></li>
    </ul>
  </details>

  <details>
    <summary>Library Elements</summary>
    <ul>
      <li><a href="#data-assembly-and-management">A Data Assembly and Management</a></li>
      <ul>
        <li><a href="#shapefiles">A.1 Shapefiles</a></li>
        <li><a href="#health-facilities">A.2 Health Facilities</a></li>
        <li><a href="#routine-case-data-from-dhis2">A.3 Routine Case Data from DHIS2</a></li>
        <li><a href="#dhs-data">A.4 DHS Data</a></li>
        <li><a href="#population-data">A.5 Population Data</a></li>
        <ul>
          <li><a href="#extract-population-data-from-raster-population-source-option-1">A.5.1 Extract Population Data from Raster Population Source (Option 1)</a></li>
          <li><a href="#extract-population-data-from-countrys-recent-census-option-2">A.5.2 Extract Population Data from Country's Recent Census (Option 2)</a></li>
        </ul>
        <li><a href="#climate-data">A.6 Climate Data</a></li>
        <li><a href="#lmis-data">A.7 LMIS Data</a></li>
        <li><a href="#modeled-data">A.8 Modeled Data</a></li>
      </ul>
    </ul>
  </details>

  <!-- More sections as needed... -->
</div>

<div class="content">
  <h1 id="overview">Overview</h1>
  <p>Your content for the overview goes here...</p>

  <h2 id="motivation">Motivation</h2>
  <p>Your content for motivation goes here...</p>

  <h2 id="objectives">Objectives</h2>
  <p>Your content for objectives goes here...</p>

  <h2 id="target-audience">Target Audience</h2>
  <p>Your content for target audience goes here...</p>

  <h2 id="scope">Scope</h2>
  <p>Your content for scope goes here...</p>

  <!-- More content sections... -->
</div>

</body>
</html>
