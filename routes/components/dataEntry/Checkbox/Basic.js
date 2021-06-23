import React from "react";
import {Card, Checkbox} from "antd";

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

const Basic = () => {
  return (
    <Card className="gx-card" title="Basic">
      <Checkbox onChange={onChange}>Checkbox</Checkbox>
    </Card>
  );
};

export default Basic;
