import React from "react";
import Link from "next/link";
import IntlMessages from "../../../../util/IntlMessages";

const Error404 = () => (
  <div className="gx-page-error-container">
    <div className="gx-page-error-content">
      <div className="gx-error-code gx-mb-4">404</div>
      <h2 className="gx-text-center">
        <IntlMessages id="extraPages.404Msg"/>
      </h2>
      <form className="gx-mb-4" role="search">
        <div className="gx-search-bar">
          <div className="gx-form-group">
            <input type="search" className="ant-input ant-input-lg" placeholder="Search..."/>
            <button className="gx-search-icon">
              <i className="icon icon-search"/>
            </button>
          </div>
        </div>
      </form>
      <p className="gx-text-center">
        <Link className="gx-btn gx-btn-primary" href="/"><a><IntlMessages id="extraPages.goHome"/></a></Link>
      </p>
    </div>
  </div>
);

export default Error404;
