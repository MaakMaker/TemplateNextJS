import React from "react";
import {Card} from "antd";
import { Mention } from '@ant-design/compatible';

const {toString} = Mention;

const Placement = () => {
    function onChange(contentState) {
      console.log(toString(contentState));
    }

    function onSelect(suggestion) {
      console.log('onSelect', suggestion);
    }

    return (
      <Card className="gx-card" title="Placement">
        <Mention
          style={{width: '100%'}}
          onChange={onChange}
          suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
          onSelect={onSelect}
          placement="top"
        />
      </Card>
    );
  }
;

export default Placement;
