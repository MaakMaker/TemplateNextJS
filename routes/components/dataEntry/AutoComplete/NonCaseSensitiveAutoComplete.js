import React from "react";
import {AutoComplete, Card} from "antd";

const dataSource = ['Burns Bay Road', 'Downing Street', 'Wall Street'];

const NonCaseSensitiveAutoComplete = () => {
  return (
    <Card className="gx-card" title="Non CaseSensitive AutoComplete">
      <AutoComplete
        style={{width: 200}}
        dataSource={dataSource}
        placeholder="try to type `b`"
        filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
      />
    </Card>
  );
};

export default NonCaseSensitiveAutoComplete;
