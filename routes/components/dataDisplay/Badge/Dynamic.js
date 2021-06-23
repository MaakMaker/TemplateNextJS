import React, {useState} from "react";
import {Badge, Button, Card, Switch} from "antd";
import {MinusOutlined, PlusOutlined} from '@ant-design/icons';

const ButtonGroup = Button.Group;

const Dynamic = () => {

  const [count, setCount] = useState(5);
  const [show, setShow] = useState(true);

  const increase = () => {
    setCount(count + 1);
  };

  const decline = () => {
    let newCount = count - 1;
    if (newCount < 0) {
      newCount = 0;
    }
    setCount(newCount);
  };

  const onChange = (show) => {
    setShow(show);
  };

  return (
    <Card className="gx-card" title="Dynamic">
      <div>
        <Badge count={count}>
          <div className="head-example"/>
        </Badge>
        <ButtonGroup>
          <Button onClick={decline}>
            <MinusOutlined/>
          </Button>
          <Button onClick={increase}>
            <PlusOutlined/>
          </Button>
        </ButtonGroup>
      </div>
      <div style={{marginTop: 10}}>
        <Badge dot={show}>
          <div className="head-example"/>
        </Badge>
        <Switch onChange={onChange} checked={show}/>
      </div>
    </Card>
  );
};

export default Dynamic;
