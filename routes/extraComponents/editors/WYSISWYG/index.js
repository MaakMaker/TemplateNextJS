import React, {Component} from "react";
import {Card} from "antd";
import {convertToRaw, EditorState} from "draft-js";
import {Editor} from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import IntlMessages from "../../../../util/IntlMessages";
import "../index.css";

class WYSISWYG extends Component {

  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const {editorState} = this.state;
    return (

      <Card  title={<IntlMessages id="sidebar.editors.WYSISWYGEditor"/>}>
        <Editor editorStyle={{
          width: '100%',
          minHeight: 100,
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: 'lightgray'
        }}
                editorState={editorState}
                onEditorStateChange={this.onEditorStateChange}
        />
        <textarea style={{width: '100%', height: 200}}
                  disabled
                  value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        />
      </Card>
    );
  }
}

export default WYSISWYG;

