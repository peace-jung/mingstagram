const SIGNIN = 'USER/SIGNIN';
const SIGNOUT = 'USER/SIGNOUT';

const signIn = (userId, name, nickname) => ({
  type: SIGNIN,
  userId,
  name,
  nickname
});
const signOut = () => ({ type: SIGNOUT });

const initialState = {
  isMobile: null,
  // user infomation
  userId: null,
  name: null,
  nickname: null,
  profile_image: null,
  introduction: null,
  phone_number: null,
  gender: null,
  createdAt: null
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
    userId: action.userId,
    name: action.name,
    nickname: action.nickname
  };
};

const applySignOut = state => {
  return {
    // ...state,
    userId: null,
    name: null,
    nickname: null
  };
};

export const actionCreators = {
  signIn,
  signOut
};

export default reducer;
