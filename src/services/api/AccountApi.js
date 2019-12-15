import { baseUrl } from '../utils';
import Axios from 'axios';

const login = async (email, pw) => {
  try {
    const url = baseUrl + '/user/login';
    const response = await Axios({
      method: 'POST',
      url,
      // credentials: 'include',
      mode: 'no-cors',
      // withCredentials: true,
      timeout: 10000,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json'
      },
      data: {
        userId: email,
        userPw: pw
      }
    });

    const responseJson = await response.data;
    if (responseJson.resultCode === 200) return responseJson.data[0];
    else throw Error('undefined');
  } catch (error) {
    console.warn(error);
    return false;
  }
};

export default {
  login
};
