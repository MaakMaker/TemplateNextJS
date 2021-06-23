import React from "react";
import {BackTop, Card} from "antd";

const Basic = () => {
  return (
    <Card title="Basic" className="gx-card">
      <BackTop/>
      Scroll down to see the bottom-right
      <strong className="gx-text-grey"> gray </strong>
      button.
    </Card>
  );
};

export default Basic;
