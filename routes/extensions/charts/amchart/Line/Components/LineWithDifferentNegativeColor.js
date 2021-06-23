import React from "react";
import AmCharts from "@amcharts/amcharts3-react";

const LineWithDifferentNegativeColor = () => {

  let chartData = generateChartData();
  const config = {
    "theme": "light",
    "type": "serial",
    "dataProvider": chartData,
    "valueAxes": [{
      "inside": true,
      "axisAlpha": 0
    }],
    "graphs": [{
      "id": "g1",
      "balloonText": "<div style='margin:5px; font-size:19px;'><span style='font-size:13px;'>[[category]]</span><br>[[value]]</div>",
      "bullet": "round",
      "bulletBorderAlpha": 1,
      "bulletBorderColor": "#FFFFFF",
      "hideBulletsCount": 50,
      "lineThickness": 2,
      "lineColor": "#fdd400",
      "negativeLineColor": "#67b7dc",
      "valueField": "visits"
    }],
    "chartScrollbar": {},
    "chartCursor": {},
    "categoryField": "date",
    "categoryAxis": {
      "parseDates": true,
      "axisAlpha": 0,
      "minHorizontalGap": 55
    }
  };

  function generateChartData() {
    let chartData = [];
    const firstDate = new Date();
    firstDate.setDate(firstDate.getDate() - 150);
    let visits = -40;
    let b = 0.6;
    for (let i = 0; i < 150; i++) {
      // we create date objects here. In your data, you can have date strings
      // and then set format of your dates using chart.dataDateFormat property,
      // however when possible, use date objects, as this will speed up chart rendering.
      const newDate = new Date(firstDate);
      newDate.setDate(newDate.getDate() + i);
      if (i > 80) {
        b = 0.4;
      }
      visits += Math.round((Math.random() < b ? 1 : -1) * Math.random() * 10);

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

export default LineWithDifferentNegativeColor;
