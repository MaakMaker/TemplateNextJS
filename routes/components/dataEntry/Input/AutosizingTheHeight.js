import React from "react";
import {Card, Input} from "antd";

const {TextArea} = Input;


const AutosizingTheHeight = () => {
  return (
    <Card className="gx-card" title="Autosizing The Height">
      <div className="gx-mb-3">
        <TextArea placeholder="Autosize height based on content lines" autosize/>
      </div>
      <div className="gx-mb-3">
      <TextArea placeholder="Autosize height with minimum and maximum number of lines"
                autosize={{minRows: 2, maxRows: 6}}/>
      </div>
    </Card>
  );
};

export default AutosizingTheHeight;
