import React from "react";
import {Card} from "antd";
import UsHeatMap from "./Components/UsHeatMap";
import IntlMessages from "../../../../../util/IntlMessages";

const Choropleth = () => {
  return (
    <Card className="gx-card" title={<IntlMessages id="sidebar.map.choropleth"/>}>
      <UsHeatMap/>
    </Card>
  );
};

export default Choropleth;
