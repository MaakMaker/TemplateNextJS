import React from "react";
import {Card, Progress} from "antd";

const Basic = () => {
  return (
    <Card title="Basic" className="gx-card">
      <Progress percent={30}/>
      <Progress percent={50} status="active"/>
      <Progress percent={70} status="exception"/>
      <Progress percent={100}/>
      <Progress percent={50} showInfo={false}/>
    </Card>
  );
};

export default Basic;
