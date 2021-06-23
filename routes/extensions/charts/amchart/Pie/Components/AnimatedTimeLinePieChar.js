import React from "react";
import AmCharts from "@amcharts/amcharts3-react";
import chartData from "./data";

const AnimatedTimeLinePieChar = () => {

  let currentYear = 1995;
  const config = {
    "type": "pie",
    "theme": "light",
    "dataProvider": [],
    "valueField": "size",
    "titleField": "sector",
    "startDuration": 0,
    "innerRadius": 80,
    "pullOutRadius": 20,
    "marginTop": 30,
    "titles": [{
      "text": "South African Economy"
    }],
    "allLabels": [{
      "y": "54%",
      "align": "center",
      "size": 25,
      "bold": true,
      "text": "1995",
      "color": "#555"
    }, {
      "y": "49%",
      "align": "center",
      "size": 15,
      "text": "Year",
      "color": "#555"
    }],
    "listeners": [{
      "event": "init",
      "method": function (e) {
        const chart = e.chart;

        function getCurrentData() {
          const data = chartData[currentYear];
          currentYear++;
          if (currentYear > 2014)
            currentYear = 1995;
          return data;
        }

        function loop() {
          chart.allLabels[0].text = currentYear;
          const data = getCurrentData();
          chart.animateData(data, {
            duration: 1000,
            complete: function () {
              setTimeout(loop, 3000);
            }
          });
        }

        loop();
      }
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

export default AnimatedTimeLinePieChar;
