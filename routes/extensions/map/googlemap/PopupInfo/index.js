import React from "react";
import {Card} from "antd";
import MapPopupInfo from "./Components/MapPopupInfo";
import IntlMessages from "../../../../../util/IntlMessages";


const PopUpInfo = () => {
  return (
    <Card className="gx-card" title={<IntlMessages id="sidebar.map.popupInfo"/>}>
      <MapPopupInfo/>
    </Card>
  );
};

export default PopUpInfo;