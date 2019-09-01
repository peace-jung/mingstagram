import React, { Component } from 'react';
import UserFeedPresenter from './UserFeedPresenter';

class UserFeedContainer extends Component {
  render() {
    return <UserFeedPresenter {...this.props} />;
  }
}

export default UserFeedContainer;
