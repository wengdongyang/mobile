/** @format */
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
export const apiGetProxyGoverDingConfig = params => {
  return request({ url: `/proxy/getGoverDingConfig`, params });
};
