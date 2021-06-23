import React from "react";
import {Card, Steps} from "antd";

const Step = Steps.Step;

const MiniVersion = () => {
  return (
    <Card className="gx-card" title="Mini Version">
      <Steps size="small" current={1}>
        <Step title="Finished"/>
        <Step title="In Progress"/>
        <Step title="Waiting"/>
      </Steps>
    </Card>
  );
};

export default MiniVersion;
