import React, {Component} from "react";
import {AutoComplete, Card, Input} from "antd";

const {TextArea} = Input;

function onSelect(value) {
  console.log('onSelect', value);
}


class CustomizeInputComponent extends Component {
  state = {
    dataSource: [],
  }

  handleSearch = (value) => {
    this.setState({
      dataSource: !value ? [] : [
        value,
        value + value,
        value + value + value,
      ],
    });
  }

  handleKeyPress = (ev) => {
    console.log('handleKeyPress', ev);
  }


  render() {
    const {dataSource} = this.state;
    return (
      <Card className="gx-card" title="Customize Input Component">
        <AutoComplete
          dataSource={dataSource}
          style={{width: 200}}
          onSelect={onSelect}
          onSearch={this.handleSearch}
        >
        <TextArea
          placeholder="input here"
          className="custom"
          style={{height: 50}}
          onKeyPress={this.handleKeyPress}
        />
        </AutoComplete>
      </Card>
    );
  }

}

export default CustomizeInputComponent;

