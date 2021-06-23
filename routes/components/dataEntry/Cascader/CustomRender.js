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
      code: 752100,
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
      code: 453400,
    }],
  }],
}];

function handleAreaClick(e, label, option) {
  e.stopPropagation();
  console.log('clicked', label, option);
}


const CustomRender = () => {
  const displayRender = (labels, selectedOptions) => labels.map((label, i) => {
    const option = selectedOptions[i];
    if (i === labels.length - 1) {
      return (
        <span key={option.value}>
        {label} (<span className="gx-link" onClick={e => handleAreaClick(e, label, option)}>{option.code}</span>)
      </span>
      );
    }
    return <span key={option.value}>{label} / </span>;
  });
  return (
    <Card className="gx-card" title="CustomRender">
      <Cascader
        options={options}
        defaultValue={['zhejiang', 'hangzhou', 'xihu']}
        displayRender={displayRender}
        style={{width: '100%'}}
      />
    </Card>
  );
};

export default CustomRender;
