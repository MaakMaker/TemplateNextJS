import React, {Component} from "react";

import {AutoComplete, Card} from "antd";

const Option = AutoComplete.Option;


class Customized extends Component {
  state = {
    result: [],
  };

  handleSearch = (value) => {
    let result;
    if (!value || value.indexOf('@') >= 0) {
      result = [];
    } else {
      result = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
    }
    this.setState({result});
  };

  render() {
    const {result} = this.state;
    const children = result.map((email) => {
      return <Option key={email}>{email}</Option>;
    });
    return (
      <Card className="gx-card" title="Customized">
        <AutoComplete
          style={{width: 200}}
          onSearch={this.handleSearch}
          placeholder="input here"
        >
          {children}
        </AutoComplete>
      </Card>
    );
  }

}


export default Customized;

