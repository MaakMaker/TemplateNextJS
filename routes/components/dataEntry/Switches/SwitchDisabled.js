import React from "react";
import {Button, Card, Switch} from "antd";

class SwitchDisabled extends React.Component {
  state = {
    disabled: true,
  };
  toggle = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  };

  render() {
    return (
      <Card className="gx-card" title="SwitchDisabled">
        <div className="gx-mb-3"><Switch disabled={this.state.disabled} defaultChecked/></div>
        <div className="gx-mb-0"><Button type="primary" onClick={this.toggle}>Toggle disabled</Button></div>
      </Card>
    );
  }
}

export default SwitchDisabled;
