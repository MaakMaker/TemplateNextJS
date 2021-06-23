import React from "react";
import {Card, Switch} from "antd";
import Icon from '@ant-design/icons';

const SwitchTextIcon = () => {
  return (
    <Card className="gx-card" title="Switch Text Icon">
      <div className="gx-mb-3"><Switch checkedChildren="open" unCheckedChildren="turn off" defaultChecked/></div>
      <div className="gx-mb-3"><Switch checkedChildren="1" unCheckedChildren="0"/></div>
      <div className="gx-mb-0"><Switch checkedChildren={<Icon type="check"/>} unCheckedChildren={<Icon type="cross"/>}
                                       defaultChecked/></div>
    </Card>
  );
};

export default SwitchTextIcon;
