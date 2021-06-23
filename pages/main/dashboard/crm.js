import React from 'react';
import Head from 'next/head';
import dynamic from "next/dynamic";
import CircularProgress from "../../../app/components/CircularProgress";

const CRM = dynamic(() => import('../../../routes/main/Dashboard/CRM'), {
  loading: () => <CircularProgress/>,
});

const CrmDashboard = () => (
  <React.Fragment>
    <Head>
      <title>CRM Dashboard</title>
    </Head>
    <CRM/>
  </React.Fragment>
);

export default CrmDashboard;
