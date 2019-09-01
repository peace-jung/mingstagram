import MainContainer from './MainContainer';
import { connect } from 'react-redux';

import { actionCreators as accountAction } from './../../redux/modules/account';

// const mapStateToProps = state => {
//   const { user } = state;
//   return {
//     user
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    setDevice: isMobile => {
      return dispatch(accountAction.setDevice(isMobile));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(MainContainer);
