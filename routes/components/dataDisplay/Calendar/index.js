import React from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import NoticeCalendar from "./NoticeCalendar";
import CalendarCard from "./CalendarCard";
import SelectableCalendar from "./SelectableCalendar";


const Calendar = () => {
  return (
    <Row>
      <Col span={24}>
        <NoticeCalendar/>
      </Col>
      <Col span={24}>
        <Basic/>
      </Col>
      <Col span={24}>
        <SelectableCalendar/>
      </Col>
      <Col span={24}>
        <CalendarCard/>
      </Col>
    </Row>
  );
};

export default Calendar;
