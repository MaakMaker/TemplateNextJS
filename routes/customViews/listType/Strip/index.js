import React from "react";
import StripListItem from "../Component/StripListItem";
import {data} from "../data";
import {Col, Row} from "antd";
import ContainerHeader from "../../../../app/components/ContainerHeader";
import IntlMessages from "../../../../util/IntlMessages";

function StripList({match}) {
  return (
    <div className="gx-main-content gx-pb-sm-4">
      <Row>
        <Col span={24}>
          <ContainerHeader title={<IntlMessages id="sidebar.listType.withDivider"/>} match={match}/>
        </Col>
        <Col span={24}>
          {data.map((data, index) => (
            <StripListItem key={index} data={data} styleName="gx-card-strip"/>
          ))}
        </Col>
      </Row>
    </div>
  );
}

export default StripList ;
