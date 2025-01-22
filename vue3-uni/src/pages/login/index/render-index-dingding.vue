<template>
  <view class="render-index-dingding-layout"> </view>
</template>
<script lang="jsx" setup>
import { onLoad, onShow } from '@dcloudio/uni-app';
import { get } from '@vueuse/core';
import { storeToRefs } from 'pinia';
import { watch } from 'vue';
// apis
// hooks
import { useDictList, useDingdingAuth, useUserInfo } from './hooks';
// utils
// stores
import { useStoreDictList, useStoreUserInfo } from '@src/stores';
// configs
// components
// props
// emits
// refs˝
// computed
const storeUserInfo = useStoreUserInfo();
const { setToken } = storeUserInfo;
const { userinfo } = storeToRefs(storeUserInfo);

const storeDictList = useStoreDictList();
const { dictList } = storeToRefs(storeDictList);

const { getApiProfile } = useUserInfo();
const { getApiDictTypeAll } = useDictList();
const { getProxyGoverDingConfig } = useDingdingAuth();

onLoad(option => {
  if (option.token) {
    setToken(option.token);
  }
});

onShow(async () => {
  await getProxyGoverDingConfig();
  await getApiDictTypeAll();
  await getApiProfile();
});

watch(
  () => [get(userinfo), get(dictList)],
  newValues => {
    if (newValues.length > 0) {
      const [userinfo, dictList] = newValues;
      if (userinfo.id && dictList.length > 0) {
        uni.reLaunch({ url: '/pages/index/index/index' });
      }
    }
  },
  {
    immediate: true,
    deep: true,
  },
);
</script>
<style lang="scss" scoped>
@use './render-index-dingding.scss';
</style>
