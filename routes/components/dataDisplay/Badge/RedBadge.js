import React from "react";
import {Badge, Card} from "antd";
import NotificationOutlined from "@ant-design/icons/lib/icons/NotificationOutlined";

const RedBadge = () => {
  return (
    <Card className="gx-card" title="Red Badge">
      <Badge dot>
        <NotificationOutlined/>
      </Badge>
      <Badge count={0} dot>
        <NotificationOutlined/>
      </Badge>
      <Badge dot>
        <a href="/">Link something</a>
      </Badge>
    </Card>
  );
};

export default RedBadge;
