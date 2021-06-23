import React from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import Type from "./Type";
import AutosetSize from "./AutosetSize";
import WithBadge from "./WithBadge";


const Avatar = () => {
  return (
    <Row>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Basic/>
        <Type/>
      </Col>
      <Col lg={12} md={12} sm={24} xs={24}>
        <AutosetSize/>
        <WithBadge/>
      </Col>
    </Row>
  );
};

export default Avatar;
