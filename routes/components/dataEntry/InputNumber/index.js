import React, {Component} from "react";

import {Col, Row} from "antd";

import Basic from "./Basic";
import Size from "./Size";
import Formatter from "./Formatter";
import Decimal from "./Decimal";
import Disabled from "./Disabled";


class InputNumber extends Component {

  render() {
    return (
      <Row>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Basic/>
          <Size/>
          <Formatter/>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Decimal/>
          <Disabled/>
        </Col>
      </Row>
    );
  }

}


export default InputNumber;
