import React from 'react';
import Icons from '../../../components//Icons';
import img1 from '../../../assets/img/profile1.png';
import img2 from '../../../assets/img/profile2.png';
import img3 from '../../../assets/img/profile3.png';

const FeedItemPresenter = props => {
  const { feed } = props;
  return (
    <div style={styles.container}>
      <div style={styles.head}>
        <div style={styles.profile_image}>
          <span style={{ cursor: 'pointer' }}>{feed.profile_img}</span>
        </div>
        <div style={styles.profile_id}>
          <span style={{ cursor: 'pointer' }}>{feed.userId}</span>
        </div>
        <div style={styles.profile_more}>
          <Icons
            name={'ellipsis'}
            width={20}
            height={20}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>
      <div style={styles.imageContainer}>
        {feed.image === '1' ? (
          <img src={img1} alt="img" />
        ) : feed.image === '2' ? (
          <img src={img2} alt="img" />
        ) : feed.image === '3' ? (
          <img src={img3} alt="img" />
        ) : (
          <span>no image</span>
        )}
      </div>
      <div style={styles.commentContainer}>comment</div>
    </div>
  );
};

const styles = {
  container: {
    background: '#fff',
    border: 'solid 1px #ececec',
    marginBottom: 60
  },
  head: {
    height: 60,
    padding: 16,
    display: 'flex'
  },
  profile_image: {
    flex: '0 0 auto',
    width: 28,
    height: 28,
    border: 'solid 1px #ececec',
    borderRadius: '50%'
  },
  profile_id: {
    flex: '1 1 auto',
    marginLeft: 16,
    display: 'flex',
    alignItems: 'center'
  },
  profile_more: {
    flex: '0 0 auto',
    marginLeft: 16,
    display: 'flex',
    alignItems: 'center'
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  commentContainer: {
    padding: 4
  }
};

export default FeedItemPresenter;
