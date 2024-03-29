import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NewsPage from '../containers/NewsPage.js';
import ProfilePage from '../containers/ProfilePage.js';
import PageNotFound from '../components/PageNotFound/PageNotFound.js';

export default (
  <Switch>
    <Route exact path="/" component={ NewsPage }/>
    <Route exact path="/profile" component={ ProfilePage }/>
    <Route path="*" component={ PageNotFound } />
  </Switch>
)
