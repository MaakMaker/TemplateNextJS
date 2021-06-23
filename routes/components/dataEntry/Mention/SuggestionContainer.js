import React from "react";
import {Button, Card, Popover} from "antd";
import { Mention } from '@ant-design/compatible';

const {toString, toContentState} = Mention;

function onChange(editorState) {
  console.log(toString(editorState));
}

function onSelect(suggestion) {
  console.log('onSelect', suggestion);
}

class SuggestionContainer extends React.Component {
  getSuggestionContainer = () => {
    return this.popover.getPopupDomNode();
  };
  visibleChange = (visible) => {
    if (visible && this.mention) {
      this.mention.focus();
    }
  };

  render() {
    const mention = (
      <Mention
        ref={ele => this.mention = ele}
        style={{width: '100%'}}
        onChange={onChange}
        defaultValue={toContentState('@afc163')}
        suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
        onSelect={onSelect}
        getSuggestionContainer={this.getSuggestionContainer}
      />
    );
    return (
      <Card className="gx-card" title="Suggestion Container">
        <Popover
          trigger="click"
          content={mention}
          title="Title"
          ref={popover => this.popover = popover}
          onVisibleChange={this.visibleChange}
        >
          <Button type="primary">Click Me</Button>
        </Popover>
      </Card>
    );
  }
}

export default SuggestionContainer;
