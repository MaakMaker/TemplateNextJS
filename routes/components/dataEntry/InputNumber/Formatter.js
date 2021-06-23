import React from "react";
import {Card, InputNumber} from "antd";

const Formatter = () => {
  function onChange(value) {
    console.log('changed', value);
  }

  return (
    <Card className="gx-card" title="Formatter">
      <InputNumber className="gx-mb-3"
                   defaultValue={1000}
                   formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                   parser={value => value.replace(/\$\s?|(,*)/g, '')}
                   onChange={onChange}
      />
      <InputNumber className="gx-mb-3"
                   defaultValue={100}
                   min={0}
                   max={100}
                   formatter={value => `${value}%`}
                   parser={value => value.replace('%', '')}
                   onChange={onChange}
      />
    </Card>
  );
};

export default Formatter;
