import { connect } from 'react-redux';
import UserFeedContainer from './UserFeedContainer';
import { actionCreators as userAction } from './../../redux/modules/user';

const mapStateToProps = state => {
  const {
    account: { isMobile },
    user
  } = state;

  return {
    isMobile,
    user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setInitUser: feed => {
      return dispatch(userAction.setInitUser(feed));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserFeedContainer);
