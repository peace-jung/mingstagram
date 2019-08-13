import React, { Component } from 'react';
import HeaderPresenter from './HeaderPresenter';

class HeaderContainer extends Component {
  state = { search: '' };

  render() {
    return (
      <HeaderPresenter
        {...this.state}
        onChangeState={this._handleChangeState}
      />
    );
  }

  _handleChangeState = (state, value) => {
    this.setState({ [state]: value });
  };
}

export default HeaderContainer;
