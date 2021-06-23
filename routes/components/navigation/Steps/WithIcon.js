import React from "react";
import {Card, Steps} from "antd";
import {UserOutlined,SolutionOutlined,LoadingOutlined,SmileOutlined} from "@ant-design/icons";

const Step = Steps.Step;

const WithIcon = () => {
  return (
    <Card className="gx-card" title="With Icon">
      <Steps>
        <Step status="finish" title="Login" icon={<UserOutlined />}/>
        <Step status="finish" title="Verification" icon={<SolutionOutlined />}/>
        <Step status="process" icon={<LoadingOutlined/>} title="Pay" />
        <Step status="wait" title="Done" icon={<SmileOutlined />}/>
      </Steps>
    </Card>
  );
};

export default WithIcon;
