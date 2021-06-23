import React from "react";
import {Calendar, Card} from "antd";

const CalendarCard = () => {
  function onPanelChange(value, mode) {
    console.log(value, mode);
  }

  return (
    <Card className="gx-card gx-com-calendar-card" title="CalendarCard">
      <Calendar className="gx-com-calendar" fullscreen={false} onPanelChange={onPanelChange}/>
    </Card>
  );
};

export default CalendarCard;
