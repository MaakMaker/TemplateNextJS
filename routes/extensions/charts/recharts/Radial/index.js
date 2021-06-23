import React from "react";
import {Card, Col, Row} from "antd";

import SimpleRadialBarChart from "./Components/SimpleRadialBarChart";
import ContainerHeader from "../../../../../app/components/ContainerHeader";
import IntlMessages from "../../../../../util/IntlMessages";


const Radial = ({match}) => {
  return (
    <div className="gx-main-content">
      <ContainerHeader title={<IntlMessages id="sidebar.chart.radial"/>} match={match}/>

      <Row>
        <Col span={24}>
          <Card className="gx-card" title="Simple Radial Bar Chart">
            <SimpleRadialBarChart/>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Radial;

