import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Header from '../../components/Header';
import Icons from '../../components/Icons';
const Explore = lazy(() => import('../Explore'));
const Feed = lazy(() => import('../Feed'));
const UserFeed = lazy(() => import('../UserFeed'));

export default function Main(props) {
  const dispatch = useDispatch();

  const loading = (
    <span style={styles.loading}>
      <Icons name={'instagram'} width={50} height={50} />
    </span>
  );

  useEffect(() => {
    dispatch({ type: 'ACCOUNT/SET_DEVICE', isMobile: props.isMobile });
  }, []);

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
}

const styles = {
  loading: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    marginTop: -25,
    marginLeft: -25
  }
};
