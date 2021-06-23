import React from "react";
import {Alert, Card} from "antd";

const Banner = () => {
  return (
    <Card title="Banner" className="gx-card">
      <Alert message="Warning text" banner/>
      <Alert message="Very long warning text warning text text text text text text text" banner closable/>
      <Alert showIcon={false} message="Warning text without icon" banner/>
      <Alert type="error" message="Error text" banner/>
    </Card>
  );
};

export default Banner;
