import React from "react";
import {Affix, Button, Card} from "antd";

const Basic = () => {
  return (
    <Card className="gx-card" title="Basic">
      <Affix>
        <Button type="primary">Affix top</Button>
      </Affix>
      <br/>
      <Affix offsetBottom={0}>
        <Button type="primary">Affix bottom</Button>
      </Affix>
    </Card>
  );
};

export default Basic;
