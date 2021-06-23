import React from "react";
import {Card} from "antd";

const NoBorder = () => {
  return (
    <Card title="Card title" bordered={false}>
      <p>Various versions have evolved over the years, sometimes by accident. The point of using Lorem Ipsum as
        opposed to using 'Content here, content here', making it look like readable English.</p>
      <p>Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
        in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
        a Latin professor at Hampden-Sydney College in Virginia, discovered the source.</p>
    </Card>

  );
};

export default NoBorder;
