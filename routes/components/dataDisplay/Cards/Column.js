import React from "react";
import {Card, Col, Row} from "antd";

const Column = () => {
  return (
    <Row>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Card title="Card title" bordered={false}>
          <p>Where does it come from? Contrary to popular belief. </p> <p> Piece of classical Latin literature from 45
          BC, making it over 2000 years old. Richard McClintock,
          a Latin professor at discovered.</p>
        </Card>
      </Col>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Card title="Card title" bordered={false}>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. </p> <p> It has roots
          Latin literature from 45 BC. Richard McClintock, Hampden-Sydney College in Virginia, the source.</p>
        </Card>
      </Col>
    </Row>
  );
};

export default Column;
