import React from "react";
import {Card, List,Divider,Typography } from "antd";

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const SimpleList = () => {
  return (
    <>
      <h5 className="gx-mb-3">Default Size</h5>
      {/*<List className="gx-mb-4"*/}
      {/*      header={<div>Header</div>}*/}
      {/*      footer={<div>Footer</div>}*/}
      {/*      bordered*/}
      {/*      dataSource={data}*/}
      {/*      renderItem={item => (*/}
      {/*        <List.Item>*/}
      {/*          <Typography.Text mark>[ITEM]</Typography.Text> {item}*/}
      {/*        </List.Item>*/}
      {/*      )}*/}
      {/*/>*/}
      {/*<h5 className="gx-mb-3">Small Size</h5>*/}
      {/*<List className="gx-mb-4"*/}
      {/*      size="small"*/}
      {/*      header={<div>Header</div>}*/}
      {/*      footer={<div>Footer</div>}*/}
      {/*      bordered*/}
      {/*      dataSource={data}*/}
      {/*      renderItem={item => (<List.Item>{item}</List.Item>)}*/}
      {/*/>*/}
      {/*<h5 className="gx-mb-3">Large Size</h5>*/}
      {/*<List className="gx-mb-0"*/}
      {/*      size="large"*/}
      {/*      header={<div>Header</div>}*/}
      {/*      footer={<div>Footer</div>}*/}
      {/*      bordered*/}
      {/*      dataSource={data}*/}
      {/*      renderItem={item => (<List.Item>{item}</List.Item>)}*/}
      {/*/>*/}
    </>
  );
};

export default SimpleList;
