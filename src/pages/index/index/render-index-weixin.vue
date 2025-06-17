<template>
  <view class="render-index-weixin-layout"> render-index-weixin </view>
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
  pagePath: { type: String, default: 'pages/index/index' },
});
// emits
// refs
// computed
const { getImageUrl } = useImage();
</script>
<style lang="scss" scoped>
@use './render-index-weixin.scss';
</style>