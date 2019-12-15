const SIGNIN = 'ACCOUNT/SIGNIN';
const SIGNOUT = 'ACCOUNT/SIGNOUT';
const SET_DEVICE = 'ACCOUNT/SET_DEVICE';

const initialState = {
  isMobile: null,
  // user infomation
  birthday: null,
  id: null,
  name: null,
  phone: null,
  profile_img: null,
  title: null
  // userId: null,
  // name: null,
  // nickname: null,
  // profile_image: null,
  // introduction: null,
  // phone_number: null,
  // gender: null,
  // createdAt: null
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
  const { userInfo } = action;
  return {
    ...state,
    ...userInfo
  };
};

const applySignOut = state => {
  return {
    // ...state,
    ...initialState,
    isMobile: state.isMobile
  };
};

const applySetDevice = (state, action) => {
  return {
    ...state,
    isMobile: action.isMobile
  };
};

export const actionCreators = {};

export default reducer;
