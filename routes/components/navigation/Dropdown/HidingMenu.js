import React, {Component} from "react";
import {Card, Dropdown, Menu} from "antd";
import {DownOutlined} from '@ant-design/icons';

class HidingMenu extends Component {
  state = {
    visible: false,
  };
  handleMenuClick = (e) => {
    if (e.key === '3') {
      this.setState({visible: false});
    }
  };
  handleVisibleChange = (flag) => {
    this.setState({visible: flag});
  };

  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">Clicking me will not close the menu.</Menu.Item>
        <Menu.Item key="2">Clicking me will not close the menu also.</Menu.Item>
        <Menu.Item key="3">Clicking me will close the menu</Menu.Item>
      </Menu>
    );
    return (
      <Card className="gx-card" title="Hiding Menu">
        <Dropdown overlay={menu}
                  onVisibleChange={this.handleVisibleChange}
                  visible={this.state.visible}
        >
          <span className="gx-link ant-dropdown-link">
            Hover me <DownOutlined/>
          </span>
        </Dropdown>
      </Card>
    );
  }

}


export default HidingMenu;
