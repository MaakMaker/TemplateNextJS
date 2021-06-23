import React from "react";
import AmCharts from "@amcharts/amcharts3-react";

const LineWithChangingColor = () => {

  const config = {
    "type": "serial",
    "theme": "light",
    "marginRight": 80,
    "dataProvider": [{
      "lineColor": "#b7e021",
      "date": "2012-01-01",
      "duration": 408
    }, {
      "date": "2019-01-02",
      "duration": 482
    }, {
      "date": "2019-01-03",
      "duration": 562
    }, {
      "date": "2019-01-04",
      "duration": 379
    }, {
      "lineColor": "#fbd51a",
      "date": "2019-01-05",
      "duration": 501
    }, {
      "date": "2019-01-06",
      "duration": 443
    }, {
      "date": "2019-01-07",
      "duration": 405
    }, {
      "date": "2019-01-08",
      "duration": 309,
      "lineColor": "#2498d2"
    }, {
      "date": "2019-01-09",
      "duration": 287
    }, {
      "date": "2019-01-10",
      "duration": 485
    }, {
      "date": "2019-01-11",
      "duration": 890
    }, {
      "date": "2019-01-12",
      "duration": 810
    }],
    "balloon": {
      "cornerRadius": 6,
      "horizontalPadding": 15,
      "verticalPadding": 10
    },
    "valueAxes": [{
      "duration": "mm",
      "durationUnits": {
        "hh": "h ",
        "mm": "min"
      },
      "axisAlpha": 0
    }],
    "graphs": [{
      "bullet": "square",
      "bulletBorderAlpha": 1,
      "bulletBorderThickness": 1,
      "fillAlphas": 0.3,
      "fillColorsField": "lineColor",
      "legendValueText": "[[value]]",
      "lineColorField": "lineColor",
      "title": "duration",
      "valueField": "duration"
    }],
    "chartScrollbar": {},
    "chartCursor": {
      "categoryBalloonDateFormat": "YYYY MMM DD",
      "cursorAlpha": 0,
      "fullWidth": true
    },
    "dataDateFormat": "YYYY-MM-DD",
    "categoryField": "date",
    "categoryAxis": {
      "dateFormats": [{
        "period": "DD",
        "format": "DD"
      }, {
        "period": "WW",
        "format": "MMM DD"
      }, {
        "period": "MM",
        "format": "MMM"
      }, {
        "period": "YYYY",
        "format": "YYYY"
      }],
      "parseDates": true,
      "autoGridCount": false,
      "axisColor": "#555555",
      "gridAlpha": 0,
      "gridCount": 50
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

export default LineWithChangingColor;
