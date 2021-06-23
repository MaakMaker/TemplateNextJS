import React from "react";
import AmCharts from "@amcharts/amcharts3-react";

const ReversedValueAxis = () => {

  const config = {
    "type": "serial",
    "theme": "light",
    "legend": {
      "useGraphSettings": true
    },
    "dataProvider": [{
      "year": 1930,
      "italy": 1,
      "germany": 5,
      "uk": 3
    }, {
      "year": 1934,
      "italy": 1,
      "germany": 2,
      "uk": 6
    }, {
      "year": 1938,
      "italy": 2,
      "germany": 3,
      "uk": 1
    }, {
      "year": 1950,
      "italy": 3,
      "germany": 4,
      "uk": 1
    }, {
      "year": 1954,
      "italy": 5,
      "germany": 1,
      "uk": 2
    }, {
      "year": 1958,
      "italy": 3,
      "germany": 2,
      "uk": 1
    }, {
      "year": 1962,
      "italy": 1,
      "germany": 2,
      "uk": 3
    }, {
      "year": 1966,
      "italy": 2,
      "germany": 1,
      "uk": 5
    }, {
      "year": 1970,
      "italy": 3,
      "germany": 5,
      "uk": 2
    }, {
      "year": 1974,
      "italy": 4,
      "germany": 3,
      "uk": 6
    }, {
      "year": 1978,
      "italy": 1,
      "germany": 2,
      "uk": 4
    }],
    "valueAxes": [{
      "integersOnly": true,
      "maximum": 6,
      "minimum": 1,
      "reversed": true,
      "axisAlpha": 0,
      "dashLength": 5,
      "gridCount": 10,
      "position": "left",
      "title": "Place taken"
    }],
    "startDuration": 0.5,
    "graphs": [{
      "balloonText": "place taken by Italy in [[category]]: [[value]]",
      "bullet": "round",
      "hidden": true,
      "title": "Italy",
      "valueField": "italy",
      "fillAlphas": 0
    }, {
      "balloonText": "place taken by Germany in [[category]]: [[value]]",
      "bullet": "round",
      "title": "Germany",
      "valueField": "germany",
      "fillAlphas": 0
    }, {
      "balloonText": "place taken by UK in [[category]]: [[value]]",
      "bullet": "round",
      "title": "United Kingdom",
      "valueField": "uk",
      "fillAlphas": 0
    }],
    "chartCursor": {
      "cursorAlpha": 0,
      "zoomable": false
    },
    "categoryField": "year",
    "categoryAxis": {
      "gridPosition": "start",
      "axisAlpha": 0,
      "fillAlpha": 0.05,
      "fillColor": "#000000",
      "gridAlpha": 0,
      "position": "top"
    },
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

export default ReversedValueAxis;
