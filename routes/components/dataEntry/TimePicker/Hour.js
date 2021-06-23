import React from "react";
import {Card, TimePicker} from "antd";

const Hour = () => {
  function onChange(time, timeString) {
    console.log(time, timeString);
  }

  return (
    <Card className="gx-card" title="Hour">
      <TimePicker className="gx-mr-2 gx-mb-2" use12Hours onChange={onChange}/>
      <TimePicker className="gx-mr-2 gx-mb-2" use12Hours format="h:mm:ss A" onChange={onChange}/>
      <TimePicker className="gx-mr-2 gx-mb-2" use12Hours format="h:mm a" onChange={onChange}/>
    </Card>
  );
};

export default Hour;
