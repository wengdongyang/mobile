<template>
  <view class="render-mine-dingding-ke-qiao-layout"> render-mine-dingding-ke-qiao </view>
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
  pagePath: { type: String, default: 'pages/mine/mine' },
});
// emits
// refs
// computed
const { getImageUrl } = useImage();
</script>
<style lang="scss" scoped>
@use './render-mine-dingding-ke-qiao.scss';
</style>