import React from "react";
import {Alert, Card, Spin, Switch} from "antd";

class Embedded extends React.Component {
  state = {loading: false};
  toggle = (value) => {
    this.setState({loading: value});
  };

  render() {
    return (
      <Card title="Embedded" className="gx-card">
        <Spin spinning={this.state.loading}>
          <Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
          />
        </Spin>
        <div className="gx-mt-3">
          Loading state：<Switch checked={this.state.loading} onChange={this.toggle}/>
        </div>
      </Card>
    );
  }
}

export default Embedded;
