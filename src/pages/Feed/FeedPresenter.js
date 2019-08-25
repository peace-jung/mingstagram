import React from 'react';
import { useSelector } from 'react-redux';
import Recommand from './Recommand';
import FeedList from './FeedList';

const FeedPresenter = props => {
  const feed = useSelector(state => state.feed);

  return feed.feedList.length > 0 ? <FeedList feed={feed} /> : <Recommand />;
};

export default FeedPresenter;
