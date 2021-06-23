import React from "react";
import {Affix, Button, Card} from "antd";

const Callback = () => {
  return (
    <Card className="gx-card" title="Affix top">
      <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
        <Button>120px to affix top</Button>
      </Affix>
    </Card>
  );
};

export default Callback;
