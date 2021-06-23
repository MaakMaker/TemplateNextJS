import React from "react";
import {Card, Radio} from "antd";

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const StyleRadio = () => {
  function onChange(e) {
    console.log(`radio checked:${e.target.value}`);
  }

  return (
    <Card className="gx-card" title="Style Radio">
      <div className="gx-mb-3">
        <RadioGroup onChange={onChange} defaultValue="a">
          <RadioButton value="a">Hangzhou</RadioButton>
          <RadioButton value="b">Shanghai</RadioButton>
          <RadioButton value="c">Beijing</RadioButton>
          <RadioButton value="d">Chengdu</RadioButton>
        </RadioGroup>
      </div>
      <div className="gx-mb-3">
        <RadioGroup onChange={onChange} defaultValue="a">
          <RadioButton value="a">Hangzhou</RadioButton>
          <RadioButton value="b" disabled>Shanghai</RadioButton>
          <RadioButton value="c">Beijing</RadioButton>
          <RadioButton value="d">Chengdu</RadioButton>
        </RadioGroup>
      </div>
      <div className="gx-mb-0">
        <RadioGroup disabled onChange={onChange} defaultValue="a">
          <RadioButton value="a">Hangzhou</RadioButton>
          <RadioButton value="b">Shanghai</RadioButton>
          <RadioButton value="c">Beijing</RadioButton>
          <RadioButton value="d">Chengdu</RadioButton>
        </RadioGroup>
      </div>
    </Card>
  );
};

export default StyleRadio;
