import React from "react";
import {Card, Progress} from "antd";

const MiniSizeBar = () => {
  return (
    <Card title="Mini Size Bar" className="gx-card">
      <Progress percent={30} size="small"/>
      <Progress percent={50} size="small" status="active"/>
      <Progress percent={70} size="small" status="exception"/>
      <Progress percent={100} size="small"/>
    </Card>
  );
};

export default MiniSizeBar;
