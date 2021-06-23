import React from "react";
import {Card} from "antd";

import ZoomingCountriesMap from "./Components/ZoomingCountriesMap";
import IntlMessages from "../../../../../util/IntlMessages";

const ZoomingCountries = () => {
  return (
    <Card className="gx-card" title={<IntlMessages id="sidebar.map.bubbles"/>}>
      <ZoomingCountriesMap/>
    </Card>
  );
};

export default ZoomingCountries ;
