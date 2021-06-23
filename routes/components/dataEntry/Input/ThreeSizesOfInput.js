import React from "react";
import {Card, Input} from "antd";

import "./threeSizesOfInput.css";

const ThreeSizesOfInput = () => {
  return (
    <Card className="gx-card" title="Three Sizes Of Input">
      <div className="gx-mb-3">
        <Input size="large" placeholder="large size"/>
      </div>
      <div className="gx-mb-3">
        <Input placeholder="default size"/>
      </div>
      <div className="gx-mb-3">
        <Input size="small" placeholder="small size"/>
      </div>
    </Card>

  );
};

export default ThreeSizesOfInput;
