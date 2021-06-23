import React from "react";
import {Card, Col, Row} from "antd";

import AreaWithTimeBased from "./Components/AreaWithTimeBased";
import LineWithChangingColor from "./Components/LineWithChangingColor";
import StackedArea from "./Components/StackedArea";
import StackedAreaChart from "./Components/StackedAreaChart";
import ZoomableValueAxis from "./Components/ZoomableValueAxis";
import ContainerHeader from "../../../../../app/components/ContainerHeader";
import IntlMessages from "../../../../../util/IntlMessages";

const AreaChart = ({match}) => {
  return (
    <div className="gx-main-content">
      <ContainerHeader title={<IntlMessages id="sidebar.chart.area"/>} match={match}/>
      <Row>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Simple Area Chart">
            <AreaWithTimeBased/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Percent Area Chart">
            <ZoomableValueAxis/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="AreaChart Connect Nulls">
            <StackedArea/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Synchronized Area Chart">
            <StackedAreaChart/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Stacked Area Chart">
            <LineWithChangingColor/>
          </Card>
        </Col>

      </Row>
    </div>
  );
};


export default  AreaChart;
