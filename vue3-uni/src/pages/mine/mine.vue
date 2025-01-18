<template>
  <view class="home-layout">
    <ToggleBaseUrl />
  </view>
</template>

<script lang="jsx" setup>
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
@use './mine.scss';
</style>
