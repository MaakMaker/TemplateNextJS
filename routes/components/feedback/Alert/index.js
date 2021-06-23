import React from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import MoreType from "./MoreType";
import Closeable from "./Closeable";
import Description from "./Description";
import Icon from "./Icon";
import SmoothlyUnmount from "./SmoothlyUnmount";
import Banner from "./Banner";


const Alert = () => {
  return (
    <Row>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Basic/>
        <SmoothlyUnmount/>
        <MoreType/>
        <Icon/>
      </Col>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Description/>
        <Banner/>
        <Closeable/>
      </Col>
    </Row>
  );
};

export default Alert;
