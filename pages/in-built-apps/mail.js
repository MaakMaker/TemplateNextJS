import Head from 'next/head';
import asyncComponent from "../../util/asyncComponent";
import React from "react";

const Mail = asyncComponent(() => import('../../routes/inbuiltApps/Mail'));

const MailPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Mails</title>
      </Head>
      <Mail/>
    </React.Fragment>
  );
}

export default MailPage;
