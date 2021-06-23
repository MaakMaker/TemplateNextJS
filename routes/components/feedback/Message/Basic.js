import React from "react";
import {Button, Card, message} from "antd";

const info = () => {
  message.info('This is a normal message');
};

const Basic = () => {
  return (
    <Card title="Basic" className="gx-card">
      <Button type="primary" onClick={info}>Display normal message</Button>
    </Card>
  );
};

export default Basic;
