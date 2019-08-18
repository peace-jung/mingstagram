import { connect } from 'react-redux';
import FeedContainer from './FeedContainer';

const mapStateToProps = state => {
  const { user, feed } = state;

  return {
    user,
    feed
  };
};

// const mapDispatchToProps

export default connect(
  mapStateToProps,
  null
)(FeedContainer);
