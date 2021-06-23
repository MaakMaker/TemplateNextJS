import React from "react";
import {Card, Timeline} from "antd";

const Basic = () => {
  return (
    <Card title="Basic" className="gx-card">
      <Timeline>
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
      </Timeline>
    </Card>
  );
};

export default Basic;
