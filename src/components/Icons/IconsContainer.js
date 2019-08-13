import React, { Component } from 'react';
import IconsPresenter from './IconsPresenter';

class IconsContainer extends Component {
  render() {
    return <IconsPresenter {...this.props} />;
  }
}

export default IconsContainer;
