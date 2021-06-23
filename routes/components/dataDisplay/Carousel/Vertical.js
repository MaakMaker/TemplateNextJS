import React from "react";
import {Card, Carousel} from "antd";


const Vertical = () => {
  return (
    <Card className="gx-card" title="Vertical">
      <Carousel dotPosition='right' className="gx-vertical-slide">
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
      </Carousel>
    </Card>
  );
};

export default Vertical;
