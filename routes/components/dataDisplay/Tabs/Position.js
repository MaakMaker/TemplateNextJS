import React, {useState} from "react";
import {Card, Select, Tabs} from "antd";

const TabPane = Tabs.TabPane;
const Option = Select.Option;

const Position = () => {

  const [tabPosition, setTabPosition] = useState('top');

  const changeTabPosition = (tabPosition) => {
    setTabPosition(tabPosition)
  };

  return (
    <Card className="gx-card" title="Position">
      <div className="gx-mb-3">
        Tab position：
        <Select
          value={tabPosition}
          onChange={changeTabPosition}
          dropdownMatchSelectWidth={false}
        >
          <Option value="top">top</Option>
          <Option value="bottom">bottom</Option>
          <Option value="left">left</Option>
          <Option value="right">right</Option>
        </Select>
      </div>
      <Tabs tabPosition={tabPosition}>
        <TabPane tab="Tab 1" key="1">Content of Tab 1</TabPane>
        <TabPane tab="Tab 2" key="2">Content of Tab 2</TabPane>
        <TabPane tab="Tab 3" key="3">Content of Tab 3</TabPane>
      </Tabs>
    </Card>
  );
};

export default Position;
