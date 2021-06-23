import React, {Component} from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import Disabled from "./Disabled";
import HorizontalRadio from "./HorizontalRadio";
import VerticalRadio from "./VerticalRadio";
import OptionalRadio from "./OptionalRadio";
import StyleRadio from "./StyleRadio";
import SizeRadio from "./SizeRadio";


class Radio extends Component {

  render() {
    return (
      <Row>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Basic/>
          <Disabled/>
          <HorizontalRadio/>
          <VerticalRadio/>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <OptionalRadio/>
          <StyleRadio/>
          <SizeRadio/>
        </Col>
      </Row>
    );
  }

}


export default Radio;
