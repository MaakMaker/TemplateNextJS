import React from "react";
import {Card, Col, Row} from "antd";

import SimpleAreaChart from "./Components/SimpleAreaChart";
import StackedAreaChart from "./Components/StackedAreaChart";
import PercentAreaChart from "./Components/PercentAreaChart";
import AreaChartConnectNulls from "./Components/AreaChartConnectNulls";
import SynchronizedAreaChart from "./Components/SynchronizedAreaChart";
import ContainerHeader from "../../../../../app/components/ContainerHeader";
import IntlMessages from "../../../../../util/IntlMessages";

const AreaChart = ({match}) => {
  return (
    <div className="gx-main-content">
      <ContainerHeader title={<IntlMessages id="sidebar.chart.area"/>} match={match}/>
      <Row>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Simple Area Chart">
            <SimpleAreaChart/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Stacked Area Chart">
            <StackedAreaChart/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="AreaChart Connect Nulls">
            <AreaChartConnectNulls/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Synchronized Area Chart">
            <SynchronizedAreaChart/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Percent Area Chart">
            <PercentAreaChart/>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AreaChart;

