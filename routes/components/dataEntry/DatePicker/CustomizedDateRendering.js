import React from "react";
import {Card, DatePicker} from "antd";

const {RangePicker} = DatePicker;


const CustomizedDateRendering = () => {
  return (
    <Card className="gx-card" title="Customized Date Rendering">
      <DatePicker className="gx-mb-3 gx-w-100"
                  dateRender={(current) => {
                    const style = {};
                    if (current.date() === 1) {
                      style.border = '1px solid #1890ff';
                      style.borderRadius = '50%';
                    }
                    return (
                      <div className="ant-calendar-date" style={style}>
                        {current.date()}
                      </div>
                    );
                  }}
      />
      <RangePicker className="gx-w-100"
                   dateRender={(current) => {
                     const style = {};
                     if (current.date() === 1) {
                       style.border = '1px solid #1890ff';
                       style.borderRadius = '50%';
                     }
                     return (
                       <div className="ant-calendar-date" style={style}>
                         {current.date()}
                       </div>
                     );
                   }}
      />
    </Card>
  );
};

export default CustomizedDateRendering;
