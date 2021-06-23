import React from "react";
import {Card, Select} from "antd";

const Option = Select.Option;


const SearchField = () => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  function handleBlur() {
    console.log('blur');
  }

  function handleFocus() {
    console.log('focus');
  }

  return (
    <Card className="gx-card" title="Search Field">
      <Select
        showSearch
        style={{width: 200}}
        placeholder="Select a person"
        optionFilterProp="children"
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="tom">Tom</Option>
      </Select>
    </Card>
  );
};

export default SearchField;
