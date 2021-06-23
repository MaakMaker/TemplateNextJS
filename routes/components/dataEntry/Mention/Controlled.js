import React from "react";
import {Card} from "antd";
import { Mention } from '@ant-design/compatible';

const {toContentState} = Mention;

class Controlled extends React.Component {
  state = {
    value: toContentState('@afc163'),
  };
  handleChange = (editorState) => {
    this.setState({
      value: editorState,
    });
  };

  componentDidMount() {
    this.mention.focus();
  }

  render() {
    return (
      <Card className="gx-card" title="Controlled">
        <Mention
          ref={ele => this.mention = ele}
          suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
          value={this.state.value}
          onChange={this.handleChange}
        />
      </Card>
    );
  }
}


export default Controlled;
