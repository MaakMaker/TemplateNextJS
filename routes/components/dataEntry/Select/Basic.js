import React from "react";
import {Card, Select} from "antd";

const Option = Select.Option;

const Basic = () => {
    function handleChange(value) {
      console.log(`selected ${value}`);
    }

    return (
      <Card className="gx-card" title="Basic">
        <Select className="gx-mr-3 gx-mb-3" defaultValue="lucy" style={{width: 120}} onChange={handleChange}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>Disabled</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <Select className="gx-mb-3" defaultValue="lucy" style={{width: 120}} allowClear disabled>
          <Option value="lucy">Lucy</Option>
        </Select>
      </Card>
    );
  }
;

export default Basic;
