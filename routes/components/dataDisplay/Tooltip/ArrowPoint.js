import React from "react";
import {Button, Card, Tooltip} from "antd";

const ArrowPoint = () => {
  return (
    <Card title="Arrow Point" className="gx-card">
      <Tooltip placement="topLeft" title="Prompt Text">
        <Button>Align edge </Button>
      </Tooltip>
      <Tooltip placement="topLeft" title="Prompt Text" arrowPointAtCenter>
        <Button>Arrow points to center </Button>
      </Tooltip>
    </Card>
  );
};

export default ArrowPoint;
