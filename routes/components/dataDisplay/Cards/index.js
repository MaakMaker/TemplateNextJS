import React from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import NoBorder from "./NoBorder";
import Simple from "./Simple";
import Customize from "./Customize";
import Column from "./Column";
import LoadingCard from "./LoadingCard";
import Grid from "./Grid";
import InnerCard from "./InnerCard";
import WithTabs from "./WithTabs";
import SupportMore from "./SupportMore";


const Cards = () => {
  return (
    <div className="gx-main-content">
      <Row>
        <Col xl={8} lg={12} md={12} sm={24} xs={24}>
          <Basic/>
        </Col>
        <Col xl={8} lg={12} md={12} sm={24} xs={24}>
          <Customize/>
        </Col>
        <Col xl={8} lg={12} md={12} sm={24} xs={24}>
          <Simple/>
        </Col>
        <Col xl={8} lg={12} md={12} sm={24} xs={24}>
          <SupportMore/>
        </Col>
        <Col xl={16} lg={24} md={24} sm={24} xs={24}>
          <LoadingCard/>
        </Col>
      </Row>

      <div className="gx-bg-grey gx-mb-30 gx-px-5 gx-pt-5">
        <Row>
          <Col xl={12} lg={24} md={24} sm={24} xs={24}>
            <NoBorder/>
          </Col>
          <Col xl={12} lg={24} md={24} sm={24} xs={24}>
            <Column/>
          </Col>
        </Row>
      </div>

      <Row>
        <Col span={24}>
          <Grid/>
        </Col>

        <Col span={24}>
          <InnerCard/>
        </Col>
      </Row>
      <WithTabs/>
    </div>
  );
};

export default Cards;
