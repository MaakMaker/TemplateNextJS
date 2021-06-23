import React from "react";
import {Card, Cascader} from "antd";

const options = [{
  value: 'zhejiang',
  label: 'Menu',
  children: [{
    value: 'jumbo',
    label: 'jquery',
    children: [{
      value: 'opstion',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'menu',
  label: 'Menu 1',
  children: [{
    value: 'opstion 1',
    label: 'jumbo',
    children: [{
      value: 'opstion 2',
      label: 'react',
    }],
  }],
}];

function onChange(value) {
  console.log(value);
}

const Basic = () => {
  return (
    <Card className="gx-card" title="Basic">
      <Cascader options={options} onChange={onChange} placeholder="Please select"/>
    </Card>
  );
};

export default Basic;
