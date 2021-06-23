import React from "react";
import {Button, Card, notification} from "antd";

const openNotification = () => {
  const args = {
    message: 'Notification Title',
    description: 'I will never close automatically. I will be close automatically. I will never close automatically.',
    duration: 0,
  };
  notification.open(args);
};

const Duration = () => {
  return (
    <Card title="Duration" className="gx-card">
      <Button type="primary" onClick={openNotification}>Open the notification box</Button>
    </Card>
  );
};

export default Duration;
