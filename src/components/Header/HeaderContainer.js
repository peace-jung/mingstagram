import React, { Component } from 'react';
import HeaderPresenter from './HeaderPresenter';

class HeaderContainer extends Component {
  state = { search: '' };

  render() {
    return (
      <HeaderPresenter
        {...this.state}
        onChangeState={this._handleChangeState}
        onSetRef={this._handleSetRef}
        onSignOut={this._handleSignOut}
      />
    );
  }

  _handleSignOut = () => {
    this.props.signOut();
  };

  _handleChangeState = (state, value) => {
    this.setState({ [state]: value });
  };

  _handleSetRef = (target, ref) => {
    this[target] = ref;
  };
}

export default HeaderContainer;
