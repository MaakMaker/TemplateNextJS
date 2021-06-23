import React from "react";
import Callouts from "../../../../../app/components/callouts/Callouts";
import calloutsData from "../calloutsData";

const Basic = () => {
  return (
    <div id="callouts">
      {calloutsData.map((callout, index) => <Callouts key={index} styleName={index % 2 === 0 ? 'odd' : 'even'}
                                                      callout={callout}/>
      )}
    </div>
  )
};

export default Basic;

