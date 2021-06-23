import React from "react";
import {Button, Card, Radio} from "antd";


class Disabled extends React.Component {
  state = {
    disabled: true,
  };
  toggleDisabled = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  };

  render() {
    return (
      <Card className="gx-card" title="Disabled">
        <div className="gx-mb-1"><Radio defaultChecked={false} disabled={this.state.disabled}>Disabled</Radio></div>
        <div className="gx-mb-1"><Radio defaultChecked disabled={this.state.disabled}>Disabled</Radio></div>
        <div className="gx-mt-3">
          <Button type="primary" onClick={this.toggleDisabled}>
            Toggle disabled
          </Button>
        </div>
      </Card>
    );
  }
}

export default Disabled;
