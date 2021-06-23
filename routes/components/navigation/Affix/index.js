import React from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import Callback from "./Callback";
import ContainerToScroll from "./ContainerToScroll";


const Affix = () => {
  return (
    <Row>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Basic/>
        <Callback/>
      </Col>

      <Col lg={12} md={12} sm={24} xs={24}>
        <ContainerToScroll/>
      </Col>
    </Row>
  );
};

export default Affix;
