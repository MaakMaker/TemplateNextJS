import React from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import Asynchronously from "./Asynchronously";
import CutomizeFooter from "./CutomizeFooter";
import ConfirmationModal from "./ConfirmationModal";
import Position from "./Position";
import Information from "./Information";
import Manual from "./Manual";


const Modal = () => (
  <Row>
    <Col lg={12} md={12} sm={24} xs={24}>
      <Basic/>
      <Asynchronously/>
      <CutomizeFooter/>
      <ConfirmationModal/>
    </Col>
    <Col lg={12} md={12} sm={24} xs={24}>
      <Information/>
      <Manual/>
      <Position/>
    </Col>
  </Row>
)


export default (Modal);
