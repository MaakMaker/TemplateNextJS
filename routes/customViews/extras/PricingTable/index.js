import React from "react";
import {Card, Col, Row} from "antd";

import IntlMessages from "../../../../util/IntlMessages";
import ContainerHeader from "../../../../app/components/ContainerHeader";
import Basic from "./Basic";
import Classic from "./Classic";
import Circle from "./Circle";
import Dark from "./Dark";
import "./index.css";

const PricingTable = ({match}) => {
  return (
    <Row>
      <Col span={24}>
        <ContainerHeader title={<IntlMessages id="sidebar.extraElements.pricingTable"/>} match={match}/>
      </Col>

      <Col span={24}>
        <Card title={<IntlMessages id="pricingTable.basic"/>}>
          <Basic/>
        </Card>
      </Col>

      <Col span={24}>
        <Card title={<IntlMessages id="pricingTable.circle"/>}>
          <Circle/>
        </Card>
      </Col>

      <Col span={24}>
        <Card title={<IntlMessages id="pricingTable.classic"/>}>
          <Classic/>
        </Card>
      </Col>

      <Col span={24}>
        <Card title={<IntlMessages id="pricingTable.dark"/>}>
          <Dark/>
        </Card>
      </Col>
    </Row>
  );
};

export default PricingTable;

