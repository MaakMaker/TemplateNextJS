import React from "react";
import CKEditor from "react-ckeditor-component";
import {Card} from "antd";
import IntlMessages from "../../../../util/IntlMessages";
import "../index.css";

class CK extends React.Component {
  constructor(props) {
    super(props);
    this.updateContent = this.updateContent.bind(this);
    this.state = {
      content: '<h2>Awesome Rich Content</h2>\n' +
      '<p>Suspendisse id sollicitudin dui. <strong>Vestibulum eu sapien pharetra,</strong> bibendum ligula id, ullamcorper ligula.</p>\n' +
      '\n' +
      '<ul>\n' +
      '        <li>ullamcorper ligula</li>\n' +
      '        <li>Duis vel neque</li>\n' +
      '</ul>\n' +
      '\n' +
      '<p><em>Sed feugiat hendrerit risus, quis efficitur massa facilisis vitae. Aliquam erat volutpat. </em></p>\n',
    }
  }

  updateContent(newContent) {
    this.setState({
      content: newContent
    })
  }

  onChange(evt) {
    const newContent = evt.editor.getData();
    this.setState({
      content: newContent
    })
  }

  onBlur(evt) {
    console.log('onBlur event called with event info: ', evt);
  }

  afterPaste(evt) {
    console.log('afterPaste event called with event info: ', evt);
  }

  render() {
    return (
      <Card className="gx-card" title={<IntlMessages id="sidebar.editors.CKEditor"/>}>
        <CKEditor
          activeClass="p10"
          content={this.state.content}
          events={{
            'blur': this.onBlur.bind(this),
            'afterPaste': this.afterPaste.bind(this),
            'change': this.onChange.bind(this)
          }}
        />
      </Card>
    )
  }
}


export default CK;
