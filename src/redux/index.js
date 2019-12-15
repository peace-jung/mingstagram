/**
 * redux
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native

import account from './modules/account';
import feed from './modules/feed';
import user from './modules/user';

const env = process.env.NODE_ENV;

const middlewares = [thunk];

if (env === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

/**
 * persistConfig
 */
const persistConfig = {
  key: 'root',
  storage: storage,
  timeout: null,
  whiteList: ['user'],
  blacklist: ['account', 'feed']
};

/**
 *  여러 모듈들을 결합하여 리듀서를 생성한다.
 */
const reducer = persistCombineReducers(persistConfig, {
  account,
  feed,
  user
});

let store = createStore(reducer, applyMiddleware(...middlewares));
let persistor = persistStore(store);

export { persistor, store };
