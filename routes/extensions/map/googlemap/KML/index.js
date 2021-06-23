import React from "react";
import {Card} from "antd";
import MapKmLayer from "./Components/MapKmLayer";
import IntlMessages from "../../../../../util/IntlMessages";

const KmLayer = () => {
  return (
    <Card className="gx-card" title={<IntlMessages id="sidebar.map.kmLayer"/>}>
      <MapKmLayer/>
    </Card>
  );
};

export default KmLayer;