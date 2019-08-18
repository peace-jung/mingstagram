import React, { Component } from 'react';

import SignUpPresenter from './SignUpPresenter';

class SignUpContainer extends Component {
  render() {
    console.log(this.props.signIn)
    return <SignUpPresenter onRegister={this._handelRegister} />;
  }

  _handelRegister = () => {
    this.props.history.push('/accounts/signin');
  };
}

export default SignUpContainer;
