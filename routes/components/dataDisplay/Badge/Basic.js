import React from "react";
import {Badge, Card} from "antd";

const Basic = () => {
  return (
    <Card className="gx-card" title="Basic">
      <Badge count={5}>
        <span className="head-example"/>
      </Badge>
      <Badge count={0} showZero>
        <span className="head-example"/>
      </Badge>
    </Card>
  );
};

export default Basic;
