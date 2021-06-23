import React from "react";
import {Card, Radio} from "antd";

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const SizeRadio = () => {
  return (
    <Card className="gx-card" title="Size Radio">
      <div className="gx-mb-3">
        <RadioGroup defaultValue="a" size="large">
          <RadioButton value="a">Hangzhou</RadioButton>
          <RadioButton value="b">Shanghai</RadioButton>
          <RadioButton value="c">Beijing</RadioButton>
          <RadioButton value="d">Chengdu</RadioButton>
        </RadioGroup>
      </div>
      <div className="gx-mb-3">
        <RadioGroup defaultValue="a">
          <RadioButton value="a">Hangzhou</RadioButton>
          <RadioButton value="b">Shanghai</RadioButton>
          <RadioButton value="c">Beijing</RadioButton>
          <RadioButton value="d">Chengdu</RadioButton>
        </RadioGroup>
      </div>
      <div className="gx-mb-0">
        <RadioGroup defaultValue="a" size="small">
          <RadioButton value="a">Hangzhou</RadioButton>
          <RadioButton value="b">Shanghai</RadioButton>
          <RadioButton value="c">Beijing</RadioButton>
          <RadioButton value="d">Chengdu</RadioButton>
        </RadioGroup>
      </div>
    </Card>
  );
};

export default SizeRadio;
