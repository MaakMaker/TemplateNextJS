import React from "react";
import {Card} from "antd";
import EventHandler from "./Components/EventHandler";
import IntlMessages from "../../../../../util/IntlMessages";

const EventHanlder = () => {
  return (
    <Card className="gx-card" title={<IntlMessages id="sidebar.map.eventListener"/>}>
      <EventHandler/>
    </Card>
  );
};

export default EventHanlder