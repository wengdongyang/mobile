/** @format */

import { request } from '@src/utils';
/**
 * 获取地区列表
 */
export const apiGetApplicationList = params => {
  return request({ methods: 'get', url: '/application/list', params });
};
