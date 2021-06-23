import React from "react";
import {Breadcrumb, Card} from "antd";

const ConfiguringSeparator = () => {
    return (
      <Card className="gx-card" title="Separator">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item><span className="gx-link">Application Center</span></Breadcrumb.Item>
          <Breadcrumb.Item><span className="gx-link">Application List</span></Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
      </Card>
    );
  }
;

export default ConfiguringSeparator;
