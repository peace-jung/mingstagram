import React from 'react';

const FeedItemPresenter = props => {
  return (
    <div style={styles.container}>
      <div>head</div>
      <div>img</div>
      <div>comment</div>
    </div>
  );
};

const styles = {
  container: {
    background: '#fff',
    border: 'solid 1px #ececec'
  }
};

export default FeedItemPresenter;
