import React from "react";
import {Card, Col, Row} from "antd";
import ContainerHeader from "../../../../../app/components/ContainerHeader";
import IntlMessages from "../../../../../util/IntlMessages";
import ColumnWithRotatedSeries from "./Components/ColumnWithRotatedSeries";
import SimpleColumnChart from "./Components/SimpleColumnChart";
import ColumnAndLineMix from "./Components/ColumnAndLineMix";
import Cylinder3DChart from "./Components/Cylinder3DChart";
import Column3DChart from "./Components/Column3DChart";
import LayeredColumnChart from "./Components/LayeredColumnChart";
import StackedbarChartWithNegativeValues from "./Components/StackedbarChartWithNegativeValues";
import StackedBarChart from "../../recharts/Bar/Components/StackedBarChart";
import StackedColumnChart from "./Components/StackedColumnChart";
import ColumnChartWithImagesOnTop from "./Components/ColumnChartWithImagesOnTop";
import ClusteredBarChart from "./Components/ClusteredBarChart";
import Bar3DChart from "./Components/Bar3DChart";
import BarAndLineChartMix from "./Components/BarAndLineChartMix";
import FloatingBarChart from "./Components/FloatingBarChart";
import Stacked3DColumnChart from "./Components/Stacked3DColumnChart";

const BarChart = ({match}) => {
  return (
    <div className="gx-main-content">
      <ContainerHeader title={<IntlMessages id="sidebar.chart.bar"/>} match={match}/>

      <Row>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Column With Rotated Series">
            <ColumnWithRotatedSeries/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Simple Column Chart">
            <SimpleColumnChart/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Column And Line Mix">
            <ColumnAndLineMix/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Stacked Bar Chart With Negative Values">
            <StackedbarChartWithNegativeValues/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Column 3D Chart">
            <Column3DChart/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Cylinder 3D Chart">
            <Cylinder3DChart/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Layered Column Chart">
            <LayeredColumnChart/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="3D Stacked Column Chart">
            <Stacked3DColumnChart/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Layered Column Chart">
            <FloatingBarChart/>
          </Card>
        </Col>


        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Bar And Line Chart Mix">
            <BarAndLineChartMix/>
          </Card>
        </Col>


        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="3D Bar Chart">
            <Bar3DChart/>
          </Card>
        </Col>

        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Column And Line Mix">
            <ClusteredBarChart/>
          </Card>
        </Col>

        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Column Chart With Images On Top">
            <ColumnChartWithImagesOnTop/>
          </Card>
        </Col>

        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Column With Rotated Series">
            <ColumnWithRotatedSeries/>
          </Card>
        </Col>

        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Stacked Bar Chart">
            <StackedBarChart/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Stacked Column Chart">
            <StackedColumnChart/>
          </Card>
        </Col>

      </Row>
    </div>
  );
};


export default  BarChart;
