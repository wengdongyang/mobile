<template>
  <view class="render-mine-default-layout"> render-mine-default </view>
</template>
<script lang="jsx" setup>
// apis
// hooks
import { useImage } from '@src/hooks';
// utils
// stores
// configs
// components
// props
const props = defineProps({
  pagePath: { type: String, default: 'pages/mine/mine' },
});
// emits
// refs
// computed
const { getImageUrl } = useImage();
</script>
<style lang="scss" scoped>
@use './render-mine-default.scss';
</style>