import Head from 'next/head';
import dynamic from "next/dynamic";
import CircularProgress from "../../app/components/CircularProgress";
import React from "react";

const Layouts = dynamic(() => import('../../routes/main/Layouts'), {
  loading: () => <CircularProgress/>,
});

const LayoutsPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Layouts</title>
      </Head>
      <Layouts/>
    </React.Fragment>
  );
}

export default LayoutsPage;
