import React, {Component} from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import CircularBar from "./CircularBar";
import MiniSizeBar from "./MiniSizeBar";
import MiniSizeCircularBar from "./MiniSizeCircularBar";
import DynamicCircularBar from "./DynamicCircularBar";
import DynamicBar from "./DynamicBar";
import CustomTextBar from "./CustomTextBar";
import DashboardBar from "./DashboardBar";
import SuccessSegment from "./SuccessSegment";


class Progress extends Component {
  render() {
    return (
      <Row>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Basic/>
          <CircularBar/>
          <MiniSizeBar/>
          <MiniSizeCircularBar/>
          <DynamicCircularBar/>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <DynamicBar/>
          <CustomTextBar/>
          <DashboardBar/>
          <SuccessSegment/>
        </Col>
      </Row>
    );
  }
}


export default Progress;
