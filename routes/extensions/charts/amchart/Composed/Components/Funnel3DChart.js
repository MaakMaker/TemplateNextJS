import React from "react";
import AmCharts from "@amcharts/amcharts3-react";

const Funnel3DChart = () => {

  const config = {
    "type": "funnel",
    "theme": "none",
    "dataProvider": [{
      "title": "Website visits",
      "value": 200
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
      "value": 35
    }, {
      "title": "Purchased additional products",
      "value": 26
    }],
    "balloon": {
      "fixedPosition": true
    },
    "valueField": "value",
    "titleField": "title",
    "marginRight": 240,
    "marginLeft": 50,
    "startX": -500,
    "depth3D": 100,
    "angle": 40,
    "outlineAlpha": 1,
    "outlineColor": "#FFFFFF",
    "outlineThickness": 2,
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

export default Funnel3DChart;
