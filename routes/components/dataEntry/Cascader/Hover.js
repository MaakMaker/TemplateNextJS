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

// Just show the latest item.
function displayRender(label) {
  return label[label.length - 1];
}

const Hover = () => {
  return (
    <Card className="gx-card" title="Hover">
      <Cascader
        options={options}
        expandTrigger="hover"
        displayRender={displayRender}
        onChange={onChange}
      />
    </Card>
  );
};

export default Hover;
