// apis
// hooks
// utils
import { aiRequest } from '@src/utils';
// stores
// configs
// components
/**
 * 初始化
 */
export const apiPostAdminApiSystemFgShareInit = params => {
  return aiRequest({ url: `/admin-api/system/fg-share/init`, params });
};
