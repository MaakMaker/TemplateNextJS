import React from "react";
import {Card, Col, Row} from "antd";

import SimpleTreemap from "./Components/SimpleTreemap";
import CustomContentTreemap from "./Components/CustomContentTreemap";
import ContainerHeader from "../../../../../app/components/ContainerHeader";
import IntlMessages from "../../../../../util/IntlMessages";

const Treemap = ({match}) => {
  return (
    <div className="gx-main-content">
      <ContainerHeader title={<IntlMessages id="sidebar.chart.tree"/>} match={match}/>

      <Row>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Simple Tree map">
            <SimpleTreemap/>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Custom Content Treemap">
            <CustomContentTreemap/>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Treemap;
