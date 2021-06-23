import React from 'react';
import SignInPage from "./signin";
import {useAuth} from "../util/use-auth";
import CrmDashboard from "./main/dashboard/crm";

const homePage = () => {
  const {user} = useAuth();

  return user ? <CrmDashboard/> : <SignInPage/>;
}

export default homePage;
