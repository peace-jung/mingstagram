import React from 'react';

const SignUpPresenter = () => {
  return (
    <div style={styles.container}>
      <div style={styles.signBox}>
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
            placeholder="사용자 이름"
            type="text"
            className="ant-input"
            // value=""
            style={styles.inputStyle}
          />
          <input
            placeholder="비밀번호"
            type="password"
            className="ant-input"
            // value=""
            style={styles.inputStyle}
          />
          <input
            placeholder="비밀번호 확인"
            type="password"
            className="ant-input"
            // value=""
            style={styles.inputStyle}
          />
        </div>
        <div style={{ marginBottom: 6 }}>
          <button type="button" className="ant-btn ant-btn-primary ant-btn-block">
            <span>회원가입</span>
          </button>
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
  signBox: {
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

export default SignUpPresenter;
