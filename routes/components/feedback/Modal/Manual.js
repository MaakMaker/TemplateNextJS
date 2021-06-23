import React from "react";
import {Button, Card, Modal} from "antd";

const Manual = () => {
  function success() {
    const modal = Modal.success({
      title: 'This is a Notification message',
      content: 'This modal will be destroyed after 1 second',
    });
    setTimeout(() => modal.destroy(), 1000);
  }

  return (
    <Card title="Manual" className="gx-card">
      <Button onClick={success}>Success</Button>
    </Card>
  );
};

export default Manual;
