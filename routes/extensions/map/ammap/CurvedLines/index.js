import React from "react";
import {Card} from "antd";
import MapCurvedLines from "./Components/MapCurvedLines";
import IntlMessages from "../../../../../util/IntlMessages";

const CurvedLines = () => {
  return (
    <Card className="gx-card" title={<IntlMessages id="sidebar.map.curved.lines"/>}>
      <MapCurvedLines/>
    </Card>
  );
};


export default CurvedLines;
