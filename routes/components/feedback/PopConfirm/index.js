import React, {Component} from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import LocaleText from "./LocaleText";
import Placement from "./Placement";
import ConditionalTrigger from "./ConditionalTrigger";


class Popconfirm extends Component {

  render() {
    return (
      <Row>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Basic/>
          <LocaleText/>
          <ConditionalTrigger/>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Placement/>
        </Col>
      </Row>
    );
  }
}


export default Popconfirm;
