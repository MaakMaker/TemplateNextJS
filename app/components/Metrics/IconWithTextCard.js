import React from "react";

import Widget from "../../components/Widget/index";
import {useSelector} from "react-redux";
import {THEME_TYPE_DARK} from "../../../constants/ThemeSetting";

const IconWithTextCard = (props) => {
  const {icon, title, subTitle} = props;
  const {themeType} = useSelector(({settings}) => settings);
  let {iconColor} = props;
  if (themeType === THEME_TYPE_DARK) {
    iconColor = "white";
  }

  return (
    <Widget>
      <div className="gx-media gx-align-items-center gx-flex-nowrap">
        <div className="gx-mr-lg-4 gx-mr-3">
          <i className={`icon icon-${icon} gx-fs-xlxl gx-text-${iconColor} gx-d-flex`}
             style={{fontSize: 45}}/>
        </div>
        <div className="gx-media-body">
          <h1 className="gx-fs-xxxl gx-font-weight-medium gx-mb-1">{title}</h1>
          <p className="gx-text-grey gx-mb-0">{subTitle}</p>
        </div>
      </div>
    </Widget>
  );
};
export default IconWithTextCard;
