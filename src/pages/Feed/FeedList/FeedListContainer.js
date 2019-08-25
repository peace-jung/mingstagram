import React, { Component } from 'react';
import FeedListPresenter from './FeedListPresenter';

class FeedListContainer extends Component {
  render() {
    return <FeedListPresenter {...this.props} />;
  }
}

export default FeedListContainer;
