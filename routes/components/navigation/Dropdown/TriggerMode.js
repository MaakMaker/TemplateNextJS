import React from "react";
import {Card, Dropdown, Menu} from "antd";
import {DownOutlined} from '@ant-design/icons';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider/>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

const TriggerMode = () => {
  return (
    <Card className="gx-card" title="Trigger Mode">
      <Dropdown overlay={menu} trigger={['click']}>
        <span className="gx-link ant-dropdown-link">
          Click me <DownOutlined/>
        </span>
      </Dropdown>
    </Card>
  );
};

export default TriggerMode;
