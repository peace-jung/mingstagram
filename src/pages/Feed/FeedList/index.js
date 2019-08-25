import { connect } from 'react-redux';
import FeedListContainer from './FeedListContainer';

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
)(FeedListContainer);
