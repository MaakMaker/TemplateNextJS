import React from "react";
import {Card, Steps} from "antd";

const Step = Steps.Step;

const ErrorStatus = () => {
  return (
    <Card className="gx-card" title="ErrorStatus">
      <Steps current={1} status="error">
        <Step title="Finished" description="This is a description"/>
        <Step title="In Process" description="This is a description"/>
        <Step title="Waiting" description="This is a description"/>
      </Steps>
    </Card>
  );
};

export default ErrorStatus;
