import React, {Component} from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import Search from "./Search";
import Advance from "./Advance";
import CustomData from "./CustomData";


class Transfer extends Component {
  render() {
    return (
      <Row>
        <Col lg={24} md={24} sm={24} xs={24}>
          <Advance/>
        </Col>
        <Col lg={24} md={24} sm={24} xs={24}>
          <CustomData/>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Basic/>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Search/>
        </Col>
      </Row>
    );
  }
}


export default Transfer;
