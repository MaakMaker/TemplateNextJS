import React from "react";
import {Col, Row} from "antd";

import timeLineData from "../timeLineData";
import DefaultTimeLineItem from "../../../../app/components/timeline/DefaultTimeLineItem";
import ContainerHeader from "../../../../app/components/ContainerHeader";
import IntlMessages from "../../../../util/IntlMessages";

const Default = ({match}) => {
  return (
    <Row>
      <Col span={24}>
        <ContainerHeader title={<IntlMessages id="sidebar.timeLine.default"/>} match={match}/>
      </Col>
      <Col span={24}>
        <div className="gx-timeline-section gx-timeline-center">
          {timeLineData.map((timeLine, index) => <DefaultTimeLineItem key={index}
                                                                      styleName={index % 2 === 0 ? '' : 'gx-timeline-inverted'}
                                                                      timeLine={timeLine}/>)}
        </div>
      </Col>
    </Row>
  )
};

export default Default;

