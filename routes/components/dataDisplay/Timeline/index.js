import React from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import Color from "./Color";
import LastNode from "./LastNode";
import Custom from "./Custom";


const TimeLine = () => {
  return (
    <Row>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Basic/>
        <Color/>
      </Col>
      <Col lg={12} md={12} sm={24} xs={24}>
        <LastNode/>
        <Custom/>
      </Col>
    </Row>
  );
};


export default TimeLine;
