import React from "react";
import {Card, Progress} from "antd";

const CustomTextBar = () => {
  return (
    <Card title="Custom Text Bar" className="gx-card">
      <Progress type="circle" percent={75} format={percent => `${percent} Days`}/>
      <Progress type="circle" percent={100} format={() => 'Done'}/>
    </Card>
  );
};

export default CustomTextBar;
