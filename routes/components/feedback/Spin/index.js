import React from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import Size from "./Size";
import Container from "./Container";
import Customize from "./Customize";
import Embedded from "./Embedded";
import Custom from "./Custom";


const Spin = () => (
  <Row>
    <Col lg={12} md={12} sm={24} xs={24}>
      <Basic/>
      <Size/>
      <Container/>
    </Col>
    <Col lg={12} md={12} sm={24} xs={24}>
      <Customize/>
      <Embedded/>
      <Custom/>
        </Col>
      </Row>
)
export default Spin;
