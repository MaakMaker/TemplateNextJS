import React from "react";
import {Button, Card, message} from "antd";

const success = () => {
  message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);
};

const Customize = () => {
  return (
    <Card title="Customize" className="gx-card">
      <Button onClick={success}>Customized display duration</Button>
    </Card>
  );
};

export default Customize;
