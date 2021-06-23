import React from "react";
import {Card, message, Popconfirm} from "antd";

const Basic = () => {
  function confirm(e) {
    console.log(e);
    message.success('Click on Yes');
  }

  function cancel(e) {
    console.log(e);
    message.error('Click on No');
  }

  return (
    <Card title="Basic" className="gx-card">
      <Popconfirm title="Are you sure delete this task?" onConfirm={confirm} onCancel={cancel} okText="Yes"
                  cancelText="No">
        <span className="gx-link">Delete</span>
      </Popconfirm>
    </Card>
  );
};

export default Basic;
