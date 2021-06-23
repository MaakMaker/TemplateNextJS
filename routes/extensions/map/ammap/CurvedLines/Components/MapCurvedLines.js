import React from 'react';
import AmCharts from "@amcharts/amcharts3-react";

const MapCurvedLines = () => {

  const targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

  const config = {
    "type": "map",
    "theme": "light",
    "dataProvider": {
      "map": "worldLow",
      "zoomLevel": 3.5,
      "zoomLongitude": -20.1341,
      "zoomLatitude": 49.1712,

      "lines": [{
        "latitudes": [51.5002, 50.4422],
        "longitudes": [-0.1262, 30.5367]
      }, {
        "latitudes": [51.5002, 46.9480],
        "longitudes": [-0.1262, 7.4481]
      }, {
        "latitudes": [51.5002, 59.3328],
        "longitudes": [-0.1262, 18.0645]
      }, {
        "latitudes": [51.5002, 40.4167],
        "longitudes": [-0.1262, -3.7033]
      }, {
        "latitudes": [51.5002, 46.0514],
        "longitudes": [-0.1262, 14.5060]
      }, {
        "latitudes": [51.5002, 48.2116],
        "longitudes": [-0.1262, 17.1547]
      }, {
        "latitudes": [51.5002, 44.8048],
        "longitudes": [-0.1262, 20.4781]
      }, {
        "latitudes": [51.5002, 55.7558],
        "longitudes": [-0.1262, 37.6176]
      }, {
        "latitudes": [51.5002, 38.7072],
        "longitudes": [-0.1262, -9.1355]
      }, {
        "latitudes": [51.5002, 54.6896],
        "longitudes": [-0.1262, 25.2799]
      }, {
        "latitudes": [51.5002, 64.1353],
        "longitudes": [-0.1262, -21.8952]
      }, {
        "latitudes": [51.5002, 40.4300],
        "longitudes": [-0.1262, -74.0000]
      }],
      "images": [{
        "id": "london",
        "svgPath": targetSVG,
        "title": "London",
        "latitude": 51.5002,
        "longitude": -0.1262,
        "scale": 1
      }, {
        "svgPath": targetSVG,
        "title": "Brussels",
        "latitude": 50.8371,
        "longitude": 4.3676,
        "scale": 0.5
      }, {
        "svgPath": targetSVG,
        "title": "Prague",
        "latitude": 50.0878,
        "longitude": 14.4205,
        "scale": 0.5
      }, {
        "svgPath": targetSVG,
        "title": "Athens",
        "latitude": 37.9792,
        "longitude": 23.7166,
        "scale": 0.5
      }, {
        "svgPath": targetSVG,
        "title": "Reykjavik",
        "latitude": 64.1353,
        "longitude": -21.8952,
        "scale": 0.5
      }, {
        "svgPath": targetSVG,
        "title": "Dublin",
        "latitude": 53.3441,
        "longitude": -6.2675,
        "scale": 0.5
      }, {
        "svgPath": targetSVG,
        "title": "Oslo",
        "latitude": 59.9138,
        "longitude": 10.7387,
        "scale": 0.5
      }, {
        "svgPath": targetSVG,
        "title": "Lisbon",
        "latitude": 38.7072,
        "longitude": -9.1355,
        "scale": 0.5
      }, {
        "svgPath": targetSVG,
        "title": "Moscow",
        "latitude": 55.7558,
        "longitude": 37.6176,
        "scale": 0.5
      }, {
        "svgPath": targetSVG,
        "title": "Belgrade",
        "latitude": 44.8048,
        "longitude": 20.4781,
        "scale": 0.5
      }, {
        "svgPath": targetSVG,
        "title": "Bratislava",
        "latitude": 48.2116,
        "longitude": 17.1547,
        "scale": 0.5
      }, {
        "svgPath": targetSVG,
        "title": "Ljubljana",
        "latitude": 46.0514,
        "longitude": 14.5060,
        "scale": 0.5
      }, {
        "svgPath": targetSVG,
        "title": "Madrid",
        "latitude": 40.4167,
        "longitude": -3.7033,
        "scale": 0.5
      }, {
        "svgPath": targetSVG,
        "title": "Stockholm",
        "latitude": 59.3328,
        "longitude": 18.0645,
        "scale": 0.5
      }, {
        "svgPath": targetSVG,
        "title": "Bern",
        "latitude": 46.9480,
        "longitude": 7.4481,
        "scale": 0.5
      }, {
        "svgPath": targetSVG,
        "title": "Kiev",
        "latitude": 50.4422,
        "longitude": 30.5367,
        "scale": 0.5
      }, {
        "svgPath": targetSVG,
        "title": "Paris",
        "latitude": 48.8567,
        "longitude": 2.3510,
        "scale": 0.5
      }, {
        "svgPath": targetSVG,
        "title": "New York",
        "latitude": 40.43,
        "longitude": -74,
        "scale": 0.5
      }]
    },

    "areasSettings": {
      "unlistedAreasColor": "#FFCC00",
      "unlistedAreasAlpha": 0.9
    },

    "imagesSettings": {
      "color": "#CC0000",
      "rollOverColor": "#CC0000",
      "selectedColor": "#000000"
    },

    "linesSettings": {
      "arc": -0.7, // this makes lines curved. Use value from -1 to 1
      "arrow": "middle",
      "color": "#CC0000",
      "alpha": 0.4,
      "arrowAlpha": 1,
      "arrowSize": 4
    },
    "zoomControl": {
      "gridHeight": 100,
      "draggerAlpha": 1,
      "gridAlpha": 0.2
    },

    "backgroundZoomsToTop": true,
    "linesAboveImages": true,

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

export default MapCurvedLines;
