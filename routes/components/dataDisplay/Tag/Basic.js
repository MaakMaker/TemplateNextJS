import React from "react";
import {Card, Tag} from "antd";

const Basic = () => {
  function log(e) {
    console.log(e);
  }

  const preventDefault = (e) => {
    e.preventDefault();
  };

  return (
    <Card title="Basic" className="gx-card">
      <Tag>Tag 1</Tag>
      <Tag><a href="https://github.com/ant-design/ant-design/issues/1862">Link</a></Tag>
      <Tag closable onClose={log}>Tag 2</Tag>
      <Tag closable onClose={preventDefault}>Prevent Default</Tag>
    </Card>
  );
};

export default Basic;
