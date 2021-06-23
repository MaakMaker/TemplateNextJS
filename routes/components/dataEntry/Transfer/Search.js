import React from "react";
import {Card, Transfer} from "antd";

class Search extends React.Component {
  state = {
    mockData: [],
    targetKeys: [],
  };
  getMock = () => {
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: Math.random() * 2 > 1,
      };
      if (data.chosen) {
        targetKeys.push(data.key);
      }
      mockData.push(data);
    }
    this.setState({mockData, targetKeys});
  };
  filterOption = (inputValue, option) => {
    return option.description.indexOf(inputValue) > -1;
  };
  handleChange = (targetKeys) => {
    this.setState({targetKeys});
  };

  componentDidMount() {
    this.getMock();
  }

  render() {
    return (
      <Card className="gx-card" title="Search">
        <Transfer
          dataSource={this.state.mockData}
          showSearch
          filterOption={this.filterOption}
          targetKeys={this.state.targetKeys}
          onChange={this.handleChange}
          render={item => item.title}
        />
      </Card>
    );
  }
}

export default Search;
