import React from "react";
import {Card, Input, Select} from "antd";
import Icon from '@ant-design/icons';

const Option = Select.Option;

const selectBefore = (
  <Select defaultValue="Http://" style={{width: 90}}>
    <Option value="Http://">Http://</Option>
    <Option value="Https://">Https://</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue=".com" style={{width: 80}}>
    <Option value=".com">.com</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
);

const PostTab = () => {
  return (
    <Card className="gx-card" title="Post Tab">
      <div className="gx-mb-3">
        <Input addonBefore="Http://" addonAfter=".com" defaultValue="mysite"/>
      </div>
      <div className="gx-mb-3">
        <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite"/>
      </div>
      <div className="gx-mb-3">
        <Input addonAfter={<Icon type="setting"/>} defaultValue="mysite"/>
      </div>
    </Card>
  );
};

export default PostTab;
