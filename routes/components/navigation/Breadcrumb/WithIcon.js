import React from "react";
import {Breadcrumb, Card} from "antd";
import {HomeOutlined, UserOutlined} from '@ant-design/icons';

const WithIcon = () => {
  return (
    <Card className="gx-card" title="WithIcon">
      <Breadcrumb>
        <Breadcrumb.Item>
          <span className="gx-link">
          <HomeOutlined/>
          </span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <span className="gx-link">
          <UserOutlined/>
          <span className='gx-ml-2'>Application List</span>
          </span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          Application
        </Breadcrumb.Item>
      </Breadcrumb>
    </Card>
  );
};

export default WithIcon;
