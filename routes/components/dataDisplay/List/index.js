import React from "react";
import {Col, Row} from "antd";

import SimpleList from "./SimpleList";
// import BasicList from "./BasicList";
// import Vertical from "./Vertical";
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const Lists = () => {

  return (
    <Row>
      <Col span={24}>
        <SimpleList/>
      </Col>
      <Col span={24}>
        {/*<BasicList/>*/}
      </Col>
      <Col span={24}>
        {/*<Vertical/>*/}
      </Col>
    </Row>
  );
};


export default (Lists);
