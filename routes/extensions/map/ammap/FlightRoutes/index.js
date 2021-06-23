import React from "react";
import {Card} from "antd";

import FlightRoutesMap from "./Components/FlightRoutesMap";
import IntlMessages from "../../../../../util/IntlMessages";

const FlightRoutes = () => {
  return (
    <Card className="gx-card" title={<IntlMessages id="sidebar.map.flight.routes"/>}>
      <FlightRoutesMap/>
    </Card>
  );
};

export default FlightRoutes;
