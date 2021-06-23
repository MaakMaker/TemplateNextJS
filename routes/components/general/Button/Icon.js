import React from "react";
import {Button, Card} from "antd";
import { SearchOutlined } from '@ant-design/icons';

const Icon = () => {
  return (<Card className="gx-card" title="Icon">
      <Button type="primary" shape="circle" icon={<SearchOutlined />} />
      <Button type="primary" icon={<SearchOutlined />}>Search</Button>
      <Button  shape="circle" icon={<SearchOutlined />} />
      <Button  icon={<SearchOutlined />}>Search</Button>
      <br/>
      <Button shape="circle" icon={<SearchOutlined />}/>
      <Button icon={<SearchOutlined />}>Search</Button>
      <Button type="dashed" shape="circle" icon={<SearchOutlined />}/>
      <Button type="dashed" icon={<SearchOutlined />}>Search</Button>
    </Card>
  );
};

export default Icon;
