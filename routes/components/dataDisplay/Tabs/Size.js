import React, {useState} from "react";
import {Card, Radio, Tabs} from "antd";

const {TabPane} = Tabs;

const Size = () => {

  const [size, setSize] = useState('small');

  const onChange = (e) => {
    setSize(e.target.value);
  };

  return (
    <Card className="gx-card" title="Size">
      <Radio.Group value={size} onChange={onChange} className="gx-mb-3">
        <Radio.Button value="small">Small</Radio.Button>
        <Radio.Button value="default">Default</Radio.Button>
        <Radio.Button value="large">Large</Radio.Button>
      </Radio.Group>
      <Tabs defaultActiveKey="1" size={size}>
        <TabPane tab="Tab 1" key="1">Content of tab 1</TabPane>
        <TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>
        <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
      </Tabs>
    </Card>
  );
};

export default Size;
