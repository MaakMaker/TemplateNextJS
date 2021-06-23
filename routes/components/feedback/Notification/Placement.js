import React from "react";
import {Button, Card, notification, Select} from "antd";

const {Option} = Select;
const options = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description: 'This is the content of the Notification. This is the content of the Notification. This is the content of the Notification.',
  });
};

const Placement = () => {
  return (
    <Card title="Placement" className="gx-card">
      <Select className="gx-mb-2 gx-mr-2 gx-vertical-align-top"
              defaultValue="topLeft"
              style={{width: 120}}
              onChange={(val) => {
                notification.config({
                  placement: val,
                });
              }}
      >
        {options.map(val => <Option key={val} value={val}>{val}</Option>)}
      </Select>
      <Button
        type="primary" className="gx-mb-2"
        onClick={openNotification}
      >
        Open the notification box
      </Button>
    </Card>
  );
};

export default Placement;
