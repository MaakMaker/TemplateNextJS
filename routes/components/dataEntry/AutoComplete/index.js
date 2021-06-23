import React from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import Customized from "./Customized";
import CustomizeInputComponent from "./CustomizeInputComponent";
import NonCaseSensitiveAutoComplete from "./NonCaseSensitiveAutoComplete";
import LookupPatterns from "./LookupPatterns";

const AutoComplete = () => {
  return (
    <Row>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Basic/>
        <Customized/>
        <CustomizeInputComponent/>
      </Col>
      <Col lg={12} md={12} sm={24} xs={24}>
        <NonCaseSensitiveAutoComplete/>
        <LookupPatterns/>
      </Col>
    </Row>
  );
};

export default AutoComplete;
