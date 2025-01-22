import { get } from '@vueuse/core';
import * as lodash from 'lodash';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
// apis
// hooks
// types
// stores
// configs
// components
export const useStoreDictList = defineStore('storeDictList', () => {
  const DICT_LIST = ref([]);

  const dictList = computed(() => {
    const nextDictList = get(DICT_LIST);
    return nextDictList.map(nextDict => {
      const options = nextDict.dataList || [];
      return Object.assign({}, nextDict, {
        key: nextDict.dictType,
        options: options.map(option =>
          Object.assign({}, option, {
            label: option.dictLabel,
            value: option.dictValue && lodash.isNumber(lodash.toNumber(option.dictValue)) ? lodash.toNumber(option.dictValue) : option.dictValue,
          }),
        ),
      });
    });
  });

  const getDictByKey = dictKey => {
    try {
      const item = get(dictList).find(dict => dict.key === dictKey) || {};
      return lodash.get(item, ['options']) || [];
    } catch (error) {
      console.warn(error);
      return [];
    }
  };

  const getDictsByKeys = dictKeys => {
    try {
      return dictKeys.map(dictKey => getDictByKey(dictKey));
    } catch (error) {
      console.warn(error);
      return [];
    }
  };

  const setDictList = nextDictList => {
    try {
      DICT_LIST.value = nextDictList;
    } catch (error) {
      console.warn(error);
    }
  };

  return { DICT_LIST, dictList, setDictList, getDictByKey, getDictsByKeys };
});
