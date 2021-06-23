import React from "react";
import {Card, Tabs} from "antd";

const TabPane = Tabs.TabPane;

const Basic = () => {
  const callback = (key) => {
    console.log(key);
  };

  return (
    <Card className="gx-card" title="Basic">
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
        <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
        <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
      </Tabs>
    </Card>
  );
};

export default Basic;
