import React from "react";
import {Card, Progress} from "antd";

const DashboardBar = () => {
  return (
    <Card title="Dashboard Bar" className="gx-card">
      <Progress type="dashboard" percent={75}/>
    </Card>
  );
};

export default DashboardBar;
