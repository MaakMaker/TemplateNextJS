import React from "react";
import AmCharts from "@amcharts/amcharts3-react";

const DonutChart = () => {

  const config = {
    "type": "pie",
    "theme": "light",
    "dataProvider": [{
      "title": "New",
      "value": 4852
    }, {
      "title": "Returning",
      "value": 9899
    }],
    "titleField": "title",
    "valueField": "value",
    "labelRadius": 5,

    "radius": "42%",
    "innerRadius": "60%",
    "labelText": "[[title]]",
    "export": {
      "enabled": true
    }
  };

  return (
    <div className="App">
      <AmCharts.React style={{width: "100%", height: "300px"}} options={config}/>
    </div>
  )
}

export default DonutChart;
