import React from "react";
import {Card, Slider} from "antd";

const marks = {
  0: '0°C',
  26: '26°C',
  37: '37°C',
  100: {
    style: {
      color: '#f50',
    },
    label: <strong>100°C</strong>,
  },
};

const SliderGarduated = () => {
  return (
    <Card className="gx-card" title="Slider Garduated">
      <h4>included=true</h4>
      <div className="gx-pl-1 gx-pr-3 gx-py-2">
        <Slider marks={marks} defaultValue={37}/>
      </div>
      <div className="gx-pl-1 gx-pr-3 gx-py-2">
        <Slider range marks={marks} defaultValue={[26, 37]}/>
      </div>

      <h4>included=false</h4>
      <div className="gx-pl-1 gx-pr-3 gx-py-2">
        <Slider marks={marks} included={false} defaultValue={37}/>
      </div>

      <h4>marks & step</h4>
      <div className="gx-pl-1 gx-pr-3 gx-py-2">
        <Slider marks={marks} step={10} defaultValue={37}/>
      </div>

      <h4>step=null</h4>
      <div className="gx-pl-1 gx-pr-3 gx-py-2">
        <Slider marks={marks} step={null} defaultValue={37}/>
      </div>
    </Card>
  );
};

export default SliderGarduated;
