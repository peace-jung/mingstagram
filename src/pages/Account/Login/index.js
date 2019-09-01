import { connect } from 'react-redux';
import LoginContainer from './LoginContainer';
import { actionCreators as accountAction } from '../../../redux/modules/account';

const mapStateToProps = state => {
  const { account } = state;

  return {
    account
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: (userId, name, nickname) => {
      return dispatch(accountAction.signIn(userId, name, nickname));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
