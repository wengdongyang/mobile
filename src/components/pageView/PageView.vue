<template>
  <view class="page-view">
    <slot name="default" />
  </view>
</template>
<script name="pageView" setup></script>
<style lang="scss" scoped>
.page-view {
  width: 750upx;
  height: 100%;
  overflow-y: auto;
}
</style>
