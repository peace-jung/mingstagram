import { connect } from 'react-redux';
import HeaderContainer from './HeaderContainer';
import { actionCreators as userAction } from '../../redux/modules/user';

const mapStateToProps = state => {
  const { user } = state;

  return {
    user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => {
      return dispatch(userAction.signOut());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
