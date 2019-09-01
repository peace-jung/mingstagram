import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ResetPassword from './ResetPassword';
import SignUp from './SignUp';
import Login from './Login';
import Page404 from '../Page404';

const AccountPresenter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/accounts/reset/password" component={ResetPassword} />
        <Route exact path="/accounts/signup" component={SignUp} />
        <Route exact path="/accounts/signin" component={Login} />
        <Route component={Page404} />
      </Switch>
    </Router>
  );
};

export default AccountPresenter;
