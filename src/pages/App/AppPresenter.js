import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Account from '../Account';
import Main from '../Main';

const AppPresenter = () => {
  const { userId } = useSelector(state => state.user);
  const isLogin = userId !== null && typeof userId !== 'undefined';

  return isLogin ? <Main /> : <Account />;
};

export default AppPresenter;
