import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";


const DataDisplay = ({match}) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/avatar`}/>
    <Route path={`${match.url}/avatar`} component={asyncComponent(() => import('./Avatar/'))}/>
    <Route path={`${match.url}/badge`} component={asyncComponent(() => import('./Badge/'))}/>
    <Route path={`${match.url}/collapse`} component={asyncComponent(() => import('./Collapse/'))}/>
    <Route path={`${match.url}/calendar`} component={asyncComponent(() => import('./Calendar/'))}/>
    <Route path={`${match.url}/card`} component={asyncComponent(() => import('./Cards/'))}/>
    <Route path={`${match.url}/carousel`} component={asyncComponent(() => import('./Carousel/'))}/>
    <Route path={`${match.url}/list`} component={asyncComponent(() => import('./List/'))}/>
    <Route path={`${match.url}/popover`} component={asyncComponent(() => import('./Popover/'))}/>
    <Route path={`${match.url}/tree`} component={asyncComponent(() => import('./Tree/'))}/>
    <Route path={`${match.url}/tooltip`} component={asyncComponent(() => import('./Tooltip/'))}/>
    <Route path={`${match.url}/timeline`} component={asyncComponent(() => import('./TimeLine/'))}/>
    <Route path={`${match.url}/tag`} component={asyncComponent(() => import('./Tag/'))}/>
    <Route path={`${match.url}/tabs`} component={asyncComponent(() => import('./Tabs/'))}/>


  </Switch>
);

export default DataDisplay;
