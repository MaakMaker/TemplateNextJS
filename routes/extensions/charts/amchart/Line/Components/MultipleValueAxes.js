import React from "react";
import AmCharts from "@amcharts/amcharts3-react";

const MultipleValueAxes = () => {

  const chartData = generateChartData();
  const config = {
    "type": "serial",
    "theme": "light",
    "legend": {
      "useGraphSettings": true
    },
    "dataProvider": chartData,
    "synchronizeGrid": true,
    "valueAxes": [{
      "id": "v1",
      "axisColor": "#FF6600",
      "axisThickness": 2,
      "axisAlpha": 1,
      "position": "left"
    }, {
      "id": "v2",
      "axisColor": "#FCD202",
      "axisThickness": 2,
      "axisAlpha": 1,
      "position": "right"
    }, {
      "id": "v3",
      "axisColor": "#B0DE09",
      "axisThickness": 2,
      "gridAlpha": 0,
      "offset": 50,
      "axisAlpha": 1,
      "position": "left"
    }],
    "graphs": [{
      "valueAxis": "v1",
      "lineColor": "#FF6600",
      "bullet": "round",
      "bulletBorderThickness": 1,
      "hideBulletsCount": 30,
      "title": "red line",
      "valueField": "visits",
      "fillAlphas": 0
    }, {
      "valueAxis": "v2",
      "lineColor": "#FCD202",
      "bullet": "square",
      "bulletBorderThickness": 1,
      "hideBulletsCount": 30,
      "title": "yellow line",
      "valueField": "hits",
      "fillAlphas": 0
    }, {
      "valueAxis": "v3",
      "lineColor": "#B0DE09",
      "bullet": "triangleUp",
      "bulletBorderThickness": 1,
      "hideBulletsCount": 30,
      "title": "green line",
      "valueField": "views",
      "fillAlphas": 0
    }],
    "chartScrollbar": {},
    "chartCursor": {
      "cursorPosition": "mouse"
    },
    "categoryField": "date",
    "categoryAxis": {
      "parseDates": true,
      "axisColor": "#DADADA",
      "minorGridEnabled": true
    },
    "export": {
      "enabled": true,
      "position": "bottom-right"
    }
  };


// generate some random data, quite different range
  function generateChartData() {
    let chartData = [];
    const firstDate = new Date();
    firstDate.setDate(firstDate.getDate() - 100);

    let visits = 1600;
    let hits = 2900;
    let views = 8700;


    for (let i = 0; i < 100; i++) {
      // we create date objects here. In your data, you can have date strings
      // and then set format of your dates using chart.dataDateFormat property,
      // however when possible, use date objects, as this will speed up chart rendering.
      const newDate = new Date(firstDate);
      newDate.setDate(newDate.getDate() + i);

      visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      hits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      views += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);

      chartData.push({
        date: newDate,
        visits: visits,
        hits: hits,
        views: views
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

export default MultipleValueAxes;
