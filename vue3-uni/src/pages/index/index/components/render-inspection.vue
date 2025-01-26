<template>
  <view class="render-inspection-layout">
    <index-card title="巡查">
      <template #default>
        <view class="inspection"> 隐患排查 </view>
      </template>
    </index-card>
  </view>
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
import IndexCard from './index-card.vue';
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
@use './render-inspection.scss';
</style>
