// STEP 1 - Include Dependencies
// Include react
import React from "react";
// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Doughnut2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Doughnut2D, FusionTheme);

// STEP 4 - Creating the DOM element to pass the react-fusioncharts component

const DoughnutChart2d = ({data}) => {
// STEP 3 - Creating the JSON object to store the chart configurations
const chartConfigs = {
    type: "doughnut2d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: "Expenses by category",
        theme: "fusion"
      },
      // Chart Data
      data: data
    }
  };

    return (<ReactFC {...chartConfigs}  className="col-span-full px-2 my-4"/>)
}

export default DoughnutChart2d;