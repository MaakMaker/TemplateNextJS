import React from "react";
import {Card, TimePicker} from "antd";
import moment from "moment";

const TimePickerSize = () => {
  return (
    <Card className="gx-card" title="TimePicker Size">
      <TimePicker className="gx-mr-2 gx-mb-2" defaultValue={moment('12:08:23', 'HH:mm:ss')} size="large"/>
      <TimePicker className="gx-mr-2 gx-mb-2" defaultValue={moment('12:08:23', 'HH:mm:ss')}/>
      <TimePicker className="gx-mr-2 gx-mb-2" defaultValue={moment('12:08:23', 'HH:mm:ss')} size="small"/>
    </Card>
  );
};

export default TimePickerSize;
