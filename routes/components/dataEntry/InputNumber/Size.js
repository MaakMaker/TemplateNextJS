import React from "react";
import {Card, InputNumber} from "antd";

import "./size.css";

const Size = () => {
  function onChange(value) {
    console.log('changed', value);
  }

  return (
    <Card className="gx-card" title="Size">
      <InputNumber className="gx-mb-3" size="large" min={1} max={100000} defaultValue={3} onChange={onChange}/>
      <InputNumber className="gx-mb-3" min={1} max={100000} defaultValue={3} onChange={onChange}/>
      <InputNumber className="gx-mb-3" size="small" min={1} max={100000} defaultValue={3} onChange={onChange}/>
    </Card>
  );
};

export default Size;
