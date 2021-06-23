import React from "react";
import {Card, Col, Row} from "antd";

import ContainerHeader from "../../../../../app/components/ContainerHeader";
import IntlMessages from "../../../../../util/IntlMessages";
import DurationOnValueAxis from "./Components/DurationOnValueAxis";
import ReversedValueAxis from "./Components/ReversedValueAxis";
import PyramidChart from "./Components/PyramidChart";
import Funnel3DChart from "./Components/Funnel3DChart";
import FunnelChart from "./Components/FunnelChart";
import BubbleChart from "./Components/BubbleChart";
import XyChartWithDateBasedAxis from "./Components/XyChartWithDateBasedAxis";
import XYChartWithFillsToTheAxis from "./Components/XYChartWithFillsToTheAxis";
import XYChartWithValueBasedLineGraphs from "./Components/XYChartWithValueBasedLineGraphs";
import XYErrorChart from "./Components/XYErrorChart";
import ScatterChart from "./Components/ScatterChart";
import ZoomableBubbleChart from "./Components/ZoomableBubbleChart";
import AnimatedGauge from "./Components/AnimatedGauge";


const ComposedChart = ({match}) => {
  return (
    <div className="gx-main-content">
      <ContainerHeader title={<IntlMessages id="sidebar.chart.bar"/>} match={match}/>

      <Row>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Duration On Value Axis">
            <DurationOnValueAxis/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Reversed Value Axis">
            <ReversedValueAxis/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Same Data Composed Chart">
            <PyramidChart/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Funnel Chart">
            <FunnelChart/>
          </Card>
        </Col>

        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Funnel 3D Chart">
            <Funnel3DChart/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Funnel 3D Chart">
            <BubbleChart/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="XY Chart With Date Based Axis">
            <XyChartWithDateBasedAxis/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="XY Chart With Fills To The Axis">
            <XYChartWithFillsToTheAxis/>
          </Card>
        </Col>

        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Zoomable Bubble Chart">
            <ZoomableBubbleChart/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Scatter Chart">
            <ScatterChart/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="XY Error Chart">
            <XYErrorChart/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="XY Chart With Value Based Line Graphs">
            <XYChartWithValueBasedLineGraphs/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="XY Chart With Value Based Line Graphs">
            <AnimatedGauge/>
          </Card>
        </Col>


      </Row>
    </div>
  );
};

export default ComposedChart;
