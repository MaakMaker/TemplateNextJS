import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";


const Table = ({match}) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/basic`}/>
    <Route path={`${match.url}/basic`} component={asyncComponent(() => import('./Basic'))}/>
    <Route path={`${match.url}/data`} component={asyncComponent(() => import('./Data'))}/>
  </Switch>
);

export default Table;
