import axios from 'axios';
import { Notify } from 'vant';
import store from '@/store';
import { getToken } from '@/utils/auth';

// create an axios instance
const service = axios.create({
  baseURL: '', // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 30000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    if (store.getters.token) {
      config.headers['authorization'] = getToken();
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data;
    if (res.code !== 0) {
      console.log(res)
    }
    return res;
  },
  error => {
    console.log('err' + error); // for debug
    Notify({ type: 'danger', message: error.message || '请求错误！' });
    return Promise.reject(error);
  }
);

export default service;
