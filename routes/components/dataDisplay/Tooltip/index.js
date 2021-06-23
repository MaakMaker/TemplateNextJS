import React, {Component} from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import Placement from "./Placement";
import ArrowPoint from "./ArrowPoint";


class Tooltip extends Component {

  render() {
    return (
      <Row>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Basic/>
          <Placement/>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <ArrowPoint/>
        </Col>
      </Row>
    );
  }
}


export default (Tooltip);
