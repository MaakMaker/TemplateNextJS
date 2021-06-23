import React from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import BasicControl from "./BasicControl";
import Dragable from "./Dragable";
import LoadData from "./LoadData";
import Searchable from "./Searchable";
import TreeLine from "./TreeLine";


const Tree = () => {
  return (
    <Row>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Basic/>
        <BasicControl/>
        <Dragable/>
      </Col>
      <Col lg={12} md={12} sm={24} xs={24}>
        <LoadData/>
        <Searchable/>
        <TreeLine/>
      </Col>
    </Row>
  );
};


export default Tree;
