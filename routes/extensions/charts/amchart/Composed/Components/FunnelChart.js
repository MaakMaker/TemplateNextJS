import React from "react";
import AmCharts from "@amcharts/amcharts3-react";

const FunnelChart = () => {

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
      "title": "Requested prices",
      "value": 98
    }, {
      "title": "Contacted",
      "value": 72
    }, {
      "title": "Purchased",
      "value": 35
    }, {
      "title": "Asked for support",
      "value": 25
    }, {
      "title": "Purchased more",
      "value": 18
    }],
    "titleField": "title",
    "marginRight": 160,
    "marginLeft": 15,
    "labelPosition": "right",
    "funnelAlpha": 0.9,
    "valueField": "value",
    "startX": 0,
    "neckWidth": "40%",
    "startAlpha": 0,
    "outlineThickness": 1,
    "neckHeight": "30%",
    "balloonText": "[[title]]:<b>[[value]]</b>",
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

export default FunnelChart;
