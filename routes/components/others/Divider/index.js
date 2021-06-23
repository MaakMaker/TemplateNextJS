import React, {Component} from "react";
import {Col, Row} from "antd";

import Horizontal from "./Horizontal";
import Vertical from "./Vertical";


class Divider extends Component {

  render() {
    return (
      <Row>
        <Col span={24}>
          <Horizontal/>
        </Col>
        <Col span={24}>
          <Vertical/>
        </Col>
      </Row>
    );
  }
}


export default Divider;
