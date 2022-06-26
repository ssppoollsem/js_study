import axios from 'axios';

// axios instance를 통해 공통 설정들을 담는다.
const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

function registerUser(userData) {
  // const url = `${instance}/signup`;
  // return axios.post(url, userData);
  return instance.post('signup', userData);
}

export { registerUser };
