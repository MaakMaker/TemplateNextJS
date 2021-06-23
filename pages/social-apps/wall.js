import Head from 'next/head';
import asyncComponent from "../../util/asyncComponent";
import "../../routes/socialApps/social-apps.css";
import React from "react";

const Wall = asyncComponent(() => import('../../routes/socialApps/Wall'));

const WallPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Wall</title>
      </Head>
      <Wall/>
    </React.Fragment>
  );
}

export default WallPage;
