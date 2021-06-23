import React from "react";
import {Card, TimePicker} from "antd";

class Basic extends React.Component {
  state = {
    value: null,
  };

  onChange = (time) => {
    console.log(time);
    this.setState({value: time});
  };

  render() {
    return <Card className="gx-card" title="Basic"><TimePicker value={this.state.value}
                                                               onChange={this.onChange}/></Card>;
  }
}

export default Basic;
