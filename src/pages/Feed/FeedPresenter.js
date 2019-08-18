import React from 'react';
import Recommand from './Recommand';

const FeedPresenter = props => {
  const { feed } = props;
  return feed.follow ? <Recommand /> : <Recommand />;
};

export default FeedPresenter;
