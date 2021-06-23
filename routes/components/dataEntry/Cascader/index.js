import React from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import DefaultValue from "./DefaultValue";
import CustomTrigger from "./CustomTrigger";
import Hover from "./Hover";
import DisabledOption from "./DisabledOption";
import ChangeOnSelect from "./ChangeOnSelect";
import Size from "./Size";
import CustomRender from "./CustomRender";
import Search from "./Search";
import LoadOptions from "./LoadOptions";

const Cascader = () => {
  return (
    <Row>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Basic/>
        <DefaultValue/>
        <CustomTrigger/>
        <Hover/>
        <DisabledOption/>
        <LoadOptions/>
      </Col>
      <Col lg={12} md={12} sm={24} xs={24}>
        <ChangeOnSelect/>
        <Size/>
        <CustomRender/>
        <Search/>
      </Col>
    </Row>
  );
};

export default Cascader;
