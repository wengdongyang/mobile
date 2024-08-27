<!-- @format -->
<template>
  <view class="home-layout"> </view>
</template>

<script setup>
import { ref, computed } from 'vue';
import { onLoad, onShow, onHide } from '@dcloudio/uni-app';
// apis
// hooks
// utils
// stores
// configs
// components
import Image from './WechatIMG2.jpg';
const title = ref('Hello');

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
