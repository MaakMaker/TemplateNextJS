import React from "react";
import {Card} from "antd";
import { Mention } from '@ant-design/compatible';

const {toString} = Mention;

const MultilineMode = () => {
    function onChange(editorState) {
      console.log(toString(editorState));
    }

    return (
      <Card className="gx-card" title="Multiline Mode">
        <Mention
          style={{width: '100%', height: 100}}
          onChange={onChange}
          suggestions={['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai']}
          multiLines
        />
      </Card>
    );
  }
;

export default MultilineMode;
