import React from "react";
import {Card, Rate} from "antd";

class Rater extends React.Component {
  state = {
    value: 3,
  };
  handleChange = (value) => {
    this.setState({value});
  };

  render() {
    const {value} = this.state;
    return (

      <Card className="gx-card" title="Rater">
        <Rate onChange={this.handleChange} value={value}/>
        {value && <span className="ant-rate-text">{value} stars</span>}
      </Card>
    );
  }
}

export default Rater;
