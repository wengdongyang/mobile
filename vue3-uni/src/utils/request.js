import axios from 'axios';
import { storeToRefs } from 'pinia';
import { UniAdapter } from 'uniapp-axios-adapter';
// apis
// hooks
// types
// stores
import { useStoreGlobal, useStoreDevice, useStoreUserInfo } from '@src/stores';
// configs
import { ENV } from '@src/configs';
// components
const request = axios.create({ timeout: 1000 * 10, withCredentials: true, adapter: UniAdapter });
// 请求拦截器
request.interceptors.request.use(
  config => {
    const { headers = {}, url } = config;
    const storeUserInfo = useStoreUserInfo();
    const { token } = storeToRefs(storeUserInfo);

    const storeGlobal = useStoreGlobal();
    const { requestBaseUrl } = storeToRefs(storeGlobal);

    const storeDevice = useStoreDevice();
    const { deviceFingerprint, deviceSecurity } = storeToRefs(storeDevice);

    if (['/proxy/getGoverDingConfig'].includes(url)) {
      return config;
    }
    const nextConfigs = Object.assign({}, config, {
      baseURL: requestBaseUrl.value,
      headers: Object.assign({}, headers, {
        appId: ENV.APP_ID,
        token: token.value,
        platform: ENV.PLATFORM,
        'Content-Type': 'application/json',
        ['X-Sign-Key']: deviceFingerprint.value,
      }),
    });
    console.error(nextConfigs);
    return nextConfigs;
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
