import React from "react";
import {Card, Slider} from "antd";

const SliderCustomize = () => {
  function formatter(value) {
    return `${value}%`;
  }

  return (
    <Card className="gx-card" title="Slider Customize">
      <Slider tipFormatter={formatter}/>
      <Slider tipFormatter={null}/>
    </Card>
  );
};

export default SliderCustomize;
