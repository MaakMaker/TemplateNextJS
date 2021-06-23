import React from "react";
import AmCharts from "@amcharts/amcharts3-react";

const StackedAndClusteredColumnChart = () => {

  const config = {
    "type": "serial",
    "theme": "light",
    "depth3D": 20,
    "angle": 30,
    "legend": {
      "horizontalGap": 10,
      "useGraphSettings": true,
      "markerSize": 10
    },
    "dataProvider": [{
      "year": 2003,
      "europe": 2.5,
      "namerica": 2.5,
      "asia": 2.1,
      "lamerica": 1.2,
      "meast": 0.2,
      "africa": 0.1
    }, {
      "year": 2004,
      "europe": 2.6,
      "namerica": 2.7,
      "asia": 2.2,
      "lamerica": 1.3,
      "meast": 0.3,
      "africa": 0.1
    }, {
      "year": 2005,
      "europe": 2.8,
      "namerica": 2.9,
      "asia": 2.4,
      "lamerica": 1.4,
      "meast": 0.3,
      "africa": 0.1
    }],
    "valueAxes": [{
      "stackType": "regular",
      "axisAlpha": 0,
      "gridAlpha": 0
    }],
    "graphs": [{
      "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
      "fillAlphas": 0.8,
      "labelText": "[[value]]",
      "lineAlpha": 0.3,
      "title": "Europe",
      "type": "column",
      "color": "#000000",
      "valueField": "europe"
    }, {
      "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
      "fillAlphas": 0.8,
      "labelText": "[[value]]",
      "lineAlpha": 0.3,
      "title": "North America",
      "type": "column",
      "color": "#000000",
      "valueField": "namerica"
    }, {
      "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
      "fillAlphas": 0.8,
      "labelText": "[[value]]",
      "lineAlpha": 0.3,
      "title": "Asia-Pacific",
      "type": "column",
      "newStack": true,
      "color": "#000000",
      "valueField": "asia"
    }, {
      "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
      "fillAlphas": 0.8,
      "labelText": "[[value]]",
      "lineAlpha": 0.3,
      "title": "Latin America",
      "type": "column",
      "color": "#000000",
      "valueField": "lamerica"
    }, {
      "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
      "fillAlphas": 0.8,
      "labelText": "[[value]]",
      "lineAlpha": 0.3,
      "title": "Middle-East",
      "type": "column",
      "color": "#000000",
      "valueField": "meast"
    }, {
      "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
      "fillAlphas": 0.8,
      "labelText": "[[value]]",
      "lineAlpha": 0.3,
      "title": "Africa",
      "type": "column",
      "color": "#000000",
      "valueField": "africa"
    }],
    "categoryField": "year",
    "categoryAxis": {
      "gridPosition": "start",
      "axisAlpha": 0,
      "gridAlpha": 0,
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

export default StackedAndClusteredColumnChart;
