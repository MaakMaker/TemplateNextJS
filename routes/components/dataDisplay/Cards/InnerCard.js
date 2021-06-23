import React from "react";
import {Card} from "antd";

const InnerCard = () => {
  return (

    <Card title="Card title">
      <p
        style={{
          fontSize: 14,
          marginBottom: 16,
          fontWeight: 500,
        }}
      >
        Group title
      </p>
      <Card
        type="inner"
        title="Inner Card title"
        extra={<span className="gx-link">More</span>}
      >
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at
        its layout.
      </Card>
      <Card
        type="inner"
        title="Inner Card title"
        extra={<span className="gx-link">More</span>}
      >
        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their infancy.
      </Card>
    </Card>

  );
};

export default InnerCard;
