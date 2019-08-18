import React, { Component } from 'react';
import LoginPresenter from './LoginPresenter';

class LoginContainer extends Component {
  render() {
    return <LoginPresenter onLogin={this._handleLogin} />;
  }

  _handleLogin = () => {
    console.log('_handleLogin');
    this.props.signIn('peace', 'peace', '피스');
  };
}

export default LoginContainer;
