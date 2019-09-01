import React from 'react';
import { useSelector } from 'react-redux';
import Account from '../Account';
import Main from '../Main';

const AppPresenter = () => {
  const { userId } = useSelector(state => state.account);
  const isLogin = userId !== null && typeof userId !== 'undefined';

  return isLogin ? <Main /> : <Account />;
};

export default AppPresenter;
