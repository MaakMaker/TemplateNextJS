import React from "react";
import {Card, Col, Row} from "antd";

import TinyBarChart from "./Components/TinyBarChart";
import StackedBarChart from "./Components/StackedBarChart";
import MixBarChart from "./Components/MixBarChart";
import CustomShapeBarChart from "./Components/CustomShapeBarChart";
import PositiveAndNegativeBarChart from "./Components/PositiveAndNegativeBarChart";
import BarChartStackedBySign from "./Components/BarChartStackedBySign";
import BiaxialBarChart from "./Components/BiaxialBarChart";
import ContainerHeader from "../../../../../app/components/ContainerHeader";
import IntlMessages from "../../../../../util/IntlMessages";

const BarChart = ({match}) => {
  return (
    <div className="gx-main-content">
      <ContainerHeader title={<IntlMessages id="sidebar.chart.bar"/>} match={match}/>

      <Row>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Tiny Bar Chart">
            <TinyBarChart/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Stacked Bar Chart">
            <StackedBarChart/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Mix Bar Chart">
            <MixBarChart/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Custom Shape Bar Chart">
            <CustomShapeBarChart/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Positive And Negative Bar Chart">
            <PositiveAndNegativeBarChart/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Bar Chart Stacked By Sign">
            <BarChartStackedBySign/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Biaxial Bar Chart">
            <BiaxialBarChart/>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default BarChart;
