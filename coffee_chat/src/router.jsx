import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LandingPage from './pages/Landing_Page';
import SignInPage from './pages/Sign_In_Page';
import Error404Page from './pages/Error_Page';
import Student_Profile from './pages/Student_Profile_Page'
import ProfessionalProfile from './pages/Professional_Profile/index'
import ProEditInfo from './pages/Professional_Profile/ProEditInfo'
import ProEditSched from './pages/Professional_Profile/ProEditSched'
import TopCompanyPage from "./pages/TopCompany_Page";
import PublicProInfo from './pages/PublicViews/ProfessionalPublicView/index.jsx'
import StudentEditInfo from  './pages/Student_Profile_Page/StudentEditInfo'
import SchedulePage from "./pages/Schedule_Page";

const AppRouter = () => (
  <Switch>
    <Route exact path="/landing" component={LandingPage} />
    <Route exact path="/sign-in" component={SignInPage} />
    <Route exact path="/error404" component={Error404Page} />
    <Route exact path="/studentprofile" component={Student_Profile} />
    <Route exact path="/professionalprofile" component={ProfessionalProfile} />
    <Route exact path="/student_edit" component={StudentEditInfo} />
    <Route exact path="/pro-edit" component={ProEditInfo} />
    <Route exact path="/schedit" component={ProEditSched} />
    <Route exact path="/professional_public" component={PublicProInfo} />
    <Route exact path="/topcompanies" component={TopCompanyPage} />
    <Route exact path="/schedule" component={SchedulePage} />
    <Redirect from="/" to="/landing" />
    <Redirect to="/error404" />
  </Switch>
);

export default AppRouter;
