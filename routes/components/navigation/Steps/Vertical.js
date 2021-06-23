import React from "react";
import {Card, Steps} from "antd";

const Step = Steps.Step;

const Vertical = () => {
  return (
    <Card className="gx-card" title="Vertical">
      <Steps direction="vertical" current={1}>
        <Step title="Finished" description="This is a description."/>
        <Step title="In Progress" description="This is a description."/>
        <Step title="Waiting" description="This is a description."/>
      </Steps>
    </Card>
  );
};

export default Vertical;
