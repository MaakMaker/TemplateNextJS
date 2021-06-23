import React, {Component} from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import SwitchDisabled from "./SwitchDisabled";
import SwitchTextIcon from "./SwitchTextIcon";
import SwitchSize from "./SwitchSize";
import SwitchLoading from "./SwitchLoading";


class Switches extends Component {

  render() {
    return (
      <Row>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Basic/>
          <SwitchDisabled/>
          <SwitchTextIcon/>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <SwitchSize/>
          <SwitchLoading/>
        </Col>
      </Row>
    );
  }
}


export default Switches;
