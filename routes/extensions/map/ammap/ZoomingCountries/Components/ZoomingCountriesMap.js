import React from 'react';
import AmCharts from "@amcharts/amcharts3-react";

const ZoomingCountriesMap = () => {

  const config = {
    "type": "map",
    "theme": "light",
    "projection": "miller",

    "dataProvider": {
      "map": "worldLow",
      "getAreasFromMap": true
    },
    "areasSettings": {
      "autoZoom": true,
      "selectedColor": "#CC0000"
    },
    "smallMap": {},
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

export default ZoomingCountriesMap;
