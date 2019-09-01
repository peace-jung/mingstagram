import { connect } from 'react-redux';
import HeaderContainer from './HeaderContainer';
import { actionCreators as accountAction } from '../../redux/modules/account';

const mapStateToProps = state => {
  const { account } = state;

  return {
    account
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => {
      return dispatch(accountAction.signOut());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
