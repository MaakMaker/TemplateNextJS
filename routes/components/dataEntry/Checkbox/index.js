import React from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import Disabled from "./Disabled";
import ControlledCheckbox from "./ControlledCheckbox";
import CheckboxGroups from "./CheckboxGroups";
import UseWithGrid from "./UseWithGrid";
import CheckAll from "./CheckAll";

const Checkbox = () => {
  return (
    <Row>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Basic/>
        <CheckboxGroups/>
        <ControlledCheckbox/>
      </Col>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Disabled/>
        <UseWithGrid/>
        <CheckAll/>
      </Col>
    </Row>
  );
};

export default Checkbox;
