import React from "react";
import {Card, Col, Row} from "antd";

import SimpleScatterChart from "./Components/SimpleScatterChart";
import ThreeDimScatterChart from "./Components/ThreeDimScatterChart";
import ContainerHeader from "../../../../../app/components/ContainerHeader";
import IntlMessages from "../../../../../util/IntlMessages";


const Scatter = ({match}) => {
  return (
    <div className="gx-main-content">
      <ContainerHeader title={<IntlMessages id="sidebar.chart.scatter"/>} match={match}/>

      <Row>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Simple Scatter Chart">
            <SimpleScatterChart/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Three Dim Scatter Chart">
            <ThreeDimScatterChart/>
          </Card>
        </Col>
      </Row>
    </div>
  );
};


export default Scatter;
