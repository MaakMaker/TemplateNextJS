import React from "react";
import {Card, Carousel} from "antd";

const Basic = () => {

  const onChange = (a, b, c) => {
    console.log(a, b, c);
  };

  return (
    <Card className="gx-card" title="Basic">
      <Carousel afterChange={onChange}>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
      </Carousel>
    </Card>
  );
};

export default Basic;
