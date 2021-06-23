import React from "react";
import {Card} from "antd";

import WeatherMap from "./Components/WeatherMap";
import IntlMessages from "../../../../../util/IntlMessages";

const Weather = () => {
  return (
    <Card className="gx-card" title={<IntlMessages id="sidebar.map.bubbles"/>}>
      <WeatherMap/>
    </Card>
  );
};

export default Weather;
