import React from "react";
import {Card, Table} from "antd";
// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0
const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    props: {},
  };
  if (index === 4) {
    obj.props.colSpan = 0;
  }
  return obj;
};

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  render: (text, row, index) => {
    if (index < 4) {
      return <span className="gx-link">{text}</span>;
    }
    return {
      children: <span className="gx-link">{text}</span>,
      props: {
        colSpan: 5,
      },
    };
  },
}, {
  title: 'Age',
  dataIndex: 'age',
  render: renderContent,
}, {
  title: 'Home phone',
  colSpan: 2,
  dataIndex: 'tel',
  render: (value, row, index) => {
    const obj = {
      children: value,
      props: {},
    };
    if (index === 2) {
      obj.props.rowSpan = 2;
    }
    // These two are merged into above cell
    if (index === 3) {
      obj.props.rowSpan = 0;
    }
    if (index === 4) {
      obj.props.colSpan = 0;
    }
    return obj;
  },
}, {
  title: 'Phone',
  colSpan: 0,
  dataIndex: 'phone',
  render: renderContent,
}, {
  title: 'Address',
  dataIndex: 'address',
  render: renderContent,
}];

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  tel: '0571-22098909',
  phone: 18889898989,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  tel: '0571-22098333',
  phone: 18889898888,
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  tel: '0575-22098909',
  phone: 18900010002,
  address: 'Sidney No. 1 Lake Park',
}, {
  key: '4',
  name: 'Jim Red',
  age: 18,
  tel: '0575-22098909',
  phone: 18900010002,
  address: 'London No. 2 Lake Park',
}, {
  key: '5',
  name: 'Jake White',
  age: 18,
  tel: '0575-22098909',
  phone: 18900010002,
  address: 'Dublin No. 2 Lake Park',
}];

const ColRowSpan = () => {
    return (
      <Card title="ColSpan and RowSpan Table">
        <Table className="gx-table-responsive" columns={columns} dataSource={data} bordered/>
      </Card>
    );
  }
;

export default ColRowSpan;
