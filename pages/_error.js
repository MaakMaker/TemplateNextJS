import React from 'react';
import IntlMessages from "../util/IntlMessages";
import Link from "next/link";

const ErrorPage = () => {
  return (<div className="gx-page-error-container">
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
          <Link href="/"><a className="gx-btn gx-btn-primary"><IntlMessages id="extraPages.goHome"/></a></Link>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
