/**
 * redux
 */
import { combineReducers } from 'redux';
import user from './modules/user';

/**
 * 리듀서 합치기
 */
const reducer = combineReducers({
  user
});

export default reducer;
