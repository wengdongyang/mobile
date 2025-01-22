// apis
// hooks
// utils
import { request } from '@src/utils';
// stores
// configs
// components
/**
 * 获取字典数据
 * @param {*} params
 * @returns
 */
export const apiGetApiDictTypeAll = params => {
  return request({ url: `/api/dict/type/all`, params });
};
