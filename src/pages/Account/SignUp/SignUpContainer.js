import React, { Component } from 'react';

import SignUpPresenter from './SignUpPresenter';

class SignUpContainer extends Component {
  render() {
    return <SignUpPresenter onRegister={this._handelRegister} />;
  }

  _handelRegister = () => {
    this.props.history.push('/accounts/signin');
  };
}

export default SignUpContainer;
