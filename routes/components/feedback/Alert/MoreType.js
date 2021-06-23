import React from "react";
import {Alert, Card} from "antd";

const MoreType = () => {
  return (
    <Card title="More Type" className="gx-card">
      <Alert message="Success Text" type="success"/>
      <Alert message="Info Text" type="info"/>
      <Alert message="Warning Text" type="warning"/>
      <Alert message="Error Text" type="error"/>
    </Card>
  );
};

export default MoreType;
