import { baseUrl } from '../utils';

const login = async (email, pw) => {
  try {
    const url = baseUrl + '/user/login';
    const data = {
      method: 'POST',
      // credentials: 'include',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: email,
        userPw: pw
      })
    };

    const response = await fetch(url, data);
    const responseJson = await response.json();
    console.log(responseJson);
    return true;
  } catch (error) {
    console.warn(error);
    return false;
  }
};

export default {
  login
};
