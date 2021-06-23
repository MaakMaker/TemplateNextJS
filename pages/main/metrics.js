import Head from 'next/head';
import dynamic from "next/dynamic";
import CircularProgress from "../../app/components/CircularProgress";
import React from "react";

const Metrics = dynamic(() => import('../../routes/main/Metrics'), {
  loading: () => <CircularProgress/>,
});

const MetricsPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Metrics</title>
      </Head>
      <Metrics/>
    </React.Fragment>
  );
}

export default MetricsPage;
