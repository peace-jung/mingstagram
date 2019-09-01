import React from 'react';
import SettingUserProfile from '../../../components/SettingUserProfile';
import FeedItem from '../FeedItem';

const FeedListPresenter = props => {
  const {
    feed: { feedList }
  } = props;
  // console.log('feedList', feedList);

  return (
    <div style={styles.container}>
      <SettingUserProfile />

      {feedList &&
        feedList.map((feed, index) => <FeedItem feed={feed} key={index} />)}
    </div>
  );
};

const styles = {
  container: { maxWidth: 600, margin: '0 auto', padding: '36px 0 16px' }
};

export default FeedListPresenter;
