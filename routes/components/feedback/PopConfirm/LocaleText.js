import React from "react";
import {Card, Popconfirm} from "antd";

const LocaleText = () => {

    return (
      <Card title="Locale Text" className="gx-card">
        <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
          <span className="gx-link">Delete</span>
        </Popconfirm>
      </Card>
    );
  }
;

export default LocaleText;
