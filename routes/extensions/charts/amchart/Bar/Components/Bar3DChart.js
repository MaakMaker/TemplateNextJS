import React from "react";
import AmCharts from "@amcharts/amcharts3-react";

const Bar3DChart = () => {

  const config = {
    "theme": "light",
    "type": "serial",
    "dataProvider": [{
      "year": 2005,
      "income": 23.5
    }, {
      "year": 2006,
      "income": 26.2
    }, {
      "year": 2007,
      "income": 30.1
    }, {
      "year": 2008,
      "income": 29.5
    }, {
      "year": 2009,
      "income": 24.6
    }],
    "valueAxes": [{
      "title": "Income in millions, USD"
    }],
    "graphs": [{
      "balloonText": "Income in [[category]]:[[value]]",
      "fillAlphas": 1,
      "lineAlpha": 0.2,
      "title": "Income",
      "type": "column",
      "valueField": "income"
    }],
    "depth3D": 20,
    "angle": 30,
    "rotate": true,
    "categoryField": "year",
    "categoryAxis": {
      "gridPosition": "start",
      "fillAlpha": 0.05,
      "position": "left"
    },
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

export default Bar3DChart;
