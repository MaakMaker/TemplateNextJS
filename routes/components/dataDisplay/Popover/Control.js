import React, {useState} from "react";
import {Button, Card, Popover} from "antd";


const Control = () => {

  const [visible, setVisible] = useState(false);

  const hide = () => {
    setVisible(false)
  };
  const handleVisibleChange = (visible) => {
    setVisible(visible);
  };

  return (
    <Card className="gx-card" title="Control">
      <Popover
        content={<span className="gx-link" onClick={hide}>Close</span>}
        title="Title"
        trigger="click"
        visible={visible}
        onVisibleChange={handleVisibleChange}
      >
        <Button type="primary">Click me</Button>
      </Popover>
    </Card>
  );
};


export default Control;
