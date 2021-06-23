import React from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import WithIcon from "./WithIcon";
import ConfiguringSeparator from "./ConfiguringSeparator";


const Breadcrumb = () => {
  return (
    <Row>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Basic/>
        <WithIcon/>
      </Col>
      <Col lg={12} md={12} sm={24} xs={24}>
        <ConfiguringSeparator/>
      </Col>
    </Row>
  );
};
export default Breadcrumb;
