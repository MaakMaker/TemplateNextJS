import React from "react";
import AmCharts from "@amcharts/amcharts3-react";

const LogarithmicScale = () => {

  const config = {
    "type": "serial",
    "theme": "light",
    "marginRight": 80,
    "marginTop": 17,
    "autoMarginOffset": 20,
    "dataProvider": [{
      "date": "2012-03-01",
      "price": 20
    }, {
      "date": "2012-03-02",
      "price": 75
    }, {
      "date": "2012-03-03",
      "price": 15
    }, {
      "date": "2012-03-04",
      "price": 75
    }, {
      "date": "2012-03-05",
      "price": 158
    }, {
      "date": "2012-03-06",
      "price": 57
    }, {
      "date": "2012-03-07",
      "price": 107
    }, {
      "date": "2012-03-08",
      "price": 89
    }, {
      "date": "2012-03-09",
      "price": 75
    }, {
      "date": "2012-03-10",
      "price": 132
    }, {
      "date": "2012-03-11",
      "price": 158
    }, {
      "date": "2012-03-12",
      "price": 56
    }, {
      "date": "2012-03-13",
      "price": 169
    }, {
      "date": "2012-03-14",
      "price": 24
    }, {
      "date": "2012-03-15",
      "price": 147
    }],
    "valueAxes": [{
      "logarithmic": true,
      "dashLength": 1,
      "guides": [{
        "dashLength": 6,
        "inside": true,
        "label": "average",
        "lineAlpha": 1,
        "value": 90.4
      }],
      "position": "left"
    }],
    "graphs": [{
      "bullet": "round",
      "id": "g1",
      "bulletBorderAlpha": 1,
      "bulletColor": "#FFFFFF",
      "bulletSize": 7,
      "lineThickness": 2,
      "title": "Price",
      "type": "smoothedLine",
      "useLineColorForBulletBorder": true,
      "valueField": "price"
    }],
    "chartScrollbar": {},
    "chartCursor": {
      "valueLineEnabled": true,
      "valueLineBalloonEnabled": true,
      "valueLineAlpha": 0.5,
      "fullWidth": true,
      "cursorAlpha": 0.05
    },
    "dataDateFormat": "YYYY-MM-DD",
    "categoryField": "date",
    "categoryAxis": {
      "parseDates": true
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

export default LogarithmicScale;
