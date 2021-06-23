import React from "react";
import {Card, Steps} from "antd";

const Step = Steps.Step;

const VerticalVersion = () => {
  return (
    <Card className="gx-card" title="Vertical Version">
      <Steps direction="vertical" size="small" current={1}>
        <Step title="Finished" description="This is a description."/>
        <Step title="In Progress" description="This is a description."/>
        <Step title="Waiting" description="This is a description."/>
      </Steps>
    </Card>
  );
};

export default VerticalVersion;
