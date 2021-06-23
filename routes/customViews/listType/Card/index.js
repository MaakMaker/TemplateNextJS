import React from "react";
import {cardsList} from "../data";
import {Col, Row} from "antd";
import ContainerHeader from "../../../../app/components/ContainerHeader";
import IntlMessages from "../../../../util/IntlMessages";
import CardsListItem from "../Component/CardsListItem";

function CardList({match}) {
  return (
    <div className="gx-main-content gx-pb-sm-4">
      <Row>
        <Col span={24}>
          <ContainerHeader title={<IntlMessages id="sidebar.listType.cardListView"/>} match={match}/>
        </Col>
        <Col span={24}>
          {cardsList.map((data, index) => (
            <CardsListItem key={index} data={data} styleName="gx-card-list"/>
          ))}
        </Col>
      </Row>
    </div>
  )
}

export default CardList;

