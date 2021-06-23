import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";


const DataEntry = ({match}) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/autoComplete`}/>
    <Route path={`${match.url}/autoComplete`} component={asyncComponent(() => import('./AutoComplete/'))}/>
    <Route path={`${match.url}/checkbox`} component={asyncComponent(() => import('./Checkbox/'))}/>
    <Route path={`${match.url}/cascader`} component={asyncComponent(() => import('./Cascader/'))}/>
    <Route path={`${match.url}/datePicker`} component={asyncComponent(() => import('./DatePicker/'))}/>
    <Route path={`${match.url}/form`} component={asyncComponent(() => import('./Form/'))}/>
    <Route path={`${match.url}/inputNumber`} component={asyncComponent(() => import('./InputNumber/'))}/>
    <Route path={`${match.url}/input`} component={asyncComponent(() => import('./Input/'))}/>
    <Route path={`${match.url}/mention`} component={asyncComponent(() => import('./Mention/'))}/>
    <Route path={`${match.url}/rate`} component={asyncComponent(() => import('./Rate/'))}/>
    <Route path={`${match.url}/radio`} component={asyncComponent(() => import('./Radio/'))}/>
    <Route path={`${match.url}/select`} component={asyncComponent(() => import('./Select/'))}/>
    <Route path={`${match.url}/slider`} component={asyncComponent(() => import('./Slider/'))}/>
    <Route path={`${match.url}/switch`} component={asyncComponent(() => import('./Switches/'))}/>
    <Route path={`${match.url}/treeSelect`} component={asyncComponent(() => import('./TreeSelect/'))}/>
    <Route path={`${match.url}/timePicker`} component={asyncComponent(() => import('./TimePicker/'))}/>
    <Route path={`${match.url}/transfer`} component={asyncComponent(() => import('./Transfer/'))}/>
    <Route path={`${match.url}/upload`} component={asyncComponent(() => import('./Upload/'))}/>
  </Switch>
);

export default DataEntry;
