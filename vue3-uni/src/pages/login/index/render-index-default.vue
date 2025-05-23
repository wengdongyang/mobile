<template>
  <view class="render-index-default-layout"> render-index-default </view>
</template>
<script lang="jsx" setup>
import { onLoad } from '@dcloudio/uni-app';
import qs from 'qs';
// apis
// hooks
// utils
// stores
// configs
// components
// props
const props = defineProps({
  pagePath: { type: String, default: 'pages/login/index' },
});
// emits
// refs
// computed
onLoad(options => {
  uni.redirectTo({
    url: `/pages/login/login/index?${qs.stringify(options)}`,
  });
});
</script>
<style lang="scss" scoped>
@use './render-index-default.scss';
</style>
