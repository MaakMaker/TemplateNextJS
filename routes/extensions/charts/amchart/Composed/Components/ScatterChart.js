import React from "react";
import AmCharts from "@amcharts/amcharts3-react";

const ScatterChart = () => {

  const config = {
    "type": "xy",
    "theme": "none",
    "autoMarginOffset": 20,
    "dataProvider": [{
      "ax": 1,
      "ay": 0.5,
      "bx": 1,
      "by": 2.2
    }, {
      "ax": 2,
      "ay": 1.3,
      "bx": 2,
      "by": 4.9
    }, {
      "ax": 3,
      "ay": 2.3,
      "bx": 3,
      "by": 5.1
    }, {
      "ax": 4,
      "ay": 2.8,
      "bx": 4,
      "by": 5.3
    }, {
      "ax": 5,
      "ay": 3.5,
      "bx": 5,
      "by": 6.1
    }, {
      "ax": 6,
      "ay": 5.1,
      "bx": 6,
      "by": 8.3
    }, {
      "ax": 7,
      "ay": 6.7,
      "bx": 7,
      "by": 10.5
    }, {
      "ax": 8,
      "ay": 8,
      "bx": 8,
      "by": 12.3
    }, {
      "ax": 9,
      "ay": 8.9,
      "bx": 9,
      "by": 14.5
    }, {
      "ax": 10,
      "ay": 9.7,
      "bx": 10,
      "by": 15
    }, {
      "ax": 11,
      "ay": 10.4,
      "bx": 11,
      "by": 18.8
    }, {
      "ax": 12,
      "ay": 11.7,
      "bx": 12,
      "by": 19
    }],
    "valueAxes": [{
      "position": "bottom",
      "axisAlpha": 0,
      "dashLength": 1,
      "title": "X Axis"
    }, {
      "axisAlpha": 0,
      "dashLength": 1,
      "position": "left",
      "title": "Y Axis"
    }],
    "startDuration": 1,
    "graphs": [{
      "balloonText": "x:[[x]] y:[[y]]",
      "bullet": "triangleUp",
      "lineAlpha": 0,
      "xField": "ax",
      "yField": "ay",
      "lineColor": "#FF6600",
      "fillAlphas": 0
    }, {
      "balloonText": "x:[[x]] y:[[y]]",
      "bullet": "triangleDown",
      "lineAlpha": 0,
      "xField": "bx",
      "yField": "by",
      "lineColor": "#FCD202",
      "fillAlphas": 0
    }],
    "trendLines": [{
      "finalValue": 11,
      "finalXValue": 12,
      "initialValue": 2,
      "initialXValue": 1,
      "lineColor": "#FF6600"
    }, {
      "finalValue": 19,
      "finalXValue": 12,
      "initialValue": 1,
      "initialXValue": 1,
      "lineColor": "#FCD202"
    }],
    "marginLeft": 64,
    "marginBottom": 60,
    "chartScrollbar": {},
    "chartCursor": {},
    "export": {
      "enabled": true,
      "position": "bottom-right"
    }
  };
  return (
    <div className="App">
      <AmCharts.React style={{width: "100%", height: "500px"}} options={config}/>
    </div>
  )
}

export default ScatterChart;
