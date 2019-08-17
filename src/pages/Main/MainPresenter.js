import React from 'react';

import Feed from '../Feed';
import Login from '../Login';
import Header from '../../components/Header';

const MainPresenter = props => {
  const isLogin = typeof props.user.id !== 'undefined';
  return isLogin ? (
    <div>
      <Header />
      <Feed />
    </div>
  ) : (
    <Login />
  );
};

export default MainPresenter;
