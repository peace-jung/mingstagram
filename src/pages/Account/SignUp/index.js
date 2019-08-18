import { connect } from 'react-redux';
import SignUpContainer from './SignUpContainer';
import { actionCreators as userAction } from '../../../redux/modules/user';

const mapStateToProps = state => {
  const { user } = state;

  return {
    user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: (userId, name, nickname) => {
      return dispatch(userAction.signIn(userId, name, nickname));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpContainer);
