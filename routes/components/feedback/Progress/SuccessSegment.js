import React from "react";
import {Card, Progress, Tooltip} from "antd";

const SuccessSegment = () => {
  return (
    <Card title="Success Segment" className="gx-card">
      <Tooltip title="3 done / 3 in progress / 4 to do">
        <Progress percent={60} successPercent={30}/>
      </Tooltip>
    </Card>
  );
};

export default SuccessSegment;
