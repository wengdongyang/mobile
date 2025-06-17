// apis
// hooks
// utils
import { request, requestGet, requestPost } from '@src/utils';
// stores
// configs
import { ENV } from '@src/configs';
// components
/**
 * 获取钉钉配置文件
 * @param {*} params
 * @returns
 */
export const apiGetCableSignSecurity = () => {
  return requestGet({ url: `/cable-sign/security` });
};
/**
 * 微信登陆
 */
export const apiPostWxUserLogin = data => {
  return requestPost({ url: `/wx/user/${ENV.APP_ID}/login`, data });
};

/**
 * 获取字典数据
 * @param {*} params
 * @returns
 */
export const apiGetApiDictTypeAll = params => {
  return request({ url: `/api/dict/type/all`, params });
};

/**
 *  获取用户信息
 */
export const apiGetApiProfile = params => {
  return requestGet({ url: `/api/profile`, params });
};
