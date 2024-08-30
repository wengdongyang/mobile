/** @format */

import { request } from '@src/utils';
/**
 * 获取地区列表
 */
export const apiGetSysRegionList = params => {
  return request({ methods: 'get', url: '/sys/region/list', params });
};
