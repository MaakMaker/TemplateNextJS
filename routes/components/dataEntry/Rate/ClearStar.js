import React from "react";
import {Card, Rate} from "antd";

const ClearStar = () => {
  return (
    <Card className="gx-card" title="Clear Star">
      <div className="gx-mb-2"><Rate defaultValue={3}/> allowClear: true</div>

      <div className="gx-mb-0"><Rate allowClear={false} defaultValue={3}/> allowClear: false</div>
    </Card>
  );
};

export default ClearStar;
