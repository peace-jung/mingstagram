import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../redux';

import AppPresenter from './AppPresenter';

const store = createStore(rootReducer);

class AppContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppPresenter />
      </Provider>
    );
  }
}

export default AppContainer;
