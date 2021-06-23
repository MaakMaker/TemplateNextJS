import React from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import SwitchStep from "./SwitchStep";
import MiniVersion from "./MiniVersion";
import WithIcon from "./WithIcon";
import Vertical from "./Vertical";
import VerticalVersion from "./VerticalVersion";
import ErrorStatus from "./ErrorStatus";
import DotStyle from "./DotStyle";
import CustomizedDotStyle from "./CustomizedDotStyle";

const Steps = () => {
  return (
    <Row>
      <Col span={24}>
        <Basic/>
      </Col>
      <Col span={24}>
        <MiniVersion/>
      </Col>
      <Col span={24}>
        <WithIcon/>
      </Col>
      <Col span={24}>
        <SwitchStep/>
      </Col>
      <Col span={24}>
        <Vertical/>
      </Col>
      <Col span={24}>
        <VerticalVersion/>
      </Col>
      <Col span={24}>
        <ErrorStatus/>
      </Col>
      <Col span={24}>
        <DotStyle/>
      </Col>
      <Col span={24}>
        <CustomizedDotStyle/>
      </Col>
    </Row>
  );
};

export default Steps;
