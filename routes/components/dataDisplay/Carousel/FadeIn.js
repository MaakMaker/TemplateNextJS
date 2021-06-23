import React from "react";
import {Card, Carousel} from "antd";

const FadeIn = () => {

  return (
    <Card className="gx-card" title="Fade In">
      <Carousel effect="fade">
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
      </Carousel>
    </Card>
  );
};

export default FadeIn;
