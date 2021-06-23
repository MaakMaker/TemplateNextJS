import React from "react";
import {Card, Col, Row} from "antd";

import SimpleRadarChart from "./Components/SimpleRadarChart";
import SpecifiedDomainRadarChart from "./Components/SpecifiedDomainRadarChart";
import ContainerHeader from "../../../../../app/components/ContainerHeader";
import IntlMessages from "../../../../../util/IntlMessages";


const Radar = ({match}) => {
  return (
    <div className="gx-main-content">
      <ContainerHeader title={<IntlMessages id="sidebar.chart.radar"/>} match={match}/>
      <Row>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Simple Radar Chart">
            <SimpleRadarChart/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Specified Domain Radar Chart">
            <SpecifiedDomainRadarChart/>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default Radar;

