import React from "react";
import {Card, Dropdown, Menu} from "antd";

const menu = (
  <Menu>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

const ContextMenu = () => {
  return (
    <Card className="gx-card" title="Context Menu">
      <Dropdown overlay={menu} trigger={['contextMenu']}>
        <span style={{userSelect: 'none'}}>Right Click on Me</span>
      </Dropdown>
    </Card>
  );
};

export default ContextMenu;

