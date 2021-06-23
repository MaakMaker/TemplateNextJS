import React from "react";
import {Card, DatePicker} from "antd";

const {RangePicker} = DatePicker;

function onChange(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
  console.log('onOk: ', value);
}


const ChooseTime = () => {
  return (
    <Card className="gx-card" title="Choose Time">
      <DatePicker className="gx-mb-3 gx-w-100"
                  showTime
                  format="YYYY-MM-DD HH:mm:ss"
                  placeholder="Select Time"
                  onChange={onChange}
                  onOk={onOk}
      />
      <RangePicker className="gx-w-100"
                   showTime={{format: 'HH:mm'}}
                   format="YYYY-MM-DD HH:mm"
                   placeholder={['Start Time', 'End Time']}
                   onChange={onChange}
                   onOk={onOk}
      />
    </Card>
  );
};

export default ChooseTime;
