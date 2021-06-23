import React from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import Changer from "./Changer";
import More from "./More";
import Jumper from "./Jumper";
import MiniSize from "./MiniSize";
import SimpleMode from "./SimpleMode";
import Controlled from "./Controlled";
import TotalNumber from "./TotalNumber";
import PrevAndNext from "./PrevAndNext";

const Pagination = () => (
  <Row>
    <Col lg={12} md={12} sm={24} xs={24}>
      <Basic/>
      <More/>
      <Changer/>
      <Jumper/>
      <MiniSize/>
    </Col>
    <Col lg={12} md={12} sm={24} xs={24}>
      <SimpleMode/>
          <Controlled/>
          <TotalNumber/>
          <PrevAndNext/>
        </Col>
      </Row>
)


export default Pagination;
