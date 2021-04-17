import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LandingPage from './pages/Landing_Page';
import SignInPage from './pages/Sign_In_Page';
import Error404Page from './pages/Error_Page';

const AppRouter = () => (
  <Switch>
    <Route exact path="/landing" component={LandingPage} />
    <Route exact path="/sign-in" component={SignInPage} />
    <Route exact path="/error404" component={Error404Page} />
    <Redirect from="/" to="/landing" />
    <Redirect to="/error404" />
  </Switch>
);

export default AppRouter;
