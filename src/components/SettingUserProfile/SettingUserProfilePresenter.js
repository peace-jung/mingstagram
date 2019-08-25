import React from 'react';

const SettingUserProfilePresenter = props => {
  return (
    <div style={styles.wrapper}>
      <h4 style={styles.title}>시작하기</h4>
      <div style={styles.container}>
        <div style={styles.settingItem}>SettingUserProfile</div>
        <div style={styles.settingItem}>SettingUserProfile</div>
        <div style={styles.settingItem}>SettingUserProfile</div>
      </div>
    </div>
  );
};

SettingUserProfilePresenter.defaultProps = {};

const styles = {
  wrapper: { padding: '0 8px' },
  container: {
    // width: '100%',
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'auto',
    overflowY: 'hidden',
    marginBottom: 36,
    marginLeft: -4
  },
  title: {
    fontWeight: 600,
    fontSize: 16
  },
  settingItem: {
    padding: 12,
    minWidth: 250,
    minHeight: 250,
    border: 'solid 1px #ececec',
    background: '#fff',
    margin: '0 4px'
  }
};

export default SettingUserProfilePresenter;
