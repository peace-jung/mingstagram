import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ResetPassword from './ResetPassword';
import SignUp from './SignUp';
import Page404 from '../Page404';

const AccountPresenter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/accounts/reset/password" component={ResetPassword} />
        <Route path="/accounts/signup" component={SignUp} />
        <Route path="*" component={Page404} />
      </Switch>
    </Router>
  );
};

export default AccountPresenter;
