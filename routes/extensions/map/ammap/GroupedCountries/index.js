import React from "react";
import {Card} from "antd";

import GroupedCountriesMap from "./Components/GroupedCountriesMap";
import IntlMessages from "../../../../../util/IntlMessages";

const GroupedCountries = () => {
  return (
    <Card className="gx-card" title={<IntlMessages id="sidebar.map.grouped.countries"/>}>
      <GroupedCountriesMap/>
    </Card>
  );
};

export default GroupedCountries;
