import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Icons from '../../components/Icons';

const Main = lazy(() => import('../Main'));
const Account = lazy(() => import('../Account'));
const Page404 = lazy(() => import('../Page404'));

const AppPresenter = () => {
  const loading = (
    <span style={styles.loading}>
      <Icons name={'instagram'} width={50} height={50} />
    </span>
  );

  return (
    <Router>
      <Suspense fallback={loading}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/#" component={Main} />
          <Route path="/accounts" component={Account} />
          <Route component={Page404} />
        </Switch>
      </Suspense>
    </Router>
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

export default AppPresenter;
