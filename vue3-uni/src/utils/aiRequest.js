import axios from 'axios-adapter-uniapp';
// apis
// hooks
// types
// stores
// configs
import { AI_TOKEN, AI_SHARE_ID, AI_TENANT_ID, AUTH_TOKEN } from '@src/configs';
// components

const baseURL = 'http://10.2.0.56:8095';
const aiRequest = axios.create({ timeout: 1000 * 10, baseURL: baseURL });

// 请求拦截器
aiRequest.interceptors.request.use(
  config => {
    const { headers = {} } = config;
    const token = uni.getStorageSync(AI_TOKEN);
    const shareId = uni.getStorageSync(AI_SHARE_ID);
    const tenantId = uni.getStorageSync(AI_TENANT_ID);
    const authToken = uni.getStorageSync(AUTH_TOKEN);
    const nextHeaders = Object.assign(
      {},
      { shareId, sign: '' },
      tenantId ? { 'tenant-id': tenantId } : { 'tenant-id': '' },
      token ? { Authorization: `Bearer ${token}` } : {},
      authToken ? { authToken } : {},
      headers,
    );
    return Object.assign({}, config, { headers: nextHeaders });
  },
  error => {
    return Promise.reject(error);
  },
);
// 请求完成后的拦截器
aiRequest.interceptors.response.use(
  async response => {
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

export { baseURL, aiRequest };
