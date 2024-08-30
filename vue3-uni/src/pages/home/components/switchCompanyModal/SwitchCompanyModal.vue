<template>
  <uv-action-sheet
    ref="actionSheetRef"
    title="开放能力"
  >
  </uv-action-sheet>
</template>

<script setup>
import { ref, computed } from 'vue';
import { onLoad, onShow, onHide } from '@dcloudio/uni-app';
// apis
// hooks
// utils
// stores
import { useRegionList } from '@src/stores';
// configs
// components
import Image from './WechatIMG2.jpg';
const title = ref('Hello');

const { regionList, regionNo, regionName, activeRegion, getRegionList, setActiveRegion } = useRegionList();

onLoad(option => {
  if (option.auth) {
    uni.setStorageSync('token', option.auth);
  }
  if (option.appId) {
    uni.setStorageSync('appId', option.appId);
  }
});
</script>
<style lang="scss" scoped>
@import './home.scss';
</style>
