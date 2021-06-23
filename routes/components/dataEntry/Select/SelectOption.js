import React from "react";
import {Card, Select} from "antd";

const {Option, OptGroup} = Select;


const SelectOption = () => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <Card className="gx-card" title="Select Option">
      <Select
        defaultValue="lucy"
        style={{width: 200}}
        onChange={handleChange}
      >
        <OptGroup label="Manager">
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
        </OptGroup>
        <OptGroup label="Engineer">
          <Option value="Yiminghe">yiminghe</Option>
        </OptGroup>
      </Select>
    </Card>
  );
};

export default SelectOption;
