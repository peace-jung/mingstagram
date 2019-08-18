import { connect } from 'react-redux';
import FeedContainer from './FeedContainer';

const mapStateToProps = state => {
  const { user } = state;

  return {
    user
  };
};

// const mapDispatchToProps

export default connect(
  mapStateToProps,
  null
)(FeedContainer);
