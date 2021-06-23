import React from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import Accordion from "./Accordion";
import NestedPanel from "./NestedPanel";
import Borderless from "./Borderless";
import CustomPanel from "./CustomPanel";
import NoArrow from "./NoArrow";


const Collapse = () => {
  return (
    <Row>
      <Col span={24}>
        <Basic/>
      </Col>
      <Col span={24}>
        <Accordion/>
      </Col>
      <Col span={24}>
        <NestedPanel/>
      </Col>
      <Col span={24}>
        <Borderless/>
      </Col>
      <Col span={24}>
        <CustomPanel/>
      </Col>
      <Col span={24}>
        <NoArrow/>
      </Col>
    </Row>
  );
};

export default Collapse;
