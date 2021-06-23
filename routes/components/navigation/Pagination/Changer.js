import React from "react";
import {Card, Pagination} from "antd";

const Changer = () => {
  function onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
  }

  return (
    <Card className="gx-card" title="Changer Pagination">
      <Pagination showSizeChanger onShowSizeChange={onShowSizeChange} defaultCurrent={3} total={500}/>
    </Card>
  );
};

export default Changer;
