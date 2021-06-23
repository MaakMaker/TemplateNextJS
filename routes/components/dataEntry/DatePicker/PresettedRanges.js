import React from "react";
import {Card, DatePicker} from "antd";
import moment from "moment";

const RangePicker = DatePicker.RangePicker;

function onChange(dates, dateStrings) {
  console.log('From: ', dates[0], ', to: ', dates[1]);
  console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
}

const PresettedRanges = () => {
  return (
    <Card className="gx-card" title="PresettedRanges">
      <RangePicker className="gx-mb-3 gx-w-100"
                   ranges={{Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')]}}
                   onChange={onChange}
      />
      <RangePicker className="gx-w-100"
                   ranges={{Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')]}}
                   showTime
                   format="YYYY/MM/DD HH:mm:ss"
                   onChange={onChange}
      />
    </Card>
  );
};

export default PresettedRanges;
