import React from "react";
import {Button} from "antd";

import IntlMessages from "../../../../util/IntlMessages";

const
  PriceItem = ({styleName, headerStyle, itemStyle, footerStyle}) => {
    return (
      <div className={`${styleName}`}>
        <div className={`${headerStyle}`}>
          <h2 className="gx-price"><i className="icon icon-halfstar"/>49</h2>
          <p className="gx-letter-spacing-base gx-text-white gx-text-uppercase gx-mb-0"><IntlMessages
            id="pricingTable.professional"/></p>
        </div>

        <div className={`${itemStyle}`}>
          <ul className="gx-package-items">
            <li>
              <i className="icon icon-translation"/>
              <span><IntlMessages id="pricingTable.easyTranslation"/></span>
            </li>
            <li>
              <i className="icon icon-font"/>
              <span><IntlMessages id="pricingTable.awesomeGoogleFonts"/></span>
            </li>
            <li>
              <i className="icon icon-hotel-booking"/>
              <span><IntlMessages id="pricingTable.hotelBookingSystem"/></span>
            </li>
            <li>
              <i className="icon icon-sent"/>
              <span><IntlMessages id="pricingTable.emailComposeInterface"/></span>
            </li>
            <li>
              <i className="icon icon-location"/>
              <span><IntlMessages id="pricingTable.locationFinderApp"/></span>
            </li>
          </ul>

          <div className="gx-package-footer">
            <Button type="primary" className={`${footerStyle}`}><IntlMessages
              id="pricingTable.buyNow"/></Button>
          </div>
        </div>
      </div>
    )
  };

export default PriceItem;

