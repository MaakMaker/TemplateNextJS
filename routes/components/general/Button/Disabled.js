import React from "react";
import {Button, Card} from "antd";

const Disabled = () => {
  return (
    <Card className="gx-card" title="Disabled">
      <Button type="primary">Primary</Button>
      <Button type="primary" disabled>Primary(disabled)</Button>
      <br/>
      <Button>Default</Button>
      <Button disabled>Default(disabled)</Button>
      <br/>
      <Button type="dashed">Dashed</Button>
      <Button type="dashed" disabled>Dashed(disabled)</Button>
      <div className="gx-bg-grey gx-px-3 gx-pt-3">
        <Button>Ghost</Button>
        <Button disabled>Ghost(disabled)</Button>
      </div>
    </Card>
  );
};

export default Disabled;
