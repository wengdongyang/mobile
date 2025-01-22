<template>
  <view class="render-index-dingding-layout">
    <!-- 顶部banner -->
    <render-banner />
  </view>
</template>
<script lang="jsx" setup>
import { onLoad, onShow } from '@dcloudio/uni-app';
import * as lodash from 'lodash';
import { computed, ref, watch } from 'vue';
// apis
// hooks
// utils
// stores
// configs
// components
import RenderBanner from './components/render-banner.vue';
// props
// emits
// refs
// computed
</script>
<style lang="scss" scoped>
@use './render-index-dingding.scss';
</style>
