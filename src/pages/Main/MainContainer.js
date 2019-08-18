import React, { Component } from 'react';
import MainPresenter from './MainPresenter';

class MainContainer extends Component {
  render() {
    return <MainPresenter {...this.props} />;
  }
}

MainContainer.defaultProps = {
  user: {
    // id: 'peace'
  }
};

export default MainContainer;
