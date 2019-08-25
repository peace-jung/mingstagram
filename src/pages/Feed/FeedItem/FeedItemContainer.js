import React, { Component } from 'react';
import FeedItemPresenter from './FeedItemPresenter';

class FeedItemContainer extends Component {
  render() {
    return <FeedItemPresenter {...this.props} />;
  }
}

export default FeedItemContainer;
