import React from "react";
import {Breadcrumb, Card} from "antd";

const Basic = () => {
  return (
    <Card className="gx-card" title="Basic">
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item><span className="gx-link">Application Center</span></Breadcrumb.Item>
        <Breadcrumb.Item><span className="gx-link">Application List</span></Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>
    </Card>
  );
};

export default Basic;
