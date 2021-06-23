import React from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import StandAlone from "./StandAlone";
import OverflowCount from "./OverflowCount";
import Status from "./Status";
import Dynamic from "./Dynamic";
import RedBadge from "./RedBadge";
import Clickable from "./Clickable";

const Badge = () => {
  return (
    <Row>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Basic/>
        <StandAlone/>
        <OverflowCount/>
        <Status/>
      </Col>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Dynamic/>
        <RedBadge/>
        <Clickable/>
      </Col>
    </Row>
  );
};

export default Badge;
