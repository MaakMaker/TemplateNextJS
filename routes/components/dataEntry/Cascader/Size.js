import React from "react";
import {Card, Cascader} from "antd";

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

function onChange(value) {
  console.log(value);
}


const Size = () => {
  return (
    <Card className="gx-card" title="Size">
      <Cascader size="large" options={options} onChange={onChange}/><br/><br/>
      <Cascader options={options} onChange={onChange}/><br/><br/>
      <Cascader size="small" options={options} onChange={onChange}/><br/><br/>
    </Card>
  );
};

export default Size;
