import React from "react";
import {Card, Col, Row} from "antd";

import LineBarAreaComposedChart from "./Components/LineBarAreaComposedChart";
import VerticalComposedChart from "./Components/VerticalComposedChart";
import SameDataComposedChart from "./Components/SameDataComposedChart";
import ComposedChartWithAxisLabels from "./Components/ComposedChartWithAxisLabels";
import ContainerHeader from "../../../../../app/components/ContainerHeader";
import IntlMessages from "../../../../../util/IntlMessages";

const ComposedChart = ({match}) => {
  return (
    <div className="gx-main-content">
      <ContainerHeader title={<IntlMessages id="sidebar.chart.bar"/>} match={match}/>

      <Row>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Line Bar Area Composed Chart">
            <LineBarAreaComposedChart/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Vertical Composed Chart">
            <VerticalComposedChart/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Same Data Composed Chart">
            <SameDataComposedChart/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Composed Chart With Axis Labels">
            <ComposedChartWithAxisLabels/>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default ComposedChart;

