import React from "react";
import {Card, Col, InputNumber, Row, Slider} from "antd";

class SliderWithDecimal extends React.Component {
  state = {
    inputValue: 0,
  };
  onChange = (value) => {
    this.setState({
      inputValue: value,
    });
  };

  render() {
    return (
      <Card className="gx-card" title="Slider With Decimal">
        <Row>
          <Col sm={12} xs={24}>
            <Slider min={0} max={1} onChange={this.onChange} value={this.state.inputValue} step={0.01}/>
          </Col>
          <Col sm={12} xs={24}>
            <InputNumber
              min={0}
              max={1}
              step={0.01}
              value={this.state.inputValue}
              onChange={this.onChange}
            />
          </Col>
        </Row>
      </Card>
    );
  }
}

export default SliderWithDecimal;
