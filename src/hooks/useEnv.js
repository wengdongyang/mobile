// apis
// hooks
// types
// stores
// configs
import { ENV } from '@src/configs';
// components
export const useEnv = () => {
  const initEnv = () => {
    try {
      uni.setStorageSync('ENV_VERSION', ENV.ENV_VERSION);
    } catch (error) {
      console.warn(error);
    }
  };
  return { initEnv };
};
