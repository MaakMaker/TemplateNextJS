import React from "react";
import {Card, Dropdown, Menu} from "antd";
import {DownOutlined} from '@ant-design/icons';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider/>
    <Menu.Item key="3" disabled>3rd menu item（disabled）</Menu.Item>
  </Menu>
);

const OtherElements = () => {
  return (
    <Card className="gx-card" title="Other Elements">
      <Dropdown overlay={menu}>
        <span className="gx-link ant-dropdown-link">
          Hover me <DownOutlined/>
        </span>
      </Dropdown>
    </Card>
  );
};

export default OtherElements;
