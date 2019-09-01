import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../../components/Header';
import Icons from '../../components/Icons';
const Explore = lazy(() => import('../Explore'));
const Feed = lazy(() => import('../Feed'));
const UserFeed = lazy(() => import('../UserFeed'));

const MainPresenter = () => {
  const loading = (
    <span style={styles.loading}>
      <Icons name={'instagram'} width={50} height={50} />
    </span>
  );

  return (
    <div style={{ minHeight: '100%', background: '#fafafa' }}>
      <Router>
        <Suspense fallback={loading}>
          <Header />
          <div>
            <Switch>
              <Route exact path="/" component={Feed} />
              <Route path="/explore" component={Explore} />
              <Route component={UserFeed} />
            </Switch>
          </div>
        </Suspense>
      </Router>
    </div>
  );
};

const styles = {
  loading: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    marginTop: -25,
    marginLeft: -25
  }
};

export default MainPresenter;
