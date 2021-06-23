import React from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import Static from "./Static";


const Anchor = () => {
  return (
    <Row>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Basic/>
      </Col>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Static/>
      </Col>
    </Row>
  );
};

export default Anchor;
