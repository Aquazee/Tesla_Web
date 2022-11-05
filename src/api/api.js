import axios from 'axios';
import { AppFunctions, Constants } from '../utils';
import { REACT_APP_BASE_URL } from '../config';

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*'
};

const Auth_api = axios.create({
  baseURL: REACT_APP_BASE_URL,
  headers
});

Auth_api.interceptors.request.use(
  (config) => {
    // perform a task before the request is sent
    const data = AppFunctions.getStoreData(Constants.STORAGEKEYS.USER);
    const token = data?.tokens.access.token;
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
  },
  (error) =>
    // handle the error
    Promise.reject(error)
);

Auth_api.interceptors.response.use(
  (response) => {
    // do something with the response data
    console.log('Response was received');
    return response;
  },
  (error) =>
    // handle the response error
    Promise.reject(error)
);

const API = {
  createUser(body) {
    return Auth_api.post('/auth/register', body);
  },

  getUsers(params) {
    return Auth_api.get('/users', { params });
  },

  getProductSearchData(params) {
    return Auth_api.get('/product/search', { params });
  },

  getNotifications(params) {
    return Auth_api.get('/notifications', { params });
  },

  getLatestAppByDate() {
    return Auth_api.get('/apps/getlatestappbydate');
  }
};

export default API;
