import React from "react";
import {Card} from "antd";

import SelectingMultipleAreas from "./Components/SelectingMultipleAreas";
import IntlMessages from "../../../../../util/IntlMessages";

const MultipleAreas = () => {
  return (
    <Card className="gx-card" title={<IntlMessages id="sidebar.map.multiple.areas"/>}>
      <SelectingMultipleAreas/>
    </Card>
  );
};

export default MultipleAreas ;
