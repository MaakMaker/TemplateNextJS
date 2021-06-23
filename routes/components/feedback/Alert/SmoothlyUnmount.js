import React from "react";
import {Alert, Card} from "antd";

class SmoothlyUnmount extends React.Component {
  state = {
    visiable: true,
  };
  handleClose = () => {
    this.setState({visiable: false});
  };

  render() {
    return (
      <Card title="Smoothly Unmount" className="gx-card">
        {
          this.state.visiable ? (
            <Alert
              message="Alert Message Text"
              type="success"
              closable
              afterClose={this.handleClose}
            />
          ) : null
        }
        <p>placeholder text here</p>
      </Card>
    );
  }
}

export default SmoothlyUnmount;
