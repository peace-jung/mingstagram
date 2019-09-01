import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../../redux';

import AppPresenter from './AppPresenter';
import Icons from '../../components/Icons';

class AppContainer extends Component {
  state = { isMobile: null };

  componentDidMount = () => {
    const isMobile = this._handleCheckMobileDevice();
    this.setState({ isMobile });
  };

  _handleCheckMobileDevice = () => {
    const mobileKeyWords = [
      'Android',
      'iPhone',
      'iPod',
      'BlackBerry',
      'Windows CE',
      'SAMSUNG',
      'LG',
      'MOT',
      'SonyEricsson'
    ];
    for (let i in mobileKeyWords) {
      if (navigator.userAgent.match(mobileKeyWords[i]) !== null) {
        return true;
      }
    }
    return false;
  };

  render() {
    const loading = (
      <span
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          marginTop: -25,
          marginLeft: -25
        }}
      >
        <Icons name={'instagram'} width={50} height={50} />
      </span>
    );

    return (
      <Provider store={store}>
        <PersistGate loading={loading} persistor={persistor}>
          <AppPresenter {...this.props} {...this.state} />
        </PersistGate>
      </Provider>
    );
  }
}

export default AppContainer;
