import React from "react";
import {Card, Collapse} from "antd";

const Panel = Collapse.Panel;


const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const customPanelStyle = {
  borderRadius: 4,
  border: 0,
  overflow: 'hidden',
};

const CustomPanel = () => {

  return (
    <Card className="gx-card" title="Custom Panel">
      <Collapse className="gx-collapse-custom" bordered={false} defaultActiveKey={['1']}>
        <Panel header="This is panel header 1" key="1" style={customPanelStyle}>
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 2" key="2" style={customPanelStyle}>
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3" style={customPanelStyle}>
          <p>{text}</p>
        </Panel>
      </Collapse>
    </Card>
  );
};

export default CustomPanel;
