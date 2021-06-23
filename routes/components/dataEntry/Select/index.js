import React, {Component} from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import SeclectSize from "./SelectSize";
import SearchField from "./SearchField";
import SelectTag from "./SelectTag";
import SelectMultiple from "./SelectMultiple";
import SelectOption from "./SelectOption";
import SelectCoordinate from "./SelectCoordinate";
import WithValue from "./WithValue";
import AutomaticCompletion from "./AutomaticCompletion";


class Select extends Component {

  render() {
    return (
      <Row>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Basic/>
          <SearchField/>
          <SelectTag/>
          <SelectMultiple/>
          <SelectOption/>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <SelectCoordinate/>
          <WithValue/>
          <AutomaticCompletion/>
          <SeclectSize/>
        </Col>
      </Row>
    );
  }

}


export default Select;
