import React from "react";
import {Card, Select} from "antd";

const Option = Select.Option;


const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const AutomaticCompletion = () => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <Card className="gx-card" title="Automatic Completion">
      <Select
        mode="tags"
        style={{width: '100%'}}
        onChange={handleChange}
        tokenSeparators={[',']}
      >
        {children}
      </Select>
    </Card>
  );
};

export default AutomaticCompletion;
