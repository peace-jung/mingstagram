const SIGNIN = 'USER/SIGNIN';
const SIGNOUT = 'USER/SIGNOUT';

const signIn = data => ({ type: SIGNIN, ...data });
const signOut = () => ({ type: SIGNOUT });

const initialState = {
  id: null,
  name: null,
  nickname: null
  // id: 'peace',
  // name: 'peace',
  // nickname: '피스'
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SIGNIN:
      return applySignIn(state, action);
    case SIGNOUT:
      return applySignOut(state);
    default:
      return state;
  }
}

const applySignIn = (state, action) => {
  return {
    ...state,
    id: action.id,
    name: action.name,
    nickname: action.nickname
  };
};

const applySignOut = state => {
  return {
    // ...state,
    id: null,
    name: null,
    nickname: null
  };
};

export const actionCreators = {
  signIn,
  signOut
};

export default reducer;
