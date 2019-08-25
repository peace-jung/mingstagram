const SET_FOLLOWING_LIST = 'SET_FOLLOWING_LIST';
const SET_NEW_FEED = 'SET_NEW_FEED';

const initialState = {
  feedList: [],
  following: []
};

const setNewFeed = feedList => ({
  type: SET_NEW_FEED,
  feedList
});

const setFollowingList = following => ({
  type: SET_FOLLOWING_LIST,
  following
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_NEW_FEED:
      return applySetNewFeed(state, action);
    case SET_FOLLOWING_LIST:
      return applySetFollowingList(state, action);
    default:
      return state;
  }
}

const applySetNewFeed = (state, action) => {
  const { feedList } = action;
  return {
    ...state,
    feedList
  };
};

const applySetFollowingList = (state, action) => {
  const { following } = action;
  return {
    ...state,
    following
  };
};

export const actionCreators = {
  setNewFeed,
  setFollowingList
};

export default reducer;
