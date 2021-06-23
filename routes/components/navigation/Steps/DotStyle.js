import React from "react";
import {Card, Steps} from "antd";

const Step = Steps.Step;

const DotStyle = () => {
  return (
    <Card className="gx-card" title="Dot Style">
      <Steps progressDot current={1}>
        <Step title="Finished" description="This is a description."/>
        <Step title="In Progress" description="This is a description."/>
        <Step title="Waiting" description="This is a description."/>
      </Steps>
    </Card>
  );
};

export default DotStyle;
