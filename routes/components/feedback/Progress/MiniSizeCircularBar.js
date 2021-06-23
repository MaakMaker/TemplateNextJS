import React from "react";
import {Card, Progress} from "antd";

const MiniSizeCircularBar = () => {
  return (
    <Card title="Mini Size CircularBar" className="gx-card">
      <Progress type="circle" percent={30} width={80}/>
      <Progress type="circle" percent={70} width={80} status="exception"/>
      <Progress type="circle" percent={100} width={80}/>
    </Card>
  );
};

export default MiniSizeCircularBar;
