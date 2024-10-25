<template>
  <view class="home-layout">
    <ToggleBaseUrl />
  </view>
</template>

<script setup>
import { onLoad, onShow } from '@dcloudio/uni-app';
import { ref, watch } from 'vue';
// apis
// hooks
// utils
// stores
// configs
// components
import ToggleBaseUrl from './components/toggleBaseUrl/toggleBaseUrl';
</script>
<style lang="scss" scoped>
@import './mine.scss';
</style>
