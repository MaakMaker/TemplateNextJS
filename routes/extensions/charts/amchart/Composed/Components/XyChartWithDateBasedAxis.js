import React from "react";
import AmCharts from "@amcharts/amcharts3-react";

const XyChartWithDateBasedAxis = () => {

  const config = {
    "type": "xy",
    "theme": "none",
    "marginRight": 80,
    "dataDateFormat": "YYYY-MM-DD",
    "startDuration": 1.5,
    "trendLines": [],
    "balloon": {
      "adjustBorderColor": false,
      "shadowAlpha": 0,
      "fixedPosition": true
    },
    "graphs": [{
      "balloonText": "<div style='margin:5px;'><b>[[x]]</b><br>y:<b>[[y]]</b><br>value:<b>[[value]]</b></div>",
      "bullet": "diamond",
      "id": "AmGraph-1",
      "lineAlpha": 0,
      "lineColor": "#b0de09",
      "fillAlphas": 0,
      "valueField": "aValue",
      "xField": "date",
      "yField": "ay"
    }, {
      "balloonText": "<div style='margin:5px;'><b>[[x]]</b><br>y:<b>[[y]]</b><br>value:<b>[[value]]</b></div>",
      "bullet": "round",
      "id": "AmGraph-2",
      "lineAlpha": 0,
      "lineColor": "#fcd202",
      "fillAlphas": 0,
      "valueField": "bValue",
      "xField": "date",
      "yField": "by"
    }],
    "valueAxes": [{
      "id": "ValueAxis-1",
      "axisAlpha": 0
    }, {
      "id": "ValueAxis-2",
      "axisAlpha": 0,
      "position": "bottom",
      "type": "date",
      "minimumDate": new Date(2014, 11, 31),
      "maximumDate": new Date(2015, 0, 13)
    }],
    "allLabels": [],
    "titles": [],
    "dataProvider": [{
      "date": "2015-01-01",
      "ay": 6.5,
      "by": 2.2,
      "aValue": 15,
      "bValue": 10
    }, {
      "date": "2015-01-02",
      "ay": 12.3,
      "by": 4.9,
      "aValue": 8,
      "bValue": 3
    }, {
      "date": "2015-01-03",
      "ay": 12.3,
      "by": 5.1,
      "aValue": 16,
      "bValue": 4
    }, {
      "date": "2015-01-04",
      "ay": 2.8,
      "by": 13.3,
      "aValue": 9,
      "bValue": 13
    }, {
      "date": "2015-01-05",
      "ay": 3.5,
      "by": 6.1,
      "aValue": 5,
      "bValue": 2
    }, {
      "date": "2015-01-06",
      "ay": 5.1,
      "by": 8.3,
      "aValue": 10,
      "bValue": 17
    }, {
      "date": "2015-01-07",
      "ay": 6.7,
      "by": 10.5,
      "aValue": 3,
      "bValue": 10
    }, {
      "date": "2015-01-08",
      "ay": 8,
      "by": 12.3,
      "aValue": 5,
      "bValue": 13
    }, {
      "date": "2015-01-09",
      "ay": 8.9,
      "by": 4.5,
      "aValue": 8,
      "bValue": 11
    }, {
      "date": "2015-01-10",
      "ay": 9.7,
      "by": 15,
      "aValue": 15,
      "bValue": 10
    }, {
      "date": "2015-01-11",
      "ay": 10.4,
      "by": 10.8,
      "aValue": 1,
      "bValue": 11
    }, {
      "date": "2015-01-12",
      "ay": 1.7,
      "by": 19,
      "aValue": 12,
      "bValue": 3
    }],

    "export": {
      "enabled": true
    },

    "chartScrollbar": {
      "offset": 15,
      "scrollbarHeight": 5
    },

    "chartCursor": {
      "pan": true,
      "cursorAlpha": 0,
      "valueLineAlpha": 0
    }
  };
  return (
    <div className="App">
      <AmCharts.React style={{width: "100%", height: "500px"}} options={config}/>
    </div>
  )
}

export default XyChartWithDateBasedAxis;
