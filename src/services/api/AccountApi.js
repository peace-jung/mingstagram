import { baseUrl } from '../utils';
import Axios from 'axios';

const login = async (email, pw) => {
  try {
    const url = baseUrl + '/post/main?userId=a';
    const response = await Axios({
      method: 'get',
      url,
      credentials: 'include',
      mode: 'no-cors',
      withCredentials: true,
      timeout: 10000,
      headers: {
        'Access-Control-Allow-Origin': '*',
        // 'Content-Type': 'text/plain'
      },
      body: {
        userId: email,
        userPw: pw
      }
    });

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
