import React from "react";
import {Col, Row} from "antd";

import MenuThemes from "./MenuThemes";
import NavigationTop from "./NavigationTop";
import CollapsedMenu from "./CollapsedMenu";
import CurrentSubMenu from "./CurrentSubMenu";
import VerticalMenu from "./VerticalMenu";
import SwitchMenu from "./SwitchMenu";

const Menus = () => (
  <Row>
    <Col span={24}>
      <NavigationTop/>
    </Col>
    <Col lg={12} md={12} sm={24} xs={24}>
      <VerticalMenu/>
      <MenuThemes/>
      <CollapsedMenu/>
    </Col>
    <Col lg={12} md={12} sm={24} xs={24}>
          <CurrentSubMenu/>
          <SwitchMenu/>
        </Col>
      </Row>
)

export default Menus;
