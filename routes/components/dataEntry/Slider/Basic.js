import React from "react";
import {Card, Slider, Switch} from "antd";

class Basic extends React.Component {
  state = {
    disabled: false,
  };
  handleDisabledChange = (disabled) => {
    this.setState({disabled});
  };

  render() {
    const {disabled} = this.state;
    return (
      <Card className="gx-card" title="Basic">
        <Slider defaultValue={30} disabled={disabled}/>
        <Slider range defaultValue={[20, 50]} disabled={disabled}/>
        Disabled: <Switch className="gx-ml-1" size="small" checked={disabled} onChange={this.handleDisabledChange}/>
      </Card>
    );
  }
}

export default Basic;
