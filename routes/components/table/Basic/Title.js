import React from "react";
import {Card, Table} from "antd";

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  render: text => <span className="gx-link">{text}</span>,
}, {
  title: 'Cash Assets',
  className: 'column-money',
  dataIndex: 'money',
}, {
  title: 'Address',
  dataIndex: 'address',
}];

const data = [{
  key: '1',
  name: 'John Brown',
  money: '￥300,000.00',
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  money: '￥1,256,000.00',
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  money: '￥120,000.00',
  address: 'Sidney No. 1 Lake Park',
}];

const Title = () => {
  return (
    <Card title="Title Table">
      <Table className="gx-table-responsive"
             columns={columns}
             dataSource={data}
             bordered
             title={() => 'Header'}
             footer={() => 'Footer'}
      />
    </Card>
  );
};

export default Title;
