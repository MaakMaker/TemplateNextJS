import React from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import Trigger from "./Trigger";
import Placement from "./Placement";
import Control from "./Control";
import ArrowPoint from "./ArrowPoint";


const Popover = () => {

  return (
    <Row>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Basic/>
        <Trigger/>
        <Placement/>
      </Col>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Control/>
        <ArrowPoint/>
      </Col>
    </Row>
  );
};


export default (Popover);
