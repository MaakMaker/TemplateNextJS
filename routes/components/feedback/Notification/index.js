import React, {Component} from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import Duration from "./Duration";
import WithIcon from "./WithIcon";
import CustomClose from "./CustomClose";
import CustomizeIcon from "./CustomizeIcon";
import Placement from "./Placement";
import CustomizeStyle from "./CustomizeStyle";


class Notification extends Component {

  render() {
    return (
      <Row>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Basic/>
          <Duration/>
          <WithIcon/>
          <CustomClose/>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <CustomizeIcon/>
          <Placement/>
          <CustomizeStyle/>
        </Col>
      </Row>
    );
  }
}


export default Notification;
