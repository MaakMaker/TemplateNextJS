import Head from 'next/head';
import asyncComponent from "../../util/asyncComponent";
import "../../routes/socialApps/social-apps.css";
import React from "react";

const Profile = asyncComponent(() => import('../../routes/socialApps/Profile'));

const ProfilePage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Profile</title>
      </Head>
      <Profile/>
    </React.Fragment>
  );
}

export default ProfilePage;
