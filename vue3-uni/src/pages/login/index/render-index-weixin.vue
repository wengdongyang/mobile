<template>
  <view class="render-index-weixin-layout"> render-index-weixin </view>
</template>
<script lang="jsx" setup>
import { onShow } from '@dcloudio/uni-app';
// apis
// hooks
import { useImage } from '@src/hooks';
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
const { getImageUrl } = useImage();

// onShow(() => {
//   uni.reLaunch({ url: '/pages/index/index/index' });
// });
</script>
<style lang="scss" scoped>
@use './render-index-weixin.scss';
</style>
