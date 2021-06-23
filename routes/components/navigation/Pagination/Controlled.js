import React from "react";
import {Card, Pagination} from "antd";

class Controlled extends React.Component {
  state = {
    current: 3,
  };
  onChange = (page) => {
    this.setState({
      current: page,
    });
  };

  render() {
    return <Card className="gx-card" title="Controlled Pagination">
      <Pagination current={this.state.current} onChange={this.onChange} total={50}/>
    </Card>;
  }
}

export default Controlled;
