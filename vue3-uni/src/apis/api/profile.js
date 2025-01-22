// apis
// hooks
// utils
import { request } from '@src/utils';
// stores
// configs
// components
/**
 * 获取获取用户信息
 * @param {*} params
 * @returns
 */
export const apiGetApiProfile = params => {
  return request({ url: `/api/profile`, params });
};
