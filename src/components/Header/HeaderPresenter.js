import React from 'react';
import { Link } from 'react-router-dom';

import Icons from '../Icons';

const HeaderPresenter = props => {
  const { search, onChangeState } = props;
  return (
    <div className="header">
      <div className="header-container ant-layout-header">
        <div
          className="header-logo ant-col ant-col-sm-8 ant-col-xs-3"
          style={styles.logo}
        >
          <Link to="/#" style={{ color: '#333' }}>
            <span
              className="ant-col ant-col-sm-4 ant-col-xs-24"
              style={{ textAlign: 'center' }}
            >
              <Icons name={'instagram'} width={30} height={30} />
            </span>
            <span className="ant-col ant-col-sm-20 ant-col-xs-0">
              Mingstagram
            </span>
          </Link>
        </div>

        <div className="header-search ant-col ant-col-sm-8 ant-col-xs-14">
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
              <Icons name={'search'} width={12} height={12} />
            </span>
          </span>
        </div>

        <div className="header-action ant-col ant-col-sm-8 ant-col-xs-7">
          <div className="ant-col ant-col-lg-12 ant-col-sm-8 ant-col-xs-0" />
          <div className="ant-col ant-col-lg-12 ant-col-sm-16 ant-col-xs-24">
            <Link to="/#">
              <span className="ant-col ant-col-8" style={styles.spanIcon}>
                <Icons name={'compase'} width={24} height={24} />
              </span>
            </Link>
            <Link to="/#">
              <span className="ant-col ant-col-8" style={styles.spanIcon}>
                <Icons name={'heart'} width={24} height={24} />
              </span>
            </Link>
            <Link to="/#">
              <span className="ant-col ant-col-8" style={styles.spanIcon}>
                <Icons name={'user'} width={24} height={24} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  logo: {
    fontSize: 24
  },
  searchInput: {
    textAlign: 'center'
  },
  spanIcon: {
    color: '#333'
  }
};

export default HeaderPresenter;
