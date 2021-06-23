import React from "react";
import {Card, InputNumber} from "antd";

const Basic = () => {
  function onChange(value) {
    console.log('changed', value);
  }

  return (
    <Card className="gx-card" title="Basic">
      <InputNumber min={1} max={10} defaultValue={3} onChange={onChange}/>
    </Card>
  );
};

export default Basic;
