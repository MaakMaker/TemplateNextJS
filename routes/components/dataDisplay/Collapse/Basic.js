import React from "react";
import {Card, Collapse} from "antd";

import "./basic.css";

const Panel = Collapse.Panel;


const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Basic = () => {
  const callback = (key) => {
    console.log(key);
  };

  return (
    <Card className="gx-card" title="Basic">
      <Collapse defaultActiveKey={['1']} onChange={callback}>
        <Panel header="This is panel header 1" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3" disabled>
          <p>{text}</p>
        </Panel>
      </Collapse>
    </Card>
  );
};

export default Basic;
