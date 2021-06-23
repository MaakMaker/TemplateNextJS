import React from "react";
import {Card, Slider} from "antd";

const marks = {
  0: '0°C',
  26: '26°C',
  37: '37°C',
  100: {
    style: {
      color: '#f50',
    },
    label: <strong>100°C</strong>,
  },
};
const VerticalSlider = () => (
  <Card className="gx-card" title="Vertical Slider">
    <div className="gx-vertical-slider">
      <div className="gx-vertical-slider-item">
        <Slider vertical defaultValue={30}/>
      </div>
      <div className="gx-vertical-slider-item">
        <Slider vertical range step={10} defaultValue={[20, 50]}/>
      </div>
      <div className="gx-vertical-slider-item">
        <Slider vertical range marks={marks} defaultValue={[26, 37]}/>
      </div>
    </div>
  </Card>
);
export default VerticalSlider;
