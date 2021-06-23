import React from "react";
import {Card, Col, Row} from "antd";

import DateBasedLine from "./Components/DateBasedLine";

import ContainerHeader from "../../../../../app/components/ContainerHeader";
import IntlMessages from "../../../../../util/IntlMessages";
import LineChartWithScrollAndZoom from "./Components/LineChartWithScrollAndZoom";
import LineWithDifferentColors from "./Components/LineWithDifferentColors";
import SmoothedLineChart from "./Components/SmoothedLineChart";
import TrendLines from "./Components/TrendLines";
import LineWithChangingColor from "../Area/Components/LineWithChangingColor";
import FillBetweenTwoLines from "./Components/FillBetweenTwoLines";
import StepLineChart from "./Components/StepLineChart";
import LineWithCustomBullets from "./Components/LineWithCustomBullets";
import VerticalLineChart from "./Components/VerticalLineChart";
import ChartWithGapsInData from "./Components/ChartWithGapsInData";
import MultipleValueAxes from "./Components/MultipleValueAxes";
import LogarithmicScale from "./Components/LogarithmicScale";
import LineWithDifferentNegativeColor from "./Components/LineWithDifferentNegativeColor";


const LineChart = ({match}) => {
  return (
    <div className="gx-main-content">
      <ContainerHeader title={<IntlMessages id="sidebar.chart.line"/>} match={match}/>

      <Row>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Date Based Line Chart">
            <DateBasedLine/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Line Chart With Scroll And Zoom">
            <LineChartWithScrollAndZoom/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Line With Different Colors">
            <LineWithDifferentColors/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Fill Between Two Lines">
            <FillBetweenTwoLines/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Smoothed Line Chart">
            <SmoothedLineChart/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Line With Changing Color">
            <LineWithChangingColor/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Trend Lines chart">
            <TrendLines/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Step Line Chart">
            <StepLineChart/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Line With Custom Bullets">
            <LineWithCustomBullets/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Vertical Line Chart">
            <VerticalLineChart/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Chart With Gaps In Data">
            <ChartWithGapsInData/>
          </Card>
        </Col>

        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Multiple Value Axes">
            <MultipleValueAxes/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Logarithmic Scale">
            <LogarithmicScale/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Line With Different Negative Color">
            <LineWithDifferentNegativeColor/>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default  LineChart;
