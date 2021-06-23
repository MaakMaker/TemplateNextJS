import React, {Component} from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import MultipleSelection from "./MultipleSelection";
import GenerateTreeData from "./GenerateTreeData";
import Checkable from "./Checkable";


class TreeSelect extends Component {


  render() {
    return (
      <Row>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Basic/>
          <MultipleSelection/>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <GenerateTreeData/>
          <Checkable/>
        </Col>
      </Row>
    );
  }
}


export default TreeSelect;
