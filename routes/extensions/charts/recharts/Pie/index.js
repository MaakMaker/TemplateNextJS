import React from "react";
import {Card, Col, Row} from "antd";

import TwoLevelPieChart from "./Components/TwoLevelPieChart";
import StraightAnglePieChart from "./Components/StraightAnglePieChart";
import TwoSimplePieChart from "./Components/TwoSimplePieChart";
import CustomActiveShapePieChart from "./Components/CustomActiveShapePieChart";
import PieChartWithCustomizedLabel from "./Components/PieChartWithCustomizedLabel";
import PieChartWithPaddingAngle from "./Components/PieChartWithPaddingAngle";
import ContainerHeader from "../../../../../app/components/ContainerHeader";
import IntlMessages from "../../../../../util/IntlMessages";


const PieChart = ({match}) => {
  return (
    <div className="gx-main-content">
      <ContainerHeader title={<IntlMessages id="sidebar.chart.pie"/>} match={match}/>

      <Row>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Two Level Pie Chart">
            <TwoLevelPieChart/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Straight Angle Pie Chart">
            <StraightAnglePieChart/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Custom Active Shape Pie Chart">
            <CustomActiveShapePieChart/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Pie Chart With Customized Label">
            <PieChartWithCustomizedLabel/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Two Simple Pie Chart">
            <TwoSimplePieChart/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Pie Chart With Padding Angle">
            <PieChartWithPaddingAngle/>
          </Card>
        </Col>
      </Row>
    </div>
  );
};


export default PieChart;
