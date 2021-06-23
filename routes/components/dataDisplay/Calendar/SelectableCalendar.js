import React, {useState} from "react";
import {Alert, Calendar, Card} from "antd";
import moment from "moment";

const SelectableCalendar = () => {

  const [value, setValue] = useState(moment('2017-01-25'));
  const [selectedValue, setSelectedValue] = useState(moment('2017-01-25'));

  const onSelect = (value) => {
    setValue(value);
    setSelectedValue(value);
  };
  const onPanelChange = (value) => {
    setValue(value);
  };

    return (
      <Card className="gx-card" title="Selectable Calendar">
        <Alert message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`}/>
        <Calendar className="gx-com-calendar" value={value} onSelect={onSelect}
                  onPanelChange={onPanelChange}/>
      </Card>
    );
};

export default SelectableCalendar;
