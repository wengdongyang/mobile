/*
 * @Author: wdy
 * @Date: 2024-08-27 16:39:58
 * @Last Modified by: wdy
 * @Last Modified time: 2024-08-27 17:20:22
 */
import { request } from '@src/utils';
/**
 * 获取地区列表
 */
export const apiGetSysRegionList = params => {
  return request({ methods: 'get', url: '/sys/region/list', params });
};
