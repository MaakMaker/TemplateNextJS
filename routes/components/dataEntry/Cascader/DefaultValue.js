import React from "react";
import {Card, Cascader} from "antd";

const options = [{
  value: 'menu',
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

const DefaultValue = () => {
  return (
    <Card className="gx-card" title="Default Value">
      <Cascader defaultValue={['menu', 'jumbo', 'opstion']} options={options} onChange={onChange}/>
    </Card>
  );
};

export default DefaultValue;
