import React from 'react';

export default function Recommand(props) {
  const recommendItem = [
    {
      id: 'instagram1',
      nickname:
        'instagram1instagram1instagram1instagram1instagram1instagram1instagram1instagram1instagram1',
      profile_img: '1111111111',
      following: true
    },
    {
      id: '22id22id22id22id22',
      nickname: '2n2i2c2k2n2a2m2e2',
      profile_img: '222222222',
      following: false
    },
    {
      id: '22id22id22id22id22',
      nickname: '2n2i2c2k2n2a2m2e2',
      profile_img: '222222222',
      following: false
    },
    {
      id: '22id22id22id22id22',
      nickname: '2n2i2c2k2n2a2m2e2',
      profile_img: '222222222',
      following: false
    },
    {
      id: '22id22id22id22id22',
      nickname: '2n2i2c2k2n2a2m2e2',
      profile_img: '222222222',
      following: false
    },
    {
      id: '22id22id22id22id22',
      nickname: '2n2i2c2k2n2a2m2e2',
      profile_img: '222222222',
      following: false
    },
    {
      id: '22id22id22id22id22',
      nickname: '2n2i2c2k2n2a2m2e2',
      profile_img: '222222222',
      following: false
    },
    {
      id: '33id33id33id33id33',
      nickname: '3n3i3c3k3n3a3m3e3',
      profile_img: '33333333333',
      following: false
    }
  ];

  return (
    <div style={styles.contatiner}>
      <h4 style={styles.recommendTitle}>회원님을 위한 추천</h4>
      <div style={styles.recommends}>
        {recommendItem.map((item, index) => (
          <div style={styles.recommendItem} key={index}>
            <div className="profile_img" style={styles.profile_img}>
              {item.profile_img}
            </div>
            <div className="profile" style={styles.profile}>
              <div
                style={Object.assign({}, styles.userId, styles.overflowText)}
              >
                <span style={{ fontWeight: 600, cursor: '' }}>{item.id}</span>
              </div>
              <div style={Object.assign({}, styles.overflowText)}>
                <span>{item.nickname}</span>
              </div>
            </div>
            <div className="following" style={styles.following}>
              {item.following ? (
                <button type="button" className="ant-btn ant-btn-sm">
                  <span style={{ fontWeight: 700 }}>팔로잉</span>
                </button>
              ) : (
                <button
                  type="button"
                  className="ant-btn ant-btn-primary ant-btn-sm"
                >
                  <span style={{ fontWeight: 700 }}>팔로우</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  contatiner: {
    maxWidth: 600,
    margin: '0 auto',
    padding: '36px 0 16px'
  },
  recommendTitle: {
    fontWeight: 600,
    fontSize: 16
  },
  recommends: {
    border: 'solid',
    borderWidth: 1,
    borderColor: '#ececec',
    background: '#fff',
    paddingTop: 8,
    paddingBottom: 8
  },
  recommendItem: {
    display: 'flex',
    padding: '8px 16px'
  },

  profile_img: {
    flex: '0 0 auto',
    width: 54,
    height: 54,
    border: 'solid',
    borderWidth: 1,
    borderColor: '#ececec',
    marginRight: 12,
    borderRadius: '50%',
    overflow: 'hidden'
  },
  profile: {
    flex: '1 1 auto',
    overflow: 'hidden'
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  userId: { cursor: 'pointer' },
  overflowText: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  following: {
    flex: '0 0 auto',
    marginLeft: 12,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};
