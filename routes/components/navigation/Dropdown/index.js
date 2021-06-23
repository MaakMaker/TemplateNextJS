import React from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import Placement from "./Placement";
import OtherElements from "./OtherElements";
import TriggerMode from "./TriggerMode";
import ClickEvent from "./ClickEvent";
import ButtonWithDropdown from "./ButtonWithDropdown";
import CascadingMenu from "./CascadingMenu";
import HidingMenu from "./HidingMenu";
import ContextMenu from "./ContextMenu";


const Dropdown = () => (
  <Row>
    <Col lg={12} md={12} sm={24} xs={24}>
      <Basic/>
      <Placement/>
      <OtherElements/>
      <TriggerMode/>
      <ClickEvent/>
    </Col>
    <Col lg={12} md={12} sm={24} xs={24}>
      <ButtonWithDropdown/>
      <CascadingMenu/>
      <HidingMenu/>
      <ContextMenu/>
    </Col>
  </Row>
)


export default Dropdown;
