import React, {Component} from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import TimePickerSize from "./TimePickerSize";
import Disabled from "./Disabled";
import IntervalOption from "./IntervalOption";
import Addon from "./Addon";
import Hour from "./Hour";
import HourMinute from "./HourMinute";


class TimePicker extends Component {

  render() {
    return (
      <Row>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Basic/>
          <TimePickerSize/>
          <Disabled/>
          <IntervalOption/>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Addon/>
          <Hour/>
          <HourMinute/>
        </Col>
      </Row>
    );
  }
}


export default TimePicker;
