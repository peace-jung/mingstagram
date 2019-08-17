import React from 'react';
import { Link } from 'react-router-dom';

const LoginPresenter = props => {
  const { onLogin } = props;
  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <div style={styles.logo}>
          <span>Mingstagram</span>
        </div>
        <div>
          <input
            placeholder="이메일 주소"
            type="text"
            className="ant-input"
            // value=""
            style={styles.inputStyle}
          />
          <input
            placeholder="비밀번호"
            type="text"
            className="ant-input"
            // value=""
            style={styles.inputStyle}
          />
        </div>
        <div style={{ marginBottom: 6 }}>
          <button
            type="button"
            className="ant-btn ant-btn-primary ant-btn-block"
            onClick={onLogin}
          >
            <span>로그인</span>
          </button>
        </div>
        <div style={{ display: 'flex' }}>
          <Link
            to="/accounts/reset/password"
            style={{ flex: '1 0 auto', textAlign: 'center' }}
          >
            비밀번호를 잊으셨나요?
          </Link>
        </div>
        <div style={{ textAlign: 'center' }}>
          <span>계정이 없으신가요?</span>
          &nbsp;&nbsp;
          <Link to="/accounts/signup">회원가입</Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: '100%',
    background: '#fafafa',
    paddingTop: 30
  },
  loginBox: {
    width: 348,
    border: 'solid',
    borderWidth: 1,
    borderColor: 'rgb(230, 230, 230)',
    margin: '0 auto',
    background: '#fff',
    padding: 40
  },
  logo: {
    fontFamily: 'cursive',
    fontSize: 32,
    marginBottom: 16,
    textAlign: 'center'
  },
  inputStyle: {
    marginBottom: 8,
    backgroundColor: '#fcfcfc',
    textOverflow: 'ellipsis'
  }
};

export default LoginPresenter;
