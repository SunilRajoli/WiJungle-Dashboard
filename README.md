﻿# WiJungle-Dashboard

The WiJungle Dashboard is a responsive, dark-themed web application built with React, Material-UI, and Chart.js. It visualizes network traffic data with various types of charts, including histograms, bar charts, and scatter plots.

#Features

Dark Theme: Enhances visual appeal and reduces eye strain.
Responsive Design: Adapts to different screen sizes.
Data Visualization: Includes histogram, bar, and scatter charts for comprehensive data analysis.

#Technologies Used

React: A JavaScript library for building dynamic user interfaces.
Material-UI: A popular React UI framework for designing sleek and modern interfaces.
Chart.js: A powerful charting library, integrated with react-chartjs-2 for data visualization.
Axios: A promise-based HTTP client for making API requests.

Steps
Clone the repository:

git clone https://github.com/yourusername/wijungle-dashboard.git
cd wijungle-dashboard
Install dependencies:

npm install
Run the development server:

npm start
Open the application:
Access the application at http://localhost:3000.

#Customization

Adding New Charts
Modify Graph.js: Add or update chart logic.
Update Dashboard.js: Include new Graph components with appropriate props.
Example
To add a new chart, follow these steps:

Graph.js: Ensure the necessary chart type is supported.
Dashboard.js: Add a new <Grid item> with the Graph component, specifying the desired chart type and fields.

Acknowledgements
React
Material-UI
Chart.js
Axios
