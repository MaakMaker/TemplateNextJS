import React from "react";
import {Card, Popover, Steps} from "antd";

const Step = Steps.Step;

const customDot = (dot, {status, index}) => (
  <Popover content={<span>step {index} status: {status}</span>}>
    {dot}
  </Popover>
);

const CustomizedDotStyle = () => {
  return (
    <Card className="gx-card" title="Customized DotS tyle">
      <Steps current={1} progressDot={customDot}>
        <Step title="Finished" description="You can hover on the dot."/>
        <Step title="In Progress" description="You can hover on the dot."/>
        <Step title="Waiting" description="You can hover on the dot."/>
        <Step title="Waiting" description="You can hover on the dot."/>
      </Steps>
    </Card>
  );
};

export default CustomizedDotStyle;
