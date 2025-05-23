import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
// apis
// hooks
// types
// stores
// configs
import { ENUMS_ENVIRONMENT, ENV } from '@src/configs/index';
// components
export const useStoreGlobal = defineStore('storeGlobal', () => {
  const environment = ref(ENV.ENVIRONMENT); // 环境

  const environmentList = computed(() => {
    return [
      { label: '测试', value: ENUMS_ENVIRONMENT.TESTING },
      { label: '正式', value: ENUMS_ENVIRONMENT.PRODUCTION },
    ];
  });

  const requestBaseUrl = computed(() => {
    return environment.value === ENUMS_ENVIRONMENT.TESTING ? ENV.TEST_REQUEST_BASE_URL : ENV.PROD_REQUEST_BASE_URL;
  });

  const setEnvironment = nextEnvironment => {
    try {
      console.error('nextEnvironment', nextEnvironment);
      if ([ENUMS_ENVIRONMENT.TESTING, ENUMS_ENVIRONMENT.PRODUCTION].includes(nextEnvironment)) {
        environment.value = nextEnvironment;
      } else {
        console.error('环境变量错误');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { environment, environmentList, requestBaseUrl, setEnvironment };
});
