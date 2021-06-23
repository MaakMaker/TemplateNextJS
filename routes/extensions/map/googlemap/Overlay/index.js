import React from "react";
import {Card} from "antd";
import MapOverlay from "./Components/MapOverlay";
import IntlMessages from "../../../../../util/IntlMessages";


const Overlay = () => {
  return (
    <Card className="gx-card" title={<IntlMessages id="sidebar.map.overlay"/>}>
      <MapOverlay/>
    </Card>
  );
};

export default Overlay;