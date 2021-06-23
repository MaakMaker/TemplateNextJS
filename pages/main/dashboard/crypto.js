import React from "react";
import Head from 'next/head';
import dynamic from "next/dynamic";
import CircularProgress from "../../../app/components/CircularProgress";

const Crypto = dynamic(() => import('../../../routes/main/Dashboard/Crypto'), {
  loading: () => <CircularProgress/>,
});

const CryptoPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Crypto Dashboard</title>
      </Head>
      <Crypto/>
    </React.Fragment>
  );
}

export default CryptoPage;
