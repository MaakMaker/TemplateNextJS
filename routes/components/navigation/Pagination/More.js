import React from "react";
import {Card, Pagination} from "antd";

const More = () => {
  return (
    <Card className="gx-card" title="More Pagination">
      <Pagination defaultCurrent={6} total={500}/>
    </Card>
  );
};

export default More;
