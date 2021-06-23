import React from "react";
import {Card} from "antd";

import SimpleMap from "./Components/SimpleMap";
import IntlMessages from "../../../../../util/IntlMessages";


const Simple = () => {
  return (
    <Card className="gx-card" title={<IntlMessages id="sidebar.map.simple"/>}>
      <SimpleMap/>
    </Card>
  );
};

export default Simple;
