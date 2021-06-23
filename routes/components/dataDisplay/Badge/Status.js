import React from "react";
import {Badge, Card} from "antd";

const Status = () => {
  return (
    <Card className="gx-card" title="Status">
      <Badge status="success"/>
      <Badge status="error"/>
      <Badge status="default"/>
      <Badge status="processing"/>
      <Badge status="warning"/>
      <br/>
      <Badge status="success" text="Success"/>
      <br/>
      <Badge status="error" text="Error"/>
      <br/>
      <Badge status="default" text="Default"/>
      <br/>
      <Badge status="processing" text="Processing"/>
      <br/>
      <Badge status="warning" text="Warning"/>
    </Card>
  );
};

export default Status;
