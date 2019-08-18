import React, { Component } from 'react';
import FeedPresenter from './FeedPresenter';

class FeedContainer extends Component {
  render() {
    console.log(this.props.feed);
    return <FeedPresenter {...this.props} />;
  }
}

export default FeedContainer;
