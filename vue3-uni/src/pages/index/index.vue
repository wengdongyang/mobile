<template>
  <view class="home-layout">
    <!-- 街道 -->
    <!-- #ifdef IS_SHAO_XING -->
    <view class="header-content">IS_SHAO_XING</view>
    <!-- #endif -->
    <!-- #ifdef IS_KE_QIAO -->
    <view class="header-content">IS_KE_QIAO</view>
    <!-- #endif -->
    <!-- 登陆 -->
    <view class="user-content"></view>
    <!-- app -->
    <view class="application-content"></view>
    <!-- news -->
    <view class="news-content text-center">999</view>
  </view>
</template>

<script lang="jsx" setup>
import { onLoad, onShow } from '@dcloudio/uni-app';
import { ref, watch } from 'vue';
// apis
import { apiGetApplicationList } from '@src/apis';
// hooks
// utils
// stores
// configs
// components
// #ifdef IS_SHAO_XING
console.error('8888,绍兴市');
// #endif
// #ifdef IS_KE_QIAO
console.error('8888,柯桥区');
// #endif
</script>
<style lang="scss" scoped>
@use './index.scss';
</style>
