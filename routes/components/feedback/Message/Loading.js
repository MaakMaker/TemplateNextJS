import React from "react";
import {Button, Card, message} from "antd";

const success = () => {
  const hide = message.loading('Action in progress..', 0);
  // Dismiss manually and asynchronously
  setTimeout(hide, 2500);
};

const Loading = () => {
  return (
    <Card title="Loading" className="gx-card">
      <Button onClick={success}>Display a loading indicator</Button>
    </Card>
  );
};

export default Loading;
