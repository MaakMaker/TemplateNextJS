import React, {Component} from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import HalfStar from "./HalfStar";
import ShowCopywrite from "./ShowCopywrite";
import ReadOnly from "./ReadOnly";
import ClearStar from "./ClearStar";
import OtherCharactor from "./OtherCharactor";


class Rate extends Component {


  render() {
    return (
      <Row>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Basic/>
          <HalfStar/>
          <OtherCharactor/>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <ReadOnly/>
          <ClearStar/>
          <ShowCopywrite/>
        </Col>
      </Row>
    );
  }

}


export default Rate;
