import React from "react";


const GreenStepItem = ({data}) => {
  const {title, subTitle, desc} = data;
  return (

    <>
      <h2 className="h3 gx-mb-2">{title}</h2>
      <p className="gx-text-grey">{subTitle}</p>
      <p>{desc}</p>
    </>
  );
};

export default GreenStepItem;
