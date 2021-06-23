import React from "react";
import {Button, Card, notification} from "antd";

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description: 'This is the content of the Notification. This is the content of the Notification. This is the content of the Notification.',
  });
};

const Basic = () => {
  return (
    <Card title="Basic" className="gx-card">
      <Button type="primary" onClick={openNotification}>Open the notification box</Button>
    </Card>
  );
};

export default Basic;
