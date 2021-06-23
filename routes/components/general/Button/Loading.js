import React, {Component} from "react";
import {Button, Card} from "antd";
import {PoweroffOutlined } from "@ant-design/icons";

class Loading extends Component {
  state = {
    loading: false,
    iconLoading: false,
  };

  enterLoading = () => {
    this.setState({loading: true});
  };

  enterIconLoading = () => {
    this.setState({iconLoading: true});
  };

  render() {
    return (
      <Card className="gx-card" title="Loading">
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="primary" size="small" loading>
          Loading
        </Button>
        <br/>
        <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
          Click me!
        </Button>
        <Button type="primary" icon={<PoweroffOutlined />} loading={this.state.iconLoading} onClick={this.enterIconLoading}>
          Click me!
        </Button>
        <br/>
        <Button shape="circle" loading/>
        <Button type="primary" shape="circle" loading/>
      </Card>
    );
  }
}

export default Loading;
