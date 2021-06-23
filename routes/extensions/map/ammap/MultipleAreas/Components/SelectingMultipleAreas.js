import React from 'react';
import AmCharts from "@amcharts/amcharts3-react";

const SelectingMultipleAreas = () => {

  const config = {
    "type": "map",
    "theme": "none",

    "panEventsEnabled": true,
    //"backgroundColor": "#666666",
    //"backgroundAlpha": 1,
    "dataProvider": {
      "map": "usaLow",
      "getAreasFromMap": true
    },
    "areasSettings": {
      "autoZoom": false,
      "color": "#CDCDCD",
      "colorSolid": "#5EB7DE",
      "selectedColor": "#5EB7DE",
      "outlineColor": "#666666",
      "rollOverColor": "#88CAE7",
      "rollOverOutlineColor": "#FFFFFF",
      "selectable": true
    },
    "listeners": [{
      "event": "clickMapObject",
    }],
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

export default SelectingMultipleAreas;
