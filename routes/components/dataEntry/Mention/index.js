import React, {Component} from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import Placement from "./Placement";
import AsynchronousLoading from "./AsynchronousLoading";
import CustomizeSuggestions from "./CustomizeSuggestions";
import IconImage from "./IconImage";
import Controlled from "./Controlled";
import MultilineMode from "./MultilineMode";
import SuggestionContainer from "./SuggestionContainer";
import Disabled from "./Disabled";


class Mention extends Component {

  render() {
    return (
      <Row>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Basic/>
          <Placement/>
          <AsynchronousLoading/>
          <CustomizeSuggestions/>
          <IconImage/>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Controlled/>
          <MultilineMode/>
          <SuggestionContainer/>
          <Disabled/>
        </Col>
      </Row>
    );
  }

}


export default (Mention);
