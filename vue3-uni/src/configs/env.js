// #ifdef MP-WEIXIN
// 微信小程序
const envVersion = __wxConfig.envVersion;
// #endif
// #ifdef H5
// 浙政钉H5
const envVersion = 'release';
// #endif

const testRequestBaseUrl = `${import.meta.env.VITE_TEST_REQUEST_BASE_URL}${VITE_TEST_REQUEST_BASE_ROUTER}/`;

const prodRequestBaseUrl = `${import.meta.env.VITE_PROD_REQUEST_BASE_URL}${VITE_PROD_REQUEST_BASE_ROUTER}/`;

const fileSourcePath = `${import.meta.env.VITE_FILE_SOURCE_PATH}`;

export const ENV = {
  ENV_VERSION: envVersion,
  FILE_SOURCE_PATH: fileSourcePath,
};
