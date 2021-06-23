import React from "react";
import {Button, Card, notification} from "antd";

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description: 'This is the content of the Notification. This is the content of the Notification. This is the content of the Notification.',
    style: {
      width: 600,
      marginLeft: 335 - 600,
    },
  });
};

const CustomizeStyle = () => {
  return (
    <Card title="Placement" className="gx-card">
      <Button type="primary" onClick={openNotification}>Open the notification box</Button>
    </Card>
  );
};

export default CustomizeStyle;
