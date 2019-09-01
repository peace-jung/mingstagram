import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Page404Presenter = props => {
  const { userId } = useSelector(state => state.user);
  if (userId && props.location.pathname.match('/accounts')) {
    props.history.push('/');
  } else if (!userId && !props.location.pathname.match('/accounts')) {
    props.history.push('/');
  }

  return (
    <div style={styles.container}>
      <h2 style={{ fontSize: '2em', fontWeight: 700 }}>
        죄송합니다. 페이지를 사용할 수 없습니다.
      </h2>
      <p style={{ fontSize: '1.2em' }}>
        클릭하신 링크가 잘못되었거나 페이지가 삭제되었습니다. &nbsp;
        <Link to="/">Minstagram으로 돌아가기.</Link>
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center'
  }
};

export default Page404Presenter;
