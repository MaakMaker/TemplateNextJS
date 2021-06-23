import React, {Component} from "react";
import AmCharts from "@amcharts/amcharts3-react";

class AnimatedGauge extends Component {


  state = {
    randomValue: 60
  }

  componentDidMount() {
    this.interval = setInterval(() => this.randomValue(), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  randomValue() {
    const min = 1;
    const max = 100;
    const randomValue = min + Math.random() * (max - min);
    this.setState({randomValue});
  }

  render() {
    const config = {
      "theme": "none",
      "type": "gauge",
      "axes": [{
        "topTextFontSize": 20,
        "topTextYOffset": 70,
        "axisColor": "#31d6ea",
        "axisThickness": 1,
        "endValue": 100,
        "gridInside": true,
        "inside": true,
        "radius": "50%",
        "valueInterval": 10,
        "tickColor": "#67b7dc",
        "startAngle": -90,
        "endAngle": 90,
        "unit": "%",
        "bandOutlineAlpha": 0,
        "bands": [{
          "color": "#0080ff",
          "endValue": 100,
          "innerRadius": "105%",
          "radius": "170%",
          "gradientRatio": [0.5, 0, -0.5],
          "startValue": 0
        }, {
          "color": "#3cd3a3",
          "endValue": 0,
          "innerRadius": "105%",
          "radius": "170%",
          "gradientRatio": [0.5, 0, -0.5],
          "startValue": 0
        }]
      }],
      "arrows": [
        {
          "id": "GaugeArrow-1",
          "value": this.state.randomValue
        }
      ]
    };
    return (
      <div className="App">
        <AmCharts.React style={{width: "100%", height: "500px"}} options={config}/>
      </div>
    )
  }
}

export default AnimatedGauge;
