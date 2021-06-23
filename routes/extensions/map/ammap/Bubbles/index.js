import React from "react";
import {Card} from "antd";

import MapWithBubbles from "./Components/MapWithBubbles";
import IntlMessages from "../../../../../util/IntlMessages";

const Bubbles = () => {
  return (
    <Card className="gx-card" title={<IntlMessages id="sidebar.map.bubbles"/>}>
      <MapWithBubbles/>
    </Card>
  );
};


export default Bubbles;
