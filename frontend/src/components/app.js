import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import JobsContainer from './jobs/jobs_container';
import Modal from './modal/modal_container';
import NewJobsContainer from './jobs/jobs_container';

const App = () => (
    <div>
        <Modal/>
        <NavBarContainer />
        {/* <MainPage /> */}
        <Switch>
            <Route exact path="/" component={MainPage} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/jobs" component={JobsContainer} />
            <ProtectedRoute exact path='/jobslist' component={NewJobsContainer}/>
        </Switch>
    </div>
);

export default App;