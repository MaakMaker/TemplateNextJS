import Head from 'next/head';
import CircularProgress from "../../app/components/CircularProgress";
import dynamic from "next/dynamic";
import React from "react";

const Widgets = dynamic(() => import('../../routes/main/Widgets'), {
  loading: () => <CircularProgress/>,
});

const WidgetsPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Widgets</title>
      </Head>
      <Widgets/>
    </React.Fragment>
  );
}

export default WidgetsPage;
