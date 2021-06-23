import React, {Component} from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import SliderWithIcon from "./SliderWithIcon";
import SliderWithNumber from "./SliderWithNumber";
import SliderWithDecimal from "./SliderWithDecimal";
import SliderCustomize from "./SliderCustomize";
import SliderEvent from "./SliderEvent";
import SliderGarduated from "./SliderGarduated";
import VerticalSlider from "./VerticalSlider";


class Slider extends Component {

  render() {
    return (
      <Row>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Basic/>
          <SliderWithIcon/>
          <SliderWithNumber/>
          <VerticalSlider/>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <SliderCustomize/>
          <SliderEvent/>
          <SliderWithDecimal/>
          <SliderGarduated/>
        </Col>
      </Row>
    );
  }
}


export default (Slider);
