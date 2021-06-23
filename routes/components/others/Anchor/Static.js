import React from "react";
import {Anchor, Card} from "antd";

const {Link} = Anchor;

const Static = () => {
  return (
    <Card title="Static" className="gx-card">
      <Anchor affix={false}>
        <Link href="#basic-demo" title="Basic demo"/>
        <Link href="#fixed-demo;" title="Fixed demo"/>
        <Link href="#api" title="API">
          <Link href="#anchor-props" title="Anchor Props"/>
          <Link href="#link-props" title="Link Props"/>
        </Link>
      </Anchor>
    </Card>
  );
};

export default Static;
