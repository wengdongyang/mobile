<template>
  <view class="home-layout">
    <!-- 街道 -->
    <view class="header-content"></view>
    <!-- 登陆 -->
    <view class="user-content"></view>
    <!-- app -->
    <view class="application-content"></view>
    <!-- news -->
    <view class="news-content"></view>
  </view>
</template>

<script setup>
import { onLoad, onShow } from '@dcloudio/uni-app';
import { ref, watch } from 'vue';
// apis
import { apiGetApplicationList } from '@src/apis';
// hooks
// utils
// stores
// configs
// components
</script>
<style lang="scss" scoped>
@import './home.scss';
</style>
