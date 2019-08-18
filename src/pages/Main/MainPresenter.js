import React from 'react';
import { useSelector } from 'react-redux';

import Feed from '../Feed';
import Login from '../Login';
import Header from '../../components/Header';

const MainPresenter = props => {
  const user = useSelector(state => state.user);
  const isLogin = user.id !== null && typeof user.id !== 'undefined';

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
