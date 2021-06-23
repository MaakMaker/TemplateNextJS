import React from "react";
import AmCharts from "@amcharts/amcharts3-react";

const PyramidChart = () => {

  const config = {
    "type": "funnel",
    "theme": "none",
    "dataProvider": [{
      "title": "Website visits",
      "value": 300
    }, {
      "title": "Downloads",
      "value": 123
    }, {
      "title": "Requested price list",
      "value": 98
    }, {
      "title": "Contaced for more info",
      "value": 72
    }, {
      "title": "Purchased",
      "value": 35
    }, {
      "title": "Contacted for support",
      "value": 15
    }, {
      "title": "Purchased additional products",
      "value": 8
    }],
    "balloon": {
      "fixedPosition": true
    },
    "valueField": "value",
    "titleField": "title",
    "marginRight": 240,
    "marginLeft": 50,
    "startX": -500,
    "rotate": true,
    "labelPosition": "right",
    "balloonText": "[[title]]: [[value]]n[[description]]",
    "export": {
      "enabled": true
    }
  };
  return (
    <div className="App">
      <AmCharts.React style={{width: "100%", height: "500px"}} options={config}/>
    </div>
  )
}

export default PyramidChart;
