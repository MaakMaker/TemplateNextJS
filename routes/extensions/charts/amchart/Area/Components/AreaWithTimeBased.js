import React from "react";
import AmCharts from "@amcharts/amcharts3-react";

const AreaWithTimeBased = () => {

  const chartData = generateChartData();
  const config = {
    "type": "serial",
    "theme": "light",
    "marginRight": 80,
    "dataProvider": chartData,
    "valueAxes": [{
      "position": "left",
      "title": "Unique visitors"
    }],
    "graphs": [{
      "id": "g1",
      "fillAlphas": 0.4,
      "valueField": "visits",
      "balloonText": "<div style='margin:5px; font-size:19px;'>Visits:<b>[[value]]</b></div>"
    }],
    "chartScrollbar": {
      "graph": "g1",
      "scrollbarHeight": 80,
      "backgroundAlpha": 0,
      "selectedBackgroundAlpha": 0.1,
      "selectedBackgroundColor": "#888888",
      "graphFillAlpha": 0,
      "graphLineAlpha": 0.5,
      "selectedGraphFillAlpha": 0,
      "selectedGraphLineAlpha": 1,
      "autoGridCount": true,
      "color": "#AAAAAA"
    },
    "chartCursor": {
      "categoryBalloonDateFormat": "JJ:NN, DD MMMM",
      "cursorPosition": "mouse"
    },
    "categoryField": "date",
    "categoryAxis": {
      "minPeriod": "mm",
      "parseDates": true
    },
    "export": {
      "enabled": true,
      "dateFormat": "YYYY-MM-DD HH:NN:SS"
    }
  };


// generate some random data, quite different range
  function generateChartData() {
    let chartData = [];
    // current date
    const firstDate = new Date();
    // now set 500 minutes back
    firstDate.setMinutes(firstDate.getDate() - 1000);

    // and generate 500 data items
    let visits = 500;
    for (let i = 0; i < 500; i++) {
      const newDate = new Date(firstDate);
      // each time we add one minute
      newDate.setMinutes(newDate.getMinutes() + i);
      // some random number
      visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      // add data item to the array
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

export default AreaWithTimeBased;
