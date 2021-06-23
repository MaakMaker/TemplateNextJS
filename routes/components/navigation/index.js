import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";


const navigation = ({match}) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/affix`}/>
    <Route path={`${match.url}/affix`} component={asyncComponent(() => import('./Affix/'))}/>
    <Route path={`${match.url}/breadcrumb`} component={asyncComponent(() => import('./Breadcrumb/'))}/>
    <Route path={`${match.url}/dropdown`} component={asyncComponent(() => import('./Dropdown/'))}/>
    <Route path={`${match.url}/Menu`} component={asyncComponent(() => import('./Menu/'))}/>
    <Route path={`${match.url}/pagination`} component={asyncComponent(() => import('./Pagination/'))}/>
    <Route path={`${match.url}/steps`} component={asyncComponent(() => import('./Steps/'))}/>
  </Switch>
);

export default navigation;
