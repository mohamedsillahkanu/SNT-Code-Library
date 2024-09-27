<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            display: flex;
            font-family: Arial, sans-serif;
        }
        .sidebar {
            width: 200px;
            padding: 15px;
            background-color: #f4f4f4;
            border-right: 1px solid #ccc;
            height: 100vh;
            position: sticky;
            top: 0;
        }
        .content {
            padding: 15px;
            flex: 1;
        }
    </style>
</head>
<body>

<div class="sidebar">
    <h2>Menu</h2>
    <ul>
        <li><a href="#overview">Overview</a></li>
        <li><a href="#data-upload">Data Upload</a></li>
        <li><a href="#data-processing">Data Processing</a>
            <ul>
                <li><a href="#cleaning-data">Cleaning Data</a></li>
                <li><a href="#outlier-detection">Outlier Detection</a></li>
            </ul>
        </li>
        <li><a href="#visualizations">Visualizations</a>
            <ul>
                <li><a href="#line-chart">Line Chart</a></li>
                <li><a href="#bar-chart">Bar Chart</a></li>
                <li><a href="#pie-chart">Pie Chart</a></li>
            </ul>
        </li>
        <li><a href="#settings">Settings</a></li>
        <li><a href="#license">License</a></li>
    </ul>
</div>

<div class="content">
    <h1>Project Title</h1>
    <p>This is a description of your project. Below is a sidebar-like navigation structure.</p>

    <h2 id="overview">Overview</h2>
    <p>This project allows you to upload data, process it, and generate visualizations.</p>

    <h2 id="data-upload">Data Upload</h2>
    <p>You can upload CSV or Excel files to work with in this project.</p>

    <h2 id="data-processing">Data Processing</h2>
    
    <h3 id="cleaning-data">Cleaning Data</h3>
    <p>Explain how data cleaning is done in your project.</p>

    <h3 id="outlier-detection">Outlier Detection</h3>
    <p>Describe the method for detecting outliers in your dataset.</p>

    <h2 id="visualizations">Visualizations</h2>
    <p>This section explains the types of visualizations available.</p>

    <h3 id="line-chart">Line Chart</h3>
    <p>How to generate a line chart.</p>

    <h3 id="bar-chart">Bar Chart</h3>
    <p>Steps for generating a bar chart.</p>

    <h3 id="pie-chart">Pie Chart</h3>
    <p>Explanation for creating pie charts.</p>

    <h2 id="settings">Settings</h2>
    <p>Explain any custom settings available in the application.</p>

    <h2 id="license">License</h2>
    <p>Include license information here.</p>
</div>

</body>
</html>
