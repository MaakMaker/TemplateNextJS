import React from "react";
import {Card} from "antd";

import DrillDownMap from "./Components/DrillDownMap";
import IntlMessages from "../../../../../util/IntlMessages";

const DrillDown = () => {
  return (
    <Card className="gx-card" title={<IntlMessages id="sidebar.map.drill.down"/>}>
      <DrillDownMap/>
    </Card>
  );
};

export default DrillDown;
