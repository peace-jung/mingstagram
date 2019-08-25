import React from 'react';
import SettingUserProfile from '../../../components/SettingUserProfile';
import FeedItem from '../FeedItem';

const FeedListPresenter = props => {
  const {
    feed: { feedList }
  } = props;
  console.log('feedList', feedList);

  return (
    <div>
      <SettingUserProfile />

      <FeedItem />
    </div>
  );
};

export default FeedListPresenter;
