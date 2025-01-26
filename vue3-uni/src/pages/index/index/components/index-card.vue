<template>
  <view class="index-card-layout">
    <view class="index-card-header">{{ title }}</view>
    <view class="index-card-content">
      <slot name="default" />
    </view>
  </view>
</template>
<script lang="jsx" setup>
// apis
// hooks
// utils
// stores
// configs
// components
// props
const props = defineProps({
  pagePath: { type: String, default: 'pages/index/index' },
  title: { type: String }, // 标题
});
// emits
// refs
// computed
</script>
<style lang="scss" scoped>
@use './index-card.scss';
</style>
