import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";

const general = ({match}) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/button`}/>
    <Route path={`${match.url}/button`} component={asyncComponent(() => import('./Button/'))}/>
    <Route path={`${match.url}/icon`} component={asyncComponent(() => import('./Icon/'))}/>
  </Switch>
);

export default general;
