import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";


const Feedback = ({match}) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/alert`}/>
    <Route path={`${match.url}/alert`} component={asyncComponent(() => import('./Alert/'))}/>
    <Route path={`${match.url}/modal`} component={asyncComponent(() => import('./Modal/'))}/>
    <Route path={`${match.url}/message`} component={asyncComponent(() => import('./Message/'))}/>
    <Route path={`${match.url}/notification`} component={asyncComponent(() => import('./Notification/'))}/>
    <Route path={`${match.url}/progress`} component={asyncComponent(() => import('./Progress/'))}/>
    <Route path={`${match.url}/popconfirm`} component={asyncComponent(() => import('./PopConfirm/'))}/>
    <Route path={`${match.url}/spin`} component={asyncComponent(() => import('./Spin/'))}/>
  </Switch>
);

export default Feedback;
