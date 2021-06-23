import React from "react";
import {Card} from "antd";

import MapWithPatterns from "./Components/MapWithPatterns";
import IntlMessages from "../../../../../util/IntlMessages";

const Patterns = () => {
  return (
    <Card className="gx-card" title={<IntlMessages id="sidebar.map.patterns"/>}>
      <MapWithPatterns/>
    </Card>
  );
};

export default Patterns;
