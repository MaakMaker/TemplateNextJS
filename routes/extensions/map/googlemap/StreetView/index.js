import React from "react";
import {Card} from "antd";
import StreetViewPanoramaEx from "./Components/StreetViewPanoramaEx";
import IntlMessages from "../../../../../util/IntlMessages";


const StreetView = () => {
  return (
    <Card className="gx-card" title={<IntlMessages id="sidebar.map.streetView"/>}>
      <StreetViewPanoramaEx/>
    </Card>
  );
};

export default StreetView;