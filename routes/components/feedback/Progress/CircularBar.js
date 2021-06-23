import React from "react";
import {Card, Progress} from "antd";

const CircularBar = () => {
  return (
    <Card title="CircularBar" className="gx-card">
      <Progress type="circle" percent={75}/>
      <Progress type="circle" percent={70} status="exception"/>
      <Progress type="circle" percent={100}/>
    </Card>
  );
};

export default CircularBar;
