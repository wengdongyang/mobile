/** @format */
import { defineStore } from 'pinia';
// apis
// hooks
// types
// stores
// configs
// components
export const useEnv = () => {
  const BASE_URL_TEST = import.meta.env.VITE_BASE_URL_TEST;
  const BASE_URL_PROD = import.meta.env.VITE_BASE_URL_PROD;
  const envVersion = __wxConfig.envVersion;

  const initEnv = () => {
    try {
      uni.setStorageSync('ENV_VERSION', envVersion);
      switch (envVersion) {
        // 开发版
        case 'develop':
          uni.setStorageSync('BASE_URL', BASE_URL_TEST);
          uni.setStorageSync('BASE_URL_LIST', [
            { label: '测试环境', url: BASE_URL_TEST },
            { label: '正式环境', url: BASE_URL_PROD },
          ]);
          break;
        // 体验版
        case 'trial':
          uni.setStorageSync('BASE_URL', BASE_URL_TEST);
          uni.setStorageSync('BASE_URL_LIST', [
            { label: '测试环境', url: BASE_URL_TEST },
            { label: '正式环境', url: BASE_URL_PROD },
          ]);
          break;
        // 正式版
        case 'release':
          uni.setStorageSync('BASE_URL', BASE_URL_PROD);
          uni.setStorageSync('BASE_URL_LIST', [{ label: '正式环境', url: BASE_URL_PROD }]);
          break;
        default:
          console.error('版本错误');
          break;
      }
    } catch (error) {
      console.warn(error);
    }
  };
  return { initEnv };
};
