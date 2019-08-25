import React, { Component } from 'react';
import FeedPresenter from './FeedPresenter';

const feeds = [
  {
    id: 'id',
    userId: 'userId',
    title: 'title',
    description: 'description'
  }
];

class FeedContainer extends Component {
  constructor(props) {
    super(props);

    this.props.setNewFeed(feeds);
    this.props.setFollowingList([]);
  }

  render() {
    return <FeedPresenter />;
  }
}

export default FeedContainer;
