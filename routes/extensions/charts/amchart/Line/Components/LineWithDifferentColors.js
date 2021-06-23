import React from "react";
import AmCharts from "@amcharts/amcharts3-react";

const LineWithDifferentColors = () => {

  let chartData = generateChartData();
  const config = {
    "theme": "light",
    "type": "serial",
    "marginRight": 80,
    "autoMarginOffset": 20,
    "marginTop": 20,
    "dataProvider": chartData,
    "valueAxes": [{
      "id": "v1",
      "axisAlpha": 0.1
    }],
    "graphs": [{
      "useNegativeColorIfDown": true,
      "balloonText": "[[category]]<br><b>value: [[value]]</b>",
      "bullet": "round",
      "bulletBorderAlpha": 1,
      "bulletBorderColor": "#FFFFFF",
      "hideBulletsCount": 50,
      "lineThickness": 2,
      "lineColor": "#fdd400",
      "negativeLineColor": "#67b7dc",
      "valueField": "visits"
    }],
    "chartScrollbar": {
      "scrollbarHeight": 5,
      "backgroundAlpha": 0.1,
      "backgroundColor": "#868686",
      "selectedBackgroundColor": "#67b7dc",
      "selectedBackgroundAlpha": 1
    },
    "chartCursor": {
      "valueLineEnabled": true,
      "valueLineBalloonEnabled": true
    },
    "categoryField": "date",
    "categoryAxis": {
      "parseDates": true,
      "axisAlpha": 0,
      "minHorizontalGap": 60
    },
    "export": {
      "enabled": true
    }
  };

  function generateChartData() {
    let chartData = [];
    const firstDate = new Date();
    firstDate.setDate(firstDate.getDate() - 150);
    let visits = 500;

    for (let i = 0; i < 150; i++) {
      // we create date objects here. In your data, you can have date strings
      // and then set format of your dates using chart.dataDateFormat property,
      // however when possible, use date objects, as this will speed up chart rendering.
      const newDate = new Date(firstDate);
      newDate.setDate(newDate.getDate() + i);

      visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);

      chartData.push({
        date: newDate,
        visits: visits
      });
    }
    return chartData;
  }

  return (
    <div className="App">
      <AmCharts.React style={{width: "100%", height: "500px"}} options={config}/>
    </div>
  )
}

export default LineWithDifferentColors;
