<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <uv-qrcode ref="qrcode" size="300px" value="https://h5.uvui.cn"></uv-qrcode>
  </view>
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
@import './index.scss';
</style>
