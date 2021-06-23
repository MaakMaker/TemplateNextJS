import React from "react";
import {BackTop, Card} from "antd";

const Custom = () => {
  return (
    <Card id="components-back-top-demo-custom" title="Custom" className="gx-card">
      <BackTop>
        <div className="ant-back-top-inner">UP</div>
      </BackTop>
      Scroll down to see the bottom-right
      <strong className="gx-text-primary"> blue </strong>
      button.
    </Card>
  );
};

export default Custom;
