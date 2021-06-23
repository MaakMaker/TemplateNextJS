import React from "react";
import {Card} from "antd";
import { Mention } from '@ant-design/compatible';

const users = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];


class AsynchronousLoading extends React.Component {
  state = {
    suggestions: [],
    loading: false,
  };
  fetchSuggestions = (value, callback) => {
    setTimeout(() => {
      callback(users.filter(item => item.indexOf(value) !== -1));
    }, 500);
  };

  onSearchChange = (value) => {
    this.fetchSuggestions(value, (suggestions) => {
      this.setState({
        suggestions,
        loading: false,
      });
    });
    this.setState({
      loading: true,
    });
  };

  render() {
    const {suggestions, loading} = this.state;
    return (
      <Card className="gx-card" title="Asynchronous Loading">
        <Mention
          style={{width: '100%'}}
          loading={loading}
          suggestions={suggestions}
          onSearchChange={this.onSearchChange}
        />
      </Card>
    );
  }
}

export default AsynchronousLoading;
