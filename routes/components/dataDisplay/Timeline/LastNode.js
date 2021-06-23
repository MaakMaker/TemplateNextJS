import React from "react";
import {Card, Timeline} from "antd";

const LastNode = () => {
  return (
    <Card title="Last Node" className="gx-card">
      <Timeline pending="Recording...">
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
      </Timeline>
    </Card>
  );
};

export default LastNode;
