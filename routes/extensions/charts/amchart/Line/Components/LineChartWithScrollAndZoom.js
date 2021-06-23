import React from "react";
import AmCharts from "@amcharts/amcharts3-react";

const LineChartWithScrollAndZoom = () => {

  let chartData = generateChartData();
  const config = {
    "type": "serial",
    "theme": "light",
    "marginRight": 80,
    "autoMarginOffset": 20,
    "marginTop": 7,
    "dataProvider": chartData,
    "valueAxes": [{
      "axisAlpha": 0.2,
      "dashLength": 1,
      "position": "left"
    }],
    "mouseWheelZoomEnabled": true,
    "graphs": [{
      "id": "g1",
      "balloonText": "[[value]]",
      "bullet": "round",
      "bulletBorderAlpha": 1,
      "bulletColor": "#FFFFFF",
      "hideBulletsCount": 50,
      "title": "red line",
      "valueField": "visits",
      "useLineColorForBulletBorder": true,
      "balloon": {
        "drop": true
      }
    }],
    "chartScrollbar": {
      "autoGridCount": true,
      "graph": "g1",
      "scrollbarHeight": 40
    },
    "chartCursor": {
      "limitToGraph": "g1"
    },
    "categoryField": "date",
    "categoryAxis": {
      "parseDates": true,
      "axisColor": "#DADADA",
      "dashLength": 1,
      "minorGridEnabled": true
    },
    "export": {
      "enabled": true
    }
  };

  // generate some random data, quite different range
  function generateChartData() {
    let chartData = [];
    const firstDate = new Date();
    firstDate.setDate(firstDate.getDate() - 5);
    let visits = 1200;
    for (var i = 0; i < 1000; i++) {
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

export default LineChartWithScrollAndZoom;
