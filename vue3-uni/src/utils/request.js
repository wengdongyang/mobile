import axios from 'axios';
import CryptoJS from 'crypto-js';
import dayjs from 'dayjs';
import * as lodash from 'lodash';
import { storeToRefs } from 'pinia';
import { UniAdapter } from 'uniapp-axios-adapter';
// apis
// hooks
// types
// stores
import { useStoreDevice, useStoreGlobal, useStoreUserInfo } from '@src/stores';
// configs
import { ENV } from '@src/configs';
// components
const request = axios.create({ timeout: 1000 * 10, withCredentials: true, adapter: UniAdapter });
// 请求拦截器

export const createSignHeader = (config, secretKey) => {
  const timestamp = dayjs().valueOf();
  try {
    const { method, url, data = {}, params = {} } = config;
    const profile = ENV.PROFILE;
    const paramsString = Object.keys(params)
      .sort()
      .map(key => {
        const value = lodash.get(params, [key]) || '';
        if (lodash.isArray(value)) {
          return value.map((item, idx) => `${key}[${idx}]=${item}`).join('&');
        } else {
          return `${key}=${value}`;
        }
      })
      .join('&');
    const dataString = method.toLowerCase() === 'get' ? '' : JSON.stringify(data);
    return {
      signStr: `${profile}${url}?${paramsString}${secretKey}@${timestamp}|${dataString}`,
      timestamp,
    };
  } catch (error) {
    return { signStr: '', timestamp };
  }
};
request.interceptors.request.use(
  config => {
    const { headers = {}, url } = config;
    const storeUserInfo = useStoreUserInfo();
    const { token } = storeToRefs(storeUserInfo);

    const storeGlobal = useStoreGlobal();
    const { requestBaseUrl } = storeToRefs(storeGlobal);

    const storeDevice = useStoreDevice();
    const { deviceFingerprint, deviceSecurity } = storeToRefs(storeDevice);
    const { signStr, timestamp } = createSignHeader(config, deviceSecurity.value);
    const sign = CryptoJS.MD5(signStr).toString();
    const nextSignStr = encodeURIComponent(signStr);

    const nextConfigs = Object.assign({}, config, {
      baseURL: requestBaseUrl.value,
      headers: Object.assign({}, headers, {
        appId: ENV.APP_ID,
        token: token.value,
        platform: ENV.PLATFORM,
        'Content-Type': 'application/json',
        ['X-Sign']: sign,
        ['X-Sign-Key']: deviceFingerprint.value,
        ['X-Sign-Time']: timestamp,
        signStr: nextSignStr.length > 100 ? nextSignStr.substring(0, 100) : nextSignStr,
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
