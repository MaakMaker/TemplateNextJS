import React from "react";
import {Card, Checkbox, Col, Row} from "antd";

function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}


const UseWithGrid = () => {
  return (
    <Card className="gx-card" title="Use With Grid">
      <Checkbox.Group style={{width: '100%'}} onChange={onChange}>
        <Row>
          <Col span={8}><Checkbox className="gx-mb-3" value="A">A</Checkbox></Col>
          <Col span={8}><Checkbox className="gx-mb-3" value="B">B</Checkbox></Col>
          <Col span={8}><Checkbox className="gx-mb-3" value="C">C</Checkbox></Col>
          <Col span={8}><Checkbox className="gx-mb-3" value="D">D</Checkbox></Col>
          <Col span={8}><Checkbox className="gx-mb-3" value="E">E</Checkbox></Col>
        </Row>
      </Checkbox.Group>
    </Card>
  );
};

export default UseWithGrid;
