import React from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import DateFormat from "./DateFormat";
import ThreeSizes from "./ThreeSizes";
import ChooseTime from "./ChooseTime";
import Disabled from "./Disabled";
import PresettedRanges from "./PresettedRanges";
import CustomizedRangePicker from "./CustomizedRangePicker";
import ControlledPanels from "./ControlledPanels";
import ExtraFooter from "./ExtraFooter";
import CustomizedDateRendering from "./CustomizedDateRendering";


const DatePicker = () => {
  return (
    <Row>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Basic/>
        <DateFormat/>
        <ThreeSizes/>
        <ChooseTime/>
        <Disabled/>
      </Col>
      <Col lg={12} md={12} sm={24} xs={24}>
        <PresettedRanges/>
        <CustomizedRangePicker/>
        <ControlledPanels/>
        <ExtraFooter/>
        <CustomizedDateRendering/>
      </Col>
    </Row>
  );
}

export default DatePicker;
