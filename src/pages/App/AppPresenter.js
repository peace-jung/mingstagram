import React from 'react';

import Header from './../../components/Header';

function AppPresenter() {
  return (
    <div className="App">
      <Header />

      {/* Router */}

      <div className="app-container">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Building
        </a>
      </div>
    </div>
  );
}

export default AppPresenter;
