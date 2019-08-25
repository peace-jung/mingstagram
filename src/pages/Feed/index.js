import { connect } from 'react-redux';
import FeedContainer from './FeedContainer';
import { actionCreators as feedAction } from './../../redux/modules/feed';

const mapStateToProps = state => {
  const { user } = state;

  return {
    user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setNewFeed: feed => {
      return dispatch(feedAction.setNewFeed(feed));
    },
    setFollowingList: following => {
      return dispatch(feedAction.setFollowingList(following));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedContainer);
