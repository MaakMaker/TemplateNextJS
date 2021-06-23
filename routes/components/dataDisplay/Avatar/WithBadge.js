import React from "react";
import {Avatar, Badge, Card} from "antd";
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";

const WithBadge = () => {
  return (
    <Card className="gx-card" title="WithBadge">
        <span className="gx-mr-4">
          <Badge count={1}><Avatar shape="square" icon={<UserOutlined />}/></Badge>
        </span>
      <span>
            <Badge dot><Avatar shape="square" icon={<UserOutlined />}/></Badge>
          </span>
    </Card>
  );
};

export default WithBadge;
