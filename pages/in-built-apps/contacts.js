import Head from 'next/head';
import asyncComponent from "../../util/asyncComponent";
import React from "react";

const Contact = asyncComponent(() => import('../../routes/inbuiltApps/Contact'));

const ContactPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Contacts</title>
      </Head>
      <Contact/>
    </React.Fragment>
  );
}

export default ContactPage;
