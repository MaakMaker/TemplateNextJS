import React from "react";
import {Card, Slider} from "antd";

const SliderEvent = () => {
  function onChange(value) {
    console.log('onChange: ', value);
  }

  function onAfterChange(value) {
    console.log('onAfterChange: ', value);
  }

  return (
    <Card className="gx-card" title="Slider Event">
      <Slider defaultValue={30} onChange={onChange} onAfterChange={onAfterChange}/>
      <Slider range step={10} defaultValue={[20, 50]} onChange={onChange} onAfterChange={onAfterChange}/>
    </Card>
  );
};

export default SliderEvent;
