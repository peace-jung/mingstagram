/**
 * redux
 */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
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
 * 리듀서 합치기
 */
const reducer = combineReducers({
  account,
  feed,
  user
});

// export default reducer;

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [feed, user]
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
  persistedReducer,
  compose(applyMiddleware(...middlewares))
);
const persistor = persistStore(store);

export { store, persistor };
export default store;
