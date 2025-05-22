// #ifdef MP-WEIXIN
// 微信小程序
const envVersion = __wxConfig.envVersion;
const fileServerPath = `${import.meta.env.VITE_LOCATION_ORIGIN}${import.meta.env.VITE_FILE_UPLOAD_PATH}`;
// #endif
// #ifdef H5
// 浙政钉H5
const envVersion = 'release';
const fileServerPath = `../`;
// #endif

const fileSourcePath = `${import.meta.env.VITE_FILE_SOURCE_PATH}`;

export const ENV = {
  ENV_VERSION: envVersion,
  FILE_SERVER_PATH: fileServerPath,
  FILE_SOURCE_PATH: fileSourcePath,
};
