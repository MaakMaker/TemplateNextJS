import React from "react";
import {Card, DatePicker} from "antd";
import moment from "moment";

const {MonthPicker, RangePicker} = DatePicker;

const dateFormat = 'YYYY-MM-DD';

const Disabled = () => {
  return (
    <Card className="gx-card" title="Disabled">
      <DatePicker className="gx-mb-3 gx-w-100" defaultValue={moment('2015-06-06', dateFormat)} disabled/>
      <MonthPicker className="gx-mb-3 gx-w-100" defaultValue={moment('2015-06', 'YYYY-MM')} disabled/>
      <RangePicker className="gx-w-100"
                   defaultValue={[moment('2015-06-06', dateFormat), moment('2015-06-06', dateFormat)]}
                   disabled
      />
    </Card>
  );
};

export default Disabled;

