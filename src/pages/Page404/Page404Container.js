import React, { Component } from 'react';
import Page404Presenter from './Page404Presenter';

class Page404Container extends Component {
  render() {
    return <Page404Presenter {...this.props} />;
  }
}

export default Page404Container;
