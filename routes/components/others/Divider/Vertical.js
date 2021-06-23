import React from "react";
import {Card, Divider} from "antd";

const Vertical = () => {
  return (
    <Card className="gx-card" title="Vertical">
      Text
      <Divider type="vertical"/>
      <span className="gx-link">Link</span>
      <Divider type="vertical"/>
      <span className="gx-link">Link</span>
    </Card>
  );
};

export default Vertical;
