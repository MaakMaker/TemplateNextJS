import React from "react";
import {Card, Col, Row} from "antd";

import SimpleLineChart from "./Components/SimpleLineChart";
import VerticalLineChart from "./Components/VerticalLineChart";
import CustomizedDotLineChart from "./Components/CustomizedDotLineChart";
import LineChartWithReferenceLines from "./Components/LineChartWithReferenceLines";
import DashedLineChart from "./Components/DashedLineChart";
import LineChartWithXAxisPading from "./Components/LineChartWithXAxisPading";
import LineChartConnectNulls from "./Components/LineChartConnectNulls";
import SynchronizedLineChart from "./Components/SynchronizedLineChart";
import ContainerHeader from "../../../../../app/components/ContainerHeader";
import IntlMessages from "../../../../../util/IntlMessages";

const LineChart = ({match}) => {
  return (
    <div className="gx-main-content">
      <ContainerHeader title={<IntlMessages id="sidebar.chart.line"/>} match={match}/>

      <Row>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Simple Line Chart">
            <SimpleLineChart/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Vertical Line Chart">
            <VerticalLineChart/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Customized Dot Line Chart">
            <CustomizedDotLineChart/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Line Chart With Reference Lines">
            <LineChartWithReferenceLines/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Dashed Line Chart">
            <DashedLineChart/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Line Chart With X-Axis Padding">
            <LineChartWithXAxisPading/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Synchronized Line Chart">
            <SynchronizedLineChart/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Line Chart Connect Nulls">
            <LineChartConnectNulls/>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default LineChart;
