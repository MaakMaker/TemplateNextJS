import React from "react";
import {Card, DatePicker} from "antd";
import moment from "moment";

const {MonthPicker, RangePicker} = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';


const DateFormat = () => {
  return (
    <Card className="gx-card" title="Date Format">
      <DatePicker className="gx-mb-3 gx-w-100" defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat}/>
      <MonthPicker className="gx-mb-3 gx-w-100" defaultValue={moment('2015/01', monthFormat)} format={monthFormat}/>
      <RangePicker className="gx-w-100"
                   defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                   format={dateFormat}
      />
    </Card>
  );
};

export default DateFormat;
