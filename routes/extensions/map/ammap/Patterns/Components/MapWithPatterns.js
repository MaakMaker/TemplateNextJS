import React from 'react';
import AmCharts from "@amcharts/amcharts3-react";

const MapWithPatterns = () => {

  const config = {
    "type": "map",
    "theme": "light",

    "dragMap": false,
    "projection": "eckert3",

    "areasSettings": {
      "autoZoom": false,
      "rollOverOutlineColor": "#000000",
      "selectedColor": "#000000",
      "outlineAlpha": 1,
      "outlineColor": "#FFFFFF",
      "outlineThickness": 1,
      "color": "#000000"
    },

    "dataProvider": {
      "map": "continentsLow",

      "areas": [{
        "id": "africa",
        "title": "Africa",
        "pattern": {
          "url": "https://www.amcharts.com/lib/3/patterns/black/pattern1.png",
          "width": 4,
          "height": 4
        }
      }, {
        "id": "asia",
        "title": "Asia",
        "pattern": {
          "url": "https://www.amcharts.com/lib/3/patterns/black/pattern2.png",
          "width": 4,
          "height": 4
        }
      }, {
        "id": "australia",
        "title": "Australia",
        "pattern": {
          "url": "https://www.amcharts.com/lib/3/patterns/black/pattern3.png",
          "width": 4,
          "height": 4,
          "color": "#BBBB00"
        }
      }, {
        "id": "europe",
        "title": "Europe",
        "pattern": {
          "url": "https://www.amcharts.com/lib/3/patterns/black/pattern4.png",
          "width": 4,
          "height": 4
        }
      }, {
        "id": "north_america",
        "title": "North America",
        "pattern": {
          "url": "https://www.amcharts.com/lib/3/patterns/black/pattern5.png",
          "width": 4,
          "height": 4
        }
      }, {
        "id": "south_america",
        "title": "South America",
        "pattern": {
          "url": "https://www.amcharts.com/lib/3/patterns/black/pattern6.png",
          "width": 4,
          "height": 4
        }
      }]
    },
    "zoomControl": {
      "panControlEnabled": false,
      "zoomControlEnabled": false,
      "homeButtonEnabled": false
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

export default MapWithPatterns;
