import React from "react";
import {Col, Row} from "antd";
import ItemFirst from "../ItemFirst";
import ItemSecond from "../ItemSecond";
import ItemThird from "../ItemThird";

const Classic = () => {
  return (
    <div className="gx-price-tables gx-pt-classic">
      <Row>
        <Col xl={8} lg={24} md={8} xs={24}>
          <ItemFirst
            styleName="gx-bg-amber-light gx-package"
            headerStyle="gx-package-header gx-bg-amber gx-text-black"
            itemStyle="gx-package-body"
            footerStyle=""
          />
        </Col>

        <Col xl={8} lg={24} md={8} xs={24}>
          <ItemSecond
            styleName="gx-bg-primary-light gx-package gx-highlight"
            headerStyle="gx-package-header gx-bg-primary gx-text-white"
            itemStyle="gx-package-body gx-text-white"
            footerStyle="gx-btn-primary"
          />
        </Col>

        <Col xl={8} lg={24} md={8} xs={24}>
          <ItemThird
            styleName="gx-package gx-bg-green-light"
            headerStyle="gx-package-header gx-bg-green gx-text-black"
            itemStyle="gx-package-body"
            footerStyle=""
          />
        </Col>
      </Row>
    </div>
  )
};

export default Classic;

