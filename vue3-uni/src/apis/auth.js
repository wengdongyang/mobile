// apis
// hooks
// utils
import { request } from '@src/utils';
// stores
// configs
// components
/**
 * 获取钉钉配置文件
 * @param {*} params
 * @returns
 */
export const apiGetCableSignSecurity = () => {
  return request({ url: `/cable-sign/security` });
};
