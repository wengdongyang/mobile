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
    const regionName = computed(() => {
      try {
        const nextRegionList = lodash.cloneDeep(REGION_LIST.value);
        const regionNo = REGION_NO.value;
        const activeRegionItem = nextRegionList.find(region => region.regionCode === regionNo) || {};
        return lodash.get(activeRegionItem, ['regionName']) || '';
      } catch (error) {
        console.warn(error);
        return '';
      }
    });

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
        const { code, data, msg } = await apiGetSysRegionList({ orgLevel: 5 });
        if (code === 200 && data.length > 0) {
          REGION_LIST.value = data;
          REGION_NO.value = '';
        } else {
          uni.showToast({ icon: 'none', title: msg });
        }
      } catch (error) {
        console.warn(error);
      }
    };
    const setActiveRegion = regionNo => {
      try {
        uni.setStorageSync('regionNo', regionNo);
        REGION_NO.value = regionNo;
      } catch (error) {
        console.warn(error);
      }
    };
    return { REGION_LIST, REGION_NO, regionList, regionNo, regionName, activeRegion, getRegionList, setActiveRegion };
  },
  { persist: true },
);
