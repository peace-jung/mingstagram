import React from 'react';
import SettingUserProfile from '../../../components/SettingUserProfile';
import FeedItem from '../FeedItem';

const FeedListPresenter = props => {
  const {
    feed: { feedList }
  } = props;
  // console.log('feedList', feedList);

  return (
    <div>
      <SettingUserProfile />

      {feedList &&
        feedList.map((feed, index) => <FeedItem feed={feed} key={index} />)}
    </div>
  );
};

export default FeedListPresenter;
