import React from "react";
import {Col, Row} from "antd";

import timeLineData from "../timeLineData";
import WithIconTimeLineItem from "../../../../app/components/timeline/WithIconTimeLineItem";
import ContainerHeader from "../../../../app/components/ContainerHeader";
import IntlMessages from "../../../../util/IntlMessages";

const DefaultWithIcon = ({match}) => {
  return (
    <Row>
      <Col span={24}>
        <ContainerHeader title={<IntlMessages id="sidebar.timeLine.defaultwithIcons"/>} match={match}/>
      </Col>
      <Col span={24}>
        <div className="gx-timeline-section gx-timeline-center">
          <WithIconTimeLineItem timeLine={timeLineData[1]} color="pink">
            <i className="icon icon-data-display gx-p-2"/>
          </WithIconTimeLineItem>
          <WithIconTimeLineItem styleName="gx-timeline-inverted" timeLine={timeLineData[1]}
                                color="purple">
            <i className="icon icon-map-google gx-p-2"/>
          </WithIconTimeLineItem>
          <WithIconTimeLineItem timeLine={timeLineData[2]} color="green">
            <i className="icon icon-profile gx-p-2"/>
          </WithIconTimeLineItem>
          <WithIconTimeLineItem styleName="gx-timeline-inverted" timeLine={timeLineData[3]} color="red">
            <i className="icon icon-tickets gx-p-2"/>
          </WithIconTimeLineItem>
          <WithIconTimeLineItem timeLine={timeLineData[4]} color="amber">
            <i className="icon icon-widgets gx-p-2"/>
          </WithIconTimeLineItem>
        </div>
      </Col>
    </Row>
  )
};

export default DefaultWithIcon;

