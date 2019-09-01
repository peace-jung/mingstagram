import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Page404 from '../Page404';
import Icons from '../../components/Icons';
import defaultImage from '../../assets/img/profile1.png';

const UserFeedPresenter = props => {
  const { isMobile, user } = props;

  return (
    <Div>
      <Container className="">
        <div
          className="ant-col ant-col-sm-6 ant-col-xs-8"
          style={{ textAlign: 'center' }}
        >
          <ProfileImage src={defaultImage} />
        </div>
        <div
          className="ant-col ant-col-sm-18 ant-col-xs-16"
          style={styles.profile}
        >
          <div style={{ flex: 'auto' }}>
            {/* <h1>{user.userId}</h1> */}
            <h1>peace</h1>
          </div>

          <div style={{ flex: 'auto', marginBottom: 16 }}>
            <SpanProfile>
              게시물&nbsp;
              <SpanCount>411</SpanCount>
            </SpanProfile>
            <SpanProfile>
              팔로워&nbsp;
              <SpanCount>1.4백만</SpanCount>
            </SpanProfile>
            <SpanProfile>
              팔로우&nbsp;
              <SpanCount>113</SpanCount>
            </SpanProfile>
          </div>

          <div style={{ flex: 'auto', fontWeight: 700, fontSize: 16 }}>
            <span>피스정</span>
            <p style={{ marginBottom: 0 }}>
              <a href="https://github.com/peace-jung">github.com/peace-jung</a>
            </p>
          </div>
        </div>
      </Container>

      <div>
        <div style={{ textAlign: 'center' }}>
          <SpanCategory style={{ marginRight: 60 }}>
            <Icons name={'table'} width={14} height={14} />
            <span style={styles.tagName}>게시물</span>
          </SpanCategory>
          <SpanCategory>
            <Icons name={'contacts'} width={14} height={14} />
            <span style={styles.tagName}>태그됨</span>
          </SpanCategory>
        </div>
        <div className="">여기는 사진 공간</div>
      </div>
    </Div>
  );
};

const Div = styled.div`
  max-width: 935px;
  padding: 36px 20px 0;
  margin: 0 auto;

  @media (max-width: 736px) {
    padding: 36px 0 0;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  background: transparent;
  border-bottom: solid 1px #ececec;
  padding-bottom: 44px;

  @media (max-width: 736px) {
    padding-bottom: 24px;
  }
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  background: #ccc;
  border-radius: 50%;
  margin-right: 30px;

  @media (max-width: 736px) {
    width: 77px;
    height: 77px;
    margin-right: 12px;
  }
`;

const SpanProfile = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-right: 40px;
  color: #000;
`;
const SpanCount = styled.span`
  font-weight: 700;
  font-variant-numeric: proportional-nums;
`;

const SpanCategory = styled.span`
  display: inline-block;
  height: 52px;
  line-height: 52px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  // color: #aaa;
  color: #000;

  margin-right: 60px;
  border-top: solid 1px #333;
  margin-top: -1px;
`;

const styles = {
  profile: {
    display: 'flex',
    flexDirection: 'column'
  },
  tagName: {
    marginLeft: 10
  }
};

export default UserFeedPresenter;
