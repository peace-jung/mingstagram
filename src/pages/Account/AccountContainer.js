import React, { Component } from 'react';

import AccountPresenter from './AccountPresenter';

class AccountContainer extends Component {
  componentWillUnmount = () => {
    // window.location.href = '/#';
  };

  render() {
    return <AccountPresenter />;
  }
}

export default AccountContainer;
