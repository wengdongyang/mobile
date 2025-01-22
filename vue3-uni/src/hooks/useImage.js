// apis
// hooks
// types
// stores
// configs
import { ENV } from '@src/configs';
// components
export const useImage = () => {
  const getImageUrl = ({ path, url }) => {
    try {
      const filePath = `${ENV.FILE_SERVER_PATH}${path}/${url}`;
      // #ifdef MP-WEIXIN
      return filePath;
      // 微信小程序
      // #endif
      // #ifdef H5
      return new URL(filePath, import.meta.url).href;
      // #endif
      return '';
    } catch (error) {
      console.warn(error);
    }
  };
  return { getImageUrl };
};
