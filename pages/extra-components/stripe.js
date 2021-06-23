import React from 'react';
import asyncComponent from '../../util/asyncComponent';
import {Head} from "next/document";

const Stripe = asyncComponent(() => import('../../routes/extraComponents/Stripe'));

const StripePage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Stripe</title>
      </Head>
      <Stripe/>
    </React.Fragment>
  );
}

export default StripePage;
