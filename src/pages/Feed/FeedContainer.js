import React, { Component } from 'react';
import FeedPresenter from './FeedPresenter';

class FeedContainer extends Component {
  render() {
    console.log(this.props.user)
    return <FeedPresenter />;
  }
}

export default FeedContainer;
