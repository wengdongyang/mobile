<template>
  <view class="chat-layout-layout">
    <view
      class="chat-layout-header"
      :style="headerStyle"
      v-if="$slots.header"
    >
      <slot name="header" />
    </view>
    <view
      class="chat-layout-content"
      :style="contentStyle"
      :class="{
        'has-header': !!$slots.header,
      }"
    >
      <slot name="default" />
    </view>
    <view class="chat-layout-footer">
      <slot name="chatInputBox" />
    </view>
  </view>
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
  pagePath: { type: String, default: 'src/pages/aiChat/index' },
  headerStyle: { type: Object },
  contentStyle: { type: Object },
});
// emits
// refs
// computed
const { getImageUrl } = useImage();
</script>
<style lang="scss" scoped>
@use './chat-layout.scss';
</style>
