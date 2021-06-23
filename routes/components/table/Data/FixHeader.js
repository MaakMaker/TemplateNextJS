import React from "react";
import {Card, Table} from "antd";

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  width: 150,
}, {
  title: 'Age',
  dataIndex: 'age',
  width: 150,
}, {
  title: 'Address',
  dataIndex: 'address',
}];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const FixHeader = () => {
  return (
    <Card title="Fix Header">
      <Table className="gx-table-responsive" columns={columns} dataSource={data} pagination={{pageSize: 50}}
             scroll={{y: 240}}/>
    </Card>
  );
};

export default FixHeader;
