import axios from 'axios';
import axiosAdapterUniapp from 'axios-adapter-uniapp';
import { storeToRefs } from 'pinia';
// apis
// hooks
// types
// stores
import { useStoreUserInfo } from '@src/stores';
// configs
// components

const origin = import.meta.env.VITE_LOCATION_ORIGIN;
const baseURL = import.meta.env.VITE_BASE_URL;
/* #ifdef H5 */
const request = axios.create({ timeout: 1000 * 10, baseURL });
/* #endif */
/* #ifdef MP-WEIXIN */
const request = axios.create({ timeout: 1000 * 10, baseURL: `${origin}${baseURL}`, adapter: axiosAdapterUniapp });
/* #endif */

// 请求拦截器
request.interceptors.request.use(
  config => {
    const { headers = {}, url } = config;
    const storeUserInfo = useStoreUserInfo();
    const { token } = storeToRefs(storeUserInfo);
    if (['/proxy/getGoverDingConfig'].includes(url)) {
      return config;
    }
    return Object.assign({}, config, { headers: Object.assign({ token: token.value, platform: 'dingding' }, headers) });
  },
  error => {
    return Promise.reject(error);
  },
);
// 请求完成后的拦截器
request.interceptors.response.use(
  async response => {
    console.info(response);
    const { status, data } = response;
    if (status === 200) {
      return Promise.resolve(data);
    } else {
      return Promise.reject(response);
    }
  },
  error => {
    console.error(error);
    return Promise.resolve(error);
  },
);

export const requestGet = async option => {
  const res = await request(Object.assign({ method: 'GET' }, option));
  return res;
};

export const requestPost = async option => {
  const res = await request(Object.assign({ method: 'POST' }, option));
  return res;
};

export const requestDelete = async option => {
  const res = await request(Object.assign({ method: 'DELETE' }, option));
  return res;
};

export const requestPut = async option => {
  const res = await request(Object.assign({ method: 'PUT' }, option));
  return res;
};

export const requestDownload = async option => {
  const res = await request(Object.assign({ method: 'GET', responseType: 'blob' }, option));
  return res;
};

export const requestUpload = async option => {
  const res = await request(Object.assign({ method: 'POST', headersType: 'multipart/form-data' }, option));
  return res;
};

export { request };
