import React from "react";
import {Card, Radio, Select} from "antd";

import "./selectSize.css";

const Option = Select.Option;


const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`Selected: ${value}`);
}

class SeclectSize extends React.Component {
  state = {
    size: 'default',
  };

  handleSizeChange = (e) => {
    this.setState({size: e.target.value});
  };

  render() {
    const {size} = this.state;
    return (
      <Card className="gx-card" title="Seclect Size">
        <Radio.Group className="gx-mb-2" value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>

        <Select className="gx-w-100 gx-mb-3"
                size={size}
                defaultValue="a1"
                onChange={handleChange}
                style={{width: 200}}
        >
          {children}
        </Select>

        <Select className="gx-w-100 gx-mb-3"
                mode="tags"
                size={size}
                defaultValue="a1"
                onChange={handleChange}
                style={{width: 200}}
        >
          {children}
        </Select>

        <Select className="gx-w-100 gx-mb-3"
                mode="multiple"
                size={size}
                placeholder="Please select"
                defaultValue={['a10', 'c12']}
                onChange={handleChange}
                style={{width: '100%'}}
        >
          {children}
        </Select>

        <Select className="gx-w-100"
                mode="tags"
                size={size}
                placeholder="Please select"
                defaultValue={['a10', 'c12']}
                onChange={handleChange}
                style={{width: '100%'}}
        >
          {children}
        </Select>
      </Card>
    );
  }
}

export default SeclectSize;
