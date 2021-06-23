import React from "react";
import {Avatar, Card} from "antd";
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";

const Basic = () => {
  return (
    <Card className="gx-card" title="Basic">
      <div className="gx-mb-3">
        <Avatar className="gx-mr-2" size="large" icon={<UserOutlined />}/>
        <Avatar className="gx-mr-2" icon={<UserOutlined />}/>
        <Avatar className="gx-mr-2" size="small" icon={<UserOutlined />}/>
      </div>
      <div className="gx-mb-0">
        <Avatar className="gx-mr-2" shape="square" size="large" icon={<UserOutlined />}/>
        <Avatar className="gx-mr-2" shape="square" icon={<UserOutlined />}/>
        <Avatar className="gx-mr-2" shape="square" size="small" icon={<UserOutlined />}/>
      </div>
    </Card>
  );
};

export default Basic;
