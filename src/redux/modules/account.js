const SIGNIN = 'ACCOUNT/SIGNIN';
const SIGNOUT = 'ACCOUNT/SIGNOUT';
const SET_DEVICE = 'ACCOUNT/SET_DEVICE';

const signIn = (userId, name, nickname) => ({
  type: SIGNIN,
  userId,
  name,
  nickname
});

const signOut = () => ({ type: SIGNOUT });

const setDevice = isMobile => ({ type: SET_DEVICE, isMobile });

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
    case SET_DEVICE:
      return applySetDevice(state, action);
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

const applySetDevice = (state, action) => {
  return {
    ...state,
    isMobile: action.isMobile
  };
};

export const actionCreators = {
  signIn,
  signOut,
  setDevice
};

export default reducer;
