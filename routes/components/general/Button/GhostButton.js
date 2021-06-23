import React from "react";
import {Button, Card} from "antd";

const GhostButton = () => {
  return (
    <Card title="Ghost Button" className="gx-card gx-bg-grey">
      <Button type="primary" ghost>Primary</Button>
      <Button ghost>Default</Button>
      <Button type="dashed" ghost>Dashed</Button>
      <Button type="danger" ghost>danger</Button>
    </Card>
  );
};

export default GhostButton;
