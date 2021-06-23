import React from "react";
import {Card, Pagination} from "antd";

const TotalNumber = () => {
  return (
    <Card className="gx-card" title="Total Number Pagination">
      <Pagination
        total={85}
        showTotal={total => `Total ${total} items`}
        pageSize={20}
        defaultCurrent={1}
      />
      <br/>
      <Pagination
        total={85}
        showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
        pageSize={20}
        defaultCurrent={1}
      /></Card>
  );
};

export default TotalNumber;
