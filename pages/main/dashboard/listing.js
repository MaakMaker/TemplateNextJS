import React from "react";
import Head from 'next/head';
import dynamic from "next/dynamic";
import CircularProgress from "../../../app/components/CircularProgress";

const Listing = dynamic(() => import('../../../routes/main/Dashboard/Listing'), {
  loading: () => <CircularProgress/>,
});

const ListingPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Listing Dashboard</title>
      </Head>
      <Listing/>
    </React.Fragment>
  );
}

export default ListingPage;
