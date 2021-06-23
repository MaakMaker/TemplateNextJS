import React from "react";
import {Card, Dropdown, Menu} from "antd";
import {DownOutlined} from '@ant-design/icons';

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
    </Menu.Item>
  </Menu>
);

const Basic = () => {
  return (
    <Card className="gx-card" title="Basic">
      <Dropdown overlay={menu}>
        <span className="gx-link ant-dropdown-link">
          Hover me <DownOutlined/>
        </span>
      </Dropdown>
    </Card>
  );
};

export default Basic;
