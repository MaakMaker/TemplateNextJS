import React from "react";
import {Card} from "antd";
import Capitals from "./Components/Capitals";
import IntlMessages from "../../../../../util/IntlMessages";

const CapitalsMap = () => {
  return (
    <Card className="gx-card" title={<IntlMessages id="sidebar.map.capitals.map"/>}>
      <Capitals/>
    </Card>
  );
};

export default CapitalsMap;
