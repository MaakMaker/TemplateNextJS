import React from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
 import HorizontalLoginForm from "./HorizontalLoginForm";
 import Registration from "./Registration";
 import AdvancedSearch from "./AdvancedSearch";
 import DynamicFormItem from "./DynamicFormItem";
 import TimeRelatedControls from "./TimeRelatedControls";
 import CustomizedFormControls from "./CustomizedFormControls";
 import StoreFormData from "./StoreFormData";
 import CustomizedValidation from "./CustomizedValidation";
 import CoordinatedControls from "./CoordinatedControls";
 import FormLayout from "./FormLayout";
 import DynamicRules from "./DynamicRules";
 import OtherFormControls from "./OtherFormControls";

const Form = () => {

  return (
    <Row>
      <Col span={24}>
        <Basic/>
      </Col>
      <Col span={24}>
        <HorizontalLoginForm/>
      </Col>
      <Col span={24}>
        <Registration/>
      </Col>
      <Col span={24}>
        <AdvancedSearch/>
      </Col>
      <Col span={24}>
        <DynamicFormItem/>
      </Col>
      <Col span={24}>
        <TimeRelatedControls/>
      </Col>
      <Col span={24}>
        <CustomizedFormControls/>
      </Col>
      <Col span={24}>
        <StoreFormData/>
      </Col>
      <Col span={24}>
        <CustomizedValidation/>
      </Col>
      <Col span={24}>
        <CoordinatedControls/>
      </Col>
      <Col span={24}>
        <FormLayout/>
      </Col>
      <Col span={24}>
        <DynamicRules/>
      </Col>
      <Col span={24}>
        <OtherFormControls/>
      </Col>
    </Row>
  );
};

export default (Form);
