import React from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import ColorTag from "./ColorTag";
import Dynamic from "./Dynamic";
import HotTag from "./HotTag";


const Tag = () => {

  return (
    <Row>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Basic/>
        <ColorTag/>
      </Col>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Dynamic/>
        <HotTag/>
      </Col>
    </Row>
  );
};


export default (Tag);
