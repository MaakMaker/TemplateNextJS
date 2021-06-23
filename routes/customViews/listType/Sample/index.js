import React from "react";
import {PlainListData} from "../data";
import {Col, Row} from "antd";
import ContainerHeader from "../../../../app/components/ContainerHeader";
import IntlMessages from "../../../../util/IntlMessages";
import PlainListItem from "../Component/PlainListItem";

function SimpleList({match}) {
  return (
    <div className="gx-main-content gx-pb-sm-4">
      <Row>
        <Col span={24}>
          <ContainerHeader title={<IntlMessages id="sidebar.listType.plainListView"/>} match={match}/>
        </Col>
        <Col span={24}>
          {PlainListData.map((data, index) => (
            <PlainListItem key={index} data={data}/>
          ))}
        </Col>
      </Row>
    </div>
  );
}

export default SimpleList ;
