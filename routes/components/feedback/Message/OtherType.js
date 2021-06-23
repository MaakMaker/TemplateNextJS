import React from "react";
import {Button, Card, message} from "antd";

import "./otherType.css";

const success = () => {
  message.success('This is a message of success');
};

const error = () => {
  message.error('This is a message of error');
};

const warning = () => {
  message.warning('This is message of warning');
};
const OtherType = () => {
  return (
    <Card title="Other Type" className="gx-card">
      <Button onClick={success}>Success</Button>
      <Button onClick={error}>Error</Button>
      <Button onClick={warning}>Warning</Button>
    </Card>
  );
};

export default OtherType;
