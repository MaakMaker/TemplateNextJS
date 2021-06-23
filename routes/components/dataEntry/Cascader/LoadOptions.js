import React, {Component} from "react";

import {Card, Cascader} from "antd";

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  isLeaf: false,
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  isLeaf: false,
}];


class LoadOptions extends Component {
  state = {
    options,
  };
  onChange = (value, selectedOptions) => {
    console.log(value, selectedOptions);
  }
  loadData = (selectedOptions) => {
    const targetOption = selectedOptions[selectedOptions.length - 1];
    targetOption.loading = true;

    // load options lazily
    setTimeout(() => {
      targetOption.loading = false;
      targetOption.children = [{
        label: `${targetOption.label} Dynamic 1`,
        value: 'dynamic1',
      }, {
        label: `${targetOption.label} Dynamic 2`,
        value: 'dynamic2',
      }];
      this.setState({
        options: [...this.state.options],
      });
    }, 1000);
  }

  render() {
    return (
      <Card className="gx-card" title="LoadOptions">
        <Cascader
          options={this.state.options}
          loadData={this.loadData}
          onChange={this.onChange}
          changeOnSelect
        />
      </Card>
    );
  }

}


export default LoadOptions;
