import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Icons from '../Icons';

const HeaderPresenter = props => {
  const { userId } = useSelector(state => state.account);

  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const onSignOut = () => {
    dispatch({ type: 'ACCOUNT/SIGNOUT' });
  };

  return (
    <div className="header" style={{ background: '#fff' }}>
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
              <Icons
                name={'instagram'}
                width={30}
                height={30}
                style={styles.iconAlign}
              />
            </span>
            <span
              className="ant-col ant-col-sm-20 ant-col-xs-0"
              style={styles.logoFont}
            >
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
              onChange={event => setSearch(event.target.value)}
            />
            <span className="ant-input-suffix">
              <Icons name={'search'} width={12} height={12} />
            </span>
          </span>
        </div>

        <div className="header-action ant-col ant-col-sm-8 ant-col-xs-7">
          <div className="ant-col ant-col-lg-12 ant-col-sm-8 ant-col-xs-0" />
          <div className="ant-col ant-col-lg-12 ant-col-sm-16 ant-col-xs-24">
            <Link to="/explore">
              <span className="ant-col ant-col-7" style={styles.spanIcon}>
                <Icons
                  name={'compase'}
                  width={24}
                  height={24}
                  style={styles.iconAlign}
                />
              </span>
            </Link>
            <Link to="/#">
              <span className="ant-col ant-col-7" style={styles.spanIcon}>
                <Icons
                  name={'heart'}
                  width={24}
                  height={24}
                  style={styles.iconAlign}
                />
              </span>
            </Link>
            <Link to={`/${userId}`}>
              <span>
                <span className="ant-col ant-col-7" style={styles.spanIcon}>
                  <Icons
                    name={'user'}
                    width={24}
                    height={24}
                    style={styles.iconAlign}
                  />
                </span>
              </span>
            </Link>
            <span onClick={onSignOut}>
              <span className="ant-col ant-col-3" style={styles.spanIcon}>
                <Icons
                  name={'ellipsis'}
                  width={10}
                  height={10}
                  style={styles.iconAlign}
                />
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  logo: {},
  logoFont: { fontSize: 24, fontFamily: 'cursive' },
  searchInput: {
    textAlign: 'center'
  },
  spanIcon: {
    color: '#333'
  },
  iconAlign: {
    verticalAlign: 'middle'
  }
};

export default HeaderPresenter;
