import React from 'react';
// import { useSelector } from 'react-redux';

import Feed from '../Feed';
import Login from '../Login';
import Header from '../../components/Header';

const MainPresenter = props => {
  const { user } = props;
  const isLogin = user.userId !== null && typeof user.userId !== 'undefined';

  return isLogin ? (
    <div style={{ minHeight: '100%', background: '#fafafa' }}>
      <Header />
      <div style={styles.main}>
        <Feed />
      </div>
    </div>
  ) : (
    <Login />
  );
};

const styles = {
  main: {
    maxWidth: 600,
    margin: '0 auto',
    padding: '36px 8px 16px'
  }
};

export default MainPresenter;
