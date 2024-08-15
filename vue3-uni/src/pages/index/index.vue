<!-- @format -->
<template>
  <view class="index-layout">
    <uv-icon name="photo"></uv-icon>
    {{ title }}
  </view>
</template>

<script setup>
import { ref, computed } from 'vue';
import { get, set } from '@vueuse/core';
import { onLoad, onShow, onHide } from '@dcloudio/uni-app';
// apis
// hooks
// utils
// stores
// configs
// components
const title = ref('Hello');
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
