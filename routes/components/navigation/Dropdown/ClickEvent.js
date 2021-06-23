import React from "react";
import {Card, Dropdown, Menu, message} from "antd";
import {DownOutlined} from '@ant-design/icons';

const onClick = function ({key}) {
  message.info(`Click on item ${key}`);
};
const menu = (
  <Menu onClick={onClick}>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd memu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);
const ClickEvent = () => {
  return (
    <Card className="gx-card" title="Click Event">
      <Dropdown overlay={menu}>
        <span className="gx-link ant-dropdown-link">
          Hover me, Click menu item <DownOutlined/>
        </span>
      </Dropdown>
    </Card>
  );
};

export default ClickEvent;
