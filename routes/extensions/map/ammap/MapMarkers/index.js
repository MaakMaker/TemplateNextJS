import React from "react";
import {Card} from "antd";

import CustomMapMarkers from "./Components/CustomMapMarkers";
import IntlMessages from "../../../../../util/IntlMessages";

const MapMarkers = () => {
  return (
    <Card className="gx-card" title={<IntlMessages id="sidebar.map.markers"/>}>
      <CustomMapMarkers/>
    </Card>
  );
};

export default MapMarkers;
