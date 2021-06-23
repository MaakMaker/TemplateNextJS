import React from "react";
import {Button, Card} from "antd";

const Basic = () => {
  return (<Card className="gx-card" title="Basic">
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="danger">Danger</Button>
    </Card>
  );
};

export default Basic;
