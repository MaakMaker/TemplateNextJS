import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";


const Components = ({match}) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/anchor`}/>
    <Route path={`${match.url}/anchor`} component={asyncComponent(() => import('./Anchor/'))}/>
    <Route path={`${match.url}/backtop`} component={asyncComponent(() => import('./BackTop/'))}/>
    <Route path={`${match.url}/divider`} component={asyncComponent(() => import('./Divider/'))}/>
  </Switch>
);

export default Components;
