import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
// apis
// hooks
// types
// stores
// configs
// components
export const useStoreUserInfo = defineStore('userInfo', () => {
  const token = ref('');
  return { token };
});
