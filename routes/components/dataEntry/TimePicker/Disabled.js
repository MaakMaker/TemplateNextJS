import React from "react";
import {Card, TimePicker} from "antd";
import moment from "moment";

const Disabled = () => {
  return (
    <Card className="gx-card" title="Disabled">
      <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} disabled/>
    </Card>
  );
};

export default Disabled;
