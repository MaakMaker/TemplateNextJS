import React from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import ThreeSizesOfInput from "./ThreeSizesOfInput";
import PostTab from "./PostTab";
import SearchBox from "./SearchBox";
import InputGroups from "./InputGroups";
import AutosizingTheHeight from "./AutosizingTheHeight";
import TextArea from "./TextAreas";
import FormatTooltipInput from "./FormatTooltipInput";


const Input = () => {

  return (
    <Row>
      <Col lg={24} md={24} sm={24} xs={24}>
        <InputGroups/>
      </Col>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Basic/>
        <ThreeSizesOfInput/>
        <PostTab/>
        <SearchBox/>
      </Col>
      <Col lg={12} md={12} sm={24} xs={24}>
        <AutosizingTheHeight/>
        <TextArea/>
        <FormatTooltipInput/>
      </Col>
    </Row>
  );
};

export default (Input);
