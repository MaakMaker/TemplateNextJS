import React from "react";
import AmCharts from "@amcharts/amcharts3-react";

const BarAndLineChartMix = () => {

  const config = {
    "type": "serial",
    "theme": "light",
    "handDrawn": true,
    "handDrawScatter": 3,
    "legend": {
      "useGraphSettings": true,
      "markerSize": 12,
      "valueWidth": 0,
      "verticalGap": 0
    },
    "dataProvider": [{
      "year": 2005,
      "income": 23.5,
      "expenses": 18.1
    }, {
      "year": 2006,
      "income": 26.2,
      "expenses": 22.8
    }, {
      "year": 2007,
      "income": 30.1,
      "expenses": 23.9
    }, {
      "year": 2008,
      "income": 29.5,
      "expenses": 25.1
    }, {
      "year": 2009,
      "income": 24.6,
      "expenses": 25
    }],
    "valueAxes": [{
      "minorGridAlpha": 0.08,
      "minorGridEnabled": true,
      "position": "top",
      "axisAlpha": 0
    }],
    "startDuration": 1,
    "graphs": [{
      "balloonText": "<span style='font-size:13px;'>[[title]] in [[category]]:<b>[[value]]</b></span>",
      "title": "Income",
      "type": "column",
      "fillAlphas": 0.8,

      "valueField": "income"
    }, {
      "balloonText": "<span style='font-size:13px;'>[[title]] in [[category]]:<b>[[value]]</b></span>",
      "bullet": "round",
      "bulletBorderAlpha": 1,
      "bulletColor": "#FFFFFF",
      "useLineColorForBulletBorder": true,
      "fillAlphas": 0,
      "lineThickness": 2,
      "lineAlpha": 1,
      "bulletSize": 7,
      "title": "Expenses",
      "valueField": "expenses"
    }],
    "rotate": true,
    "categoryField": "year",
    "categoryAxis": {
      "gridPosition": "start"
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

export default BarAndLineChartMix;
