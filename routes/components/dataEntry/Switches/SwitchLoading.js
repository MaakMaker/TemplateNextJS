import React from "react";
import {Card, Switch} from "antd";

const SwitchLoading = () => {
  return (
    <Card className="gx-card" title="Switch Loading">
      <div className="gx-mb-3"><Switch loading defaultChecked/></div>
      <div className="gx-mb-0"><Switch size="small" loading/></div>
    </Card>
  );
};

export default SwitchLoading;
