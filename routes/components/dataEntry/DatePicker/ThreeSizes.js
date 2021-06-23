import React, {Component} from "react";
import {Card, DatePicker, Radio} from "antd";

const {MonthPicker, RangePicker, WeekPicker} = DatePicker;

class ThreeSizes extends Component {
  state = {
    size: 'default',
  };

  handleSizeChange = (e) => {
    this.setState({size: e.target.value});
  };

  render() {
    const {size} = this.state;
    return (
      <Card className="gx-card" title="Three Sizes">
        <Radio.Group className="gx-mb-2" value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <DatePicker className="gx-mb-3 gx-w-100" size={size}/>
        <MonthPicker className="gx-mb-3 gx-w-100" size={size} placeholder="Select Month"/>
        <RangePicker className="gx-mb-3 gx-w-100" size={size}/>
        <WeekPicker className="gx-w-100" size={size} placeholder="Select Week"/>
      </Card>
    );
  }

}

export default ThreeSizes;
