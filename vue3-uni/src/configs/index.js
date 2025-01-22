// #ifdef MP-WEIXIN
// 微信小程序
const envVersion = __wxConfig.envVersion;
const fileServerPath = `${import.meta.env.VITE_LOCATION_ORIGIN}${import.meta.env.VITE_FILE_PATH}`;
// #endif
// #ifdef H5
// 浙政钉H5
const envVersion = 'release';
const fileServerPath = `../`;
// #endif

export const ENV = {
  ENV_VERSION: envVersion,
  FILE_SERVER_PATH: fileServerPath,
};
