const SET_INIT_USER = 'USER/SET_INIT_USER';
const SET_USER_FEED = 'USER/SET_USER_FEED';

const setInitUser = () => ({
  type: SET_INIT_USER
});

const setUserFeed = data => ({
  type: SET_USER_FEED,
  data
});

const initialState = {
  userId: null,
  name: null,
  nickname: null,
  profile_image: null,
  introduction: null,
  phone_number: null,
  gender: null,
  createdAt: null,
  feedList: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_INIT_USER:
      return applySetInitUser(state, action);
    case SET_USER_FEED:
      return applySetUserFeed(state, action);
    default:
      return state;
  }
}

const applySetInitUser = () => {
  return {
    userId: null,
    name: null,
    nickname: null,
    profile_image: null,
    introduction: null,
    phone_number: null,
    gender: null,
    createdAt: null,
    feedList: null
  };
};

const applySetUserFeed = (state, action) => {
  return {
    userId: action.userId,
    name: action.name,
    nickname: action.nickname,
    profile_image: action.profile_image,
    introduction: action.introduction,
    phone_number: action.phone_number,
    gender: action.gender,
    createdAt: action.createdAt,
    feedList: action.feedList
  };
};

export const actionCreators = {
  setInitUser,
  setUserFeed
};

export default reducer;
