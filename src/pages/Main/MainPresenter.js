import React from 'react';
// import { useSelector } from 'react-redux';

import Feed from '../Feed';
import Login from '../Login';
import Header from '../../components/Header';

const MainPresenter = props => {
  const { user } = props;
  // const user = useSelector(state => state.user);
  const isLogin = user.userId !== null && typeof user.userId !== 'undefined';

  return isLogin ? (
    <div style={{ height: '100%', background: '#fafafa' }}>
      <Header />
      <Feed />
    </div>
  ) : (
    <Login />
  );
};

export default MainPresenter;
