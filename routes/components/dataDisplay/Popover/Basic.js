import React from "react";
import {Button, Card, Popover} from "antd";

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);


const Basic = () => {
  return (
    <Card className="gx-card" title="Basic">
      <Popover content={content} title="Title">
        <Button type="primary">Hover me</Button>
      </Popover>
    </Card>
  );
};

export default Basic;
