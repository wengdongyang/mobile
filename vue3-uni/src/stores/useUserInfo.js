import { get } from '@vueuse/core';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
// apis
// hooks
// types
// stores
// configs
// components
export const useStoreUserInfo = defineStore('userInfo', () => {
  const TOKEN = ref('');
  const token = computed(() => get(TOKEN));
  const setToken = nextToken => {
    try {
      TOKEN.value = nextToken;
    } catch (error) {
      console.warn(error);
    }
  };

  const USERINFO = ref({});
  const userinfo = computed(() => get(USERINFO));

  const setUserinfo = nextUserinfo => {
    try {
      USERINFO.value = nextUserinfo;
    } catch (error) {
      console.warn(error);
    }
  };

  return { TOKEN, token, setToken, USERINFO, userinfo, setUserinfo };
});
