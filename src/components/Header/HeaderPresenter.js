import React from 'react';

import Icons from '../Icons';

function HeaderPresenter(props) {
  const { search, onChangeState } = props;
  return (
    <div className="header">
      <div className="header-container ant-layout-header">
        <div
          className="header-logo ant-col ant-col-sm-8 ant-col-xs-0"
          style={styles.logo}
        >
          Mingstagram
        </div>

        <div className="header-search ant-col ant-col-sm-8 ant-col-xs-16">
          <span
            className="ant-input-search ant-input-affix-wrapper"
            style={{ width: 200 }}
          >
            <input
              placeholder="검색"
              className="ant-input"
              type="text"
              value={search}
              style={styles.searchInput}
              onChange={event => {
                onChangeState('search', event.target.value);
              }}
            />
            <span className="ant-input-suffix">
              <i
                aria-label="icon: search"
                tabIndex="-1"
                className="anticon anticon-search ant-input-search-icon"
              >
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  className=""
                  data-icon="search"
                  width="12px"
                  height="12px"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
                </svg>
              </i>
            </span>
          </span>
        </div>

        <div className="header-action ant-col ant-col-sm-8 ant-col-xs-8">
          <div className="ant-col ant-col-lg-12 ant-col-sm-8 ant-col-xs-0" />
          <div className="ant-col ant-col-lg-12 ant-col-sm-16 ant-col-xs-24">
            <span className="ant-col ant-col-8" style={styles.spanIcon}>
              <Icons name={'compase'} width={24} height={24} />
            </span>
            <span className="ant-col ant-col-8" style={styles.spanIcon}>
              <Icons name={'heart'} width={24} height={24} />
            </span>
            <span className="ant-col ant-col-8" style={styles.spanIcon}>
              <Icons name={'user'} width={24} height={24} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  logo: {
    fontSize: 24
  },
  searchInput: {
    textAlign: 'center'
  },
  spanIcon: {}
};

export default HeaderPresenter;
