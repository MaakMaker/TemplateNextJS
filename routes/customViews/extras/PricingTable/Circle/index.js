import React from "react";
import {Col, Row} from "antd";
import ItemFirst from "../ItemFirst";
import ItemSecond from "../ItemSecond";
import ItemThird from "../ItemThird";

const Circle = () => {
  return (
    <div className="gx-price-tables gx-pt-circle">
      <Row>
        <Col xl={8} lg={24} md={8} xs={24}>
          <ItemFirst
            styleName="gx-package"
            headerStyle="gx-package-header gx-bg-yellow gx-text-black"
            itemStyle="gx-package-body"
            footerStyle="gx-btn-block"
          />
        </Col>

        <Col xl={8} lg={24} md={8} xs={24}>
          <ItemSecond
            styleName="gx-package gx-bg-primary-light gx-highlight gx-border-0"
            headerStyle="gx-package-header gx-bg-primary gx-text-white"
            itemStyle="gx-package-body gx-text-white"
            footerStyle="gx-btn-block gx-btn-yellow"
          />
        </Col>

        <Col xl={8} lg={24} md={8} xs={24}>
          <ItemThird
            styleName="gx-package"
            headerStyle="gx-package-header gx-bg-green gx-text-black"
            itemStyle="gx-package-body"
            footerStyle="gx-btn-block"
          />
        </Col>
      </Row>
    </div>
  )
};
export default Circle;

