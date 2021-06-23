import React from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import Icon from "./Icon";
import Size from "./Size";
import Disabled from "./Disabled";
import Loading from "./Loading";
import ButtonGroups from "./ButtonGroups";
import GhostButton from "./GhostButton";
import Multiple from "./Multiple";


const Button = () => {
  return (
    <Row>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Basic/>
        <Loading/>
        <Size/>
        <Disabled/>
      </Col>

      <Col lg={12} md={12} sm={24} xs={24}>
        <Icon/>
        <Multiple/>
        <ButtonGroups/>
        <GhostButton/>
      </Col>
    </Row>
  );
};
export default Button;
