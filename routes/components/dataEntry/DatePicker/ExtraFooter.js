import React from "react";
import {Card, DatePicker} from "antd";

const {RangePicker, MonthPicker} = DatePicker;


const ExtraFooter = () => {
  return (
    <Card className="gx-card" title="Extra Footer">
      <DatePicker className="gx-mb-3 gx-w-100" renderExtraFooter={() => 'extra footer'}/>
      <DatePicker className="gx-mb-3 gx-w-100" renderExtraFooter={() => 'extra footer'} showTime/>
      <RangePicker className="gx-mb-3 gx-w-100" renderExtraFooter={() => 'extra footer'}/>
      <RangePicker className="gx-mb-3 gx-w-100" renderExtraFooter={() => 'extra footer'} showTime/>
      <MonthPicker className="gx-w-100" renderExtraFooter={() => 'extra footer'} placeholder="Select month"/>
    </Card>
  );
};

export default ExtraFooter;
