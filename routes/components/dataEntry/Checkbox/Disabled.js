import React from "react";
import {Card, Checkbox} from "antd";


const Disabled = () => {
  return (
    <Card className="gx-card" title="Disabled">
      <Checkbox defaultChecked={false} disabled/>
      <br/>
      <Checkbox defaultChecked disabled/>
    </Card>
  );
};

export default Disabled;
