import React from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import OtherType from "./OtherType";
import Customize from "./Customize";
import Loading from "./Loading";


const Message = () => (
  <Row>
    <Col lg={12} md={12} sm={24} xs={24}>
      <Basic/>
      <OtherType/>
    </Col>
    <Col lg={12} md={12} sm={24} xs={24}>
      <Customize/>
      <Loading/>
    </Col>
  </Row>
)

export default (Message);
