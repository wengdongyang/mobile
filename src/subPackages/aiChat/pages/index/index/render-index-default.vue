<template>
  <view class="render-index-default-layout"> render-index-default </view>
</template>
<script lang="jsx" setup>
import { onLoad, onShow } from '@dcloudio/uni-app';
import * as lodash from 'lodash';
import { computed, ref, watch } from 'vue';
// apis
// hooks
import { useImage } from '@src/hooks';
// utils
// stores
// configs
// components
// props
const props = defineProps({
  pagePath: { type: String, default: 'src/subPackages/aiChat/pages/index/index' },
});
// emits
// refs
// computed
const { getImageUrl } = useImage();
</script>
<style lang="scss" scoped>
@use './render-index-default.scss';
</style>