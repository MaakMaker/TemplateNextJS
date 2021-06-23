import React, {Component} from "react";
import {Button, Card, Radio} from "antd";
import { DownloadOutlined } from '@ant-design/icons';
import LeftOutlined from "@ant-design/icons/lib/icons/LeftOutlined";
import RightOutlined from "@ant-design/icons/lib/icons/RightOutlined";

class Size extends Component {
  state = {
    size: 'large',
  };

  handleSizeChange = (e) => {
    this.setState({size: e.target.value});
  };

  render() {
    const size = this.state.size;
    return (
      <Card className="gx-card" title="Size">
        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br/><br/>
        <Button type="primary" size={size}>Primary</Button>
        <Button size={size}>Normal</Button>
        <Button type="dashed" size={size}>Dashed</Button>
        <Button type="danger" size={size}>Danger</Button>
        <br/>
        <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size}/>
        <Button type="primary" icon={<DownloadOutlined />} size={size}>Download</Button>
        <br/>
        <Button.Group size={size}>
          <Button type="primary">
            <LeftOutlined />Backward
          </Button>
          <Button type="primary">
            Forward<RightOutlined />
          </Button>
        </Button.Group>
      </Card>
    );
  }
}


export default Size;
