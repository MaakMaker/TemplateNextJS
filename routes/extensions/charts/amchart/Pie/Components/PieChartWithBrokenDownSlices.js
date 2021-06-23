import React from "react";
import AmCharts from "@amcharts/amcharts3-react";

const PieChartWithBrokenDownSlices = () => {

  let selected;

  const types = [{
    type: "Fossil Energy",
    percent: 70,
    color: "#ff9e01",
    subs: [{
      type: "Oil",
      percent: 15
    }, {
      type: "Coal",
      percent: 35
    }, {
      type: "Nuclear",
      percent: 20
    }]
  }, {
    type: "Green Energy",
    percent: 30,
    color: "#b0de09",
    subs: [{
      type: "Hydro",
      percent: 15
    }, {
      type: "Wind",
      percent: 10
    }, {
      type: "Other",
      percent: 5
    }]
  }];

  function generateChartData() {
    let chartData = [];
    for (let i = 0; i < types.length; i++) {
      if (i === selected) {
        for (let x = 0; x < types[i].subs.length; x++) {
          chartData.push({
            type: types[i].subs[x].type,
            percent: types[i].subs[x].percent,
            color: types[i].color,
            pulled: true
          });
        }
      } else {
        chartData.push({
          type: types[i].type,
          percent: types[i].percent,
          color: types[i].color,
          id: i
        });
      }
    }
    return chartData;
  }

  const config = {
    "type": "pie",
    "theme": "light",

    "dataProvider": generateChartData(),
    "labelText": "[[title]]: [[value]]",
    "balloonText": "[[title]]: [[value]]",
    "titleField": "type",
    "valueField": "percent",
    "outlineColor": "#FFFFFF",
    "outlineAlpha": 0.8,
    "outlineThickness": 2,
    "colorField": "color",
    "pulledField": "pulled",
    "titles": [{
      "text": "Click a slice to see the details"
    }],
    "listeners": [{
      "event": "clickSlice",
      "method": function (event) {
        var chart = event.chart;
        if (event.dataItem.dataContext.id !== undefined) {
          selected = event.dataItem.dataContext.id;
        } else {
          selected = undefined;
        }
        chart.dataProvider = generateChartData();
        chart.validateData();
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

export default PieChartWithBrokenDownSlices;
