import React from "react";
import {Card, Transfer} from "antd";

class CustomData extends React.Component {
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
  handleChange = (targetKeys, direction, moveKeys) => {
    console.log(targetKeys, direction, moveKeys);
    this.setState({targetKeys});
  };
  renderItem = (item) => {
    const customLabel = (
      <span className="custom-item">
        {item.title} - {item.description}
      </span>
    );

    return {
      label: customLabel, // for displayed item
      value: item.title, // for title and filter matching
    };
  };

  componentDidMount() {
    this.getMock();
  }

  render() {
    return (
      <Card className="gx-card" title="CustomData">
        <Transfer className="gx-ant-transfer-width"
                  dataSource={this.state.mockData}
                  listStyle={{
                    width: 300,
                    height: 300,
                  }}
                  targetKeys={this.state.targetKeys}
                  onChange={this.handleChange}
                  render={this.renderItem}
        />
      </Card>
    );
  }
}

export default CustomData;
