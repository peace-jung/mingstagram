import { connect } from 'react-redux';
import MainContainer from './MainContainer';

const mapStateToProps = state => {
  const { user } = state;

  return {
    user
  };
};

export default connect(
  mapStateToProps,
  null
)(MainContainer);
