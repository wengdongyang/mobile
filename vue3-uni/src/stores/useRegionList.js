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
export const useRegionList = defineStore(
  'useRegionList',
  () => {
    const REGION_LIST = ref([]);

    const REGION_NO = ref('');
    const REGION_NAME = ref('');

    const regionList = computed(() => {
      try {
        const nextRegionList = lodash.cloneDeep(REGION_LIST.value);
        return nextRegionList;
      } catch (error) {
        console.warn(error);
        return [];
      }
    });

    const regionNo = computed(() => REGION_NO.value);
    const regionName = computed(() => REGION_NAME.value);

    const activeRegion = computed(() => {
      try {
        const nextRegionList = lodash.cloneDeep(REGION_LIST.value);
        const nextRegionNo = lodash.cloneDeep(REGION_NO.value);
        if (nextRegionList.length > 0 && nextRegionNo) {
          return nextRegionList.find(region => region.regionCode === nextRegionNo) || {};
        }
      } catch (error) {
        console.warn(error);
        return {};
      }
    });

    const getRegionList = async () => {
      try {
        const nextRegionList = lodash.cloneDeep(REGION_LIST.value);
        if (nextRegionList.length === 0) {
          const { code, data, msg } = await apiGetSysRegionList({ orgLevel: 5 });
          if (code === 200 && data.length > 0) {
            REGION_LIST.value = data;
            REGION_NO.value = '';
            REGION_NAME.value = '';
          } else {
            uni.showToast({ icon: 'none', title: msg });
          }
        }
      } catch (error) {
        console.warn(error);
      }
    };
    const setActiveRegion = async regionNo => {
      try {
        REGION_NO.value = regionNo;
      } catch (error) {
        console.warn(error);
      }
    };
    return { REGION_LIST, REGION_NO, REGION_NAME, regionList, regionNo, regionName, activeRegion, getRegionList, setActiveRegion };
  },
  { persist: true },
);
