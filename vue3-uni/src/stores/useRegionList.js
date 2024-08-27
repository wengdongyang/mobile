/** @format */
import * as lodash from 'lodash';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
// apis
import { apiGetSysRegionList } from '@src/apis';
// hooks
// types
// stores
// configs
// components
export const useRegionList = defineStore('regionList', () => {
  const REGION_LIST = ref([]);

  const regionList = computed(() => {
    try {
      const nextRegionList = lodash.cloneDeep(REGION_LIST.value);
      return nextRegionList;
    } catch (error) {
      console.warn(error);
      return [];
    }
  });

  const getRegionList = async () => {
    try {
      const { code, data, msg } = await apiGetSysRegionList({ orgLevel: 5 });
      if (code === 200 && data.length > 0) {
        REGION_LIST.value = data;
      } else {
        uni.showToast({ icon: 'none', title: msg });
      }
    } catch (error) {
      console.warn(error);
    }
  };

  return { REGION_LIST, regionList, getRegionList };
});
