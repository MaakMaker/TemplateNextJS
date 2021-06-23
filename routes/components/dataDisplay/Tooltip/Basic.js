import React from "react";
import {Card, Tooltip} from "antd";

const Basic = () => {
  return (
    <Card title="Basic" className="gx-card">
      <Tooltip title="prompt text">
        <span>Tooltip will show when mouse enter.</span>
      </Tooltip>
    </Card>
  );
};

export default Basic;
