import React, { Component } from 'react';
import LoginPresenter from './LoginPresenter';

class LoginContainer extends Component {
  render() {
    return <LoginPresenter onLogin={this._handleLogin} />;
  }

  _handleLogin = () => {
    console.log('_handleLogin');
  };
}

export default LoginContainer;
