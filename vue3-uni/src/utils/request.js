/** @format */
import axios from 'axios';
import axiosAdapterUniapp from 'axios-adapter-uniapp';
// apis
// hooks
// types
// stores
// configs
// components
// const baseURL = '/town';

/* #ifdef H5 */
const request = axios.create({
  timeout: 1000 * 10,
  baseURL: 'https://wj.ikeqiao.net/town/api',
});
/* #endif */
/* #ifdef MP-WEIXIN */
const request = axios.create({
  timeout: 1000 * 10,
  baseURL: 'https://wj.ikeqiao.net/town/api',
  adapter: axiosAdapterUniapp,
});
/* #endif */
// 请求拦截器
request.interceptors.request.use(
  config => {
    const { headers = {}, url } = config;
    const regionNo = uni.getStorageSync('regionNo');
    const token = uni.getStorageSync('token');

    if (['/sys/region/list'].includes(url)) {
      // 不需要token && regionNo的白名单接口
      return config;
    } else if (['/application/list'].includes(url)) {
      // token && regionNo 可有可无的接口
      return Object.assign({}, config, {
        headers: Object.assign({}, regionNo ? { 'X-RegionNo': regionNo } : {}, token ? { Authorization: `Bearer ${token}` } : {}, headers),
      });
    } else {
      if (!token) {
        console.error(`token 不存在!`, token);
        return;
      }
      if (!regionNo) {
        console.error(`regionNo 不存在!`, regionNo);
        return;
      }
      return Object.assign({}, config, {
        headers: Object.assign({ 'X-RegionNo': regionNo, Authorization: token ? `Bearer ${token}` : '' }, headers),
      });
    }
  },
  error => {
    return Promise.reject(error);
  },
);
// 请求完成后的拦截器
request.interceptors.response.use(
  async response => {
    console.warn(response);
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
