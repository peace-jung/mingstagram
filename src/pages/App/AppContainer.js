import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../../redux';

import AppPresenter from './AppPresenter';

class AppContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppPresenter />
        </PersistGate>
      </Provider>
    );
  }
}

export default AppContainer;
