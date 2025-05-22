// 环境参数
export const ENUMS_VERSION = {
  DEVELOP: 'develop', // 开发版
  RELEASE: 'release', // 正式版
  TRIAL: 'trial', // 体验版(微信小程序专属)
};

// 当前环境
export const ENUMS_ENVIRONMENT = {
  TESTING: 'testing', // 测试环境
  PRODUCTION: 'production', // 生产环境
};
// 应用名称
const APP_NAME = import.meta.env.VITE_APP_NAME;
// 高德地图相关参数
const A_MAP_KEY = import.meta.env.VITE_A_MAP_KEY; // 高德地图key
const A_MAP_SECRET = import.meta.env.VITE_A_MAP_SECRET; // 高德地图secret

// #ifdef MP-WEIXIN
// 微信小程序
const ENV_VERSION = __wxConfig.envVersion;
// #endif
// #ifdef H5
// 浙政钉H5
const ENV_VERSION = import.meta.env.VITE_ENV_VERSION;
// #endif
// 图片服务路径
const FILE_SOURCE_PATH = import.meta.env.VITE_FILE_SOURCE_PATH;

const ENVIRONMENT = import.meta.env.VITE_ENVIRONMENT; // 环境变量
// 请求地址
const VITE_TEST_REQUEST_BASE_URL = import.meta.env.VITE_TEST_REQUEST_BASE_URL;
const VITE_TEST_REQUEST_BASE_ROUTER = import.meta.env.VITE_TEST_REQUEST_BASE_ROUTER;
const VITE_PROD_REQUEST_BASE_URL = import.meta.env.VITE_PROD_REQUEST_BASE_URL;
const VITE_PROD_REQUEST_BASE_ROUTER = import.meta.env.VITE_PROD_REQUEST_BASE_ROUTER;

const TEST_REQUEST_BASE_URL = `${VITE_TEST_REQUEST_BASE_URL}${VITE_TEST_REQUEST_BASE_ROUTER}/`;
const PROD_REQUEST_BASE_URL = `${VITE_PROD_REQUEST_BASE_URL}${VITE_PROD_REQUEST_BASE_ROUTER}/`;

const APP_ID = import.meta.env.VITE_WEIXIN_APP_ID; // 应用ID

export const ENV = {
  APP_ID, // 应用ID
  APP_NAME, // 应用名称

  A_MAP_KEY, // 高德地图key
  A_MAP_SECRET, // 高德地图secret

  ENVIRONMENT, // 环境变量
  FILE_SOURCE_PATH, // 图片服务路径

  ENV_VERSION, // 环境版本
  TEST_REQUEST_BASE_URL, // 测试环境请求地址
  PROD_REQUEST_BASE_URL, // 生产环境请求地址
};
