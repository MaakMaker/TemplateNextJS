import React, {Component} from "react";
import {Button, Card, message, Steps} from "antd";

import "./index.css";

const Step = Steps.Step;

const steps = [{
  title: 'First',
  content: 'First-content',
}, {
  title: 'Second',
  content: 'Second-content',
}, {
  title: 'Last',
  content: 'Last-content',
}];

class SwitchStep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({current});
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({current});
  }

  render() {
    const {current} = this.state;
    return (
      <Card className="gx-card" title="Switch Step">
        <Steps current={current}>
          {steps.map(item => <Step key={item.title} title={item.title}/>)}
        </Steps>
        <div className="steps-content">{steps[this.state.current].content}</div>
        <div className="steps-action">
          {
            this.state.current < steps.length - 1
            &&
            <Button type="primary" onClick={() => this.next()}>Next</Button>
          }
          {
            this.state.current === steps.length - 1
            &&
            <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
          }
          {
            this.state.current > 0
            &&
            <Button style={{marginLeft: 8}} onClick={() => this.prev()}>
              Previous
            </Button>
          }
        </div>
      </Card>
    );
  }
}


export default SwitchStep;
