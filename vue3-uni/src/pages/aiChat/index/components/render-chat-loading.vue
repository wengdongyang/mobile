<template>
  <view class="render-chat-layout AI">
    <view class="render-chat-aside">
      <wd-img
        class="avatar"
        v-if="aiAppInfo.avatar"
        :src="`${baseURL}${aiAppInfo.avatar}`"
      >
        <template #error>
          <view class="error-wrap">error</view>
        </template>
        <template #loading>
          <view class="loading-wrap">
            <wd-loading />
          </view>
        </template>
      </wd-img>
    </view>
    <view class="render-chat-content">
      <wd-loading />
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
  pagePath: { type: String, default: 'src/pages/aiChat/index' },
  aiAppInfo: { type: Object, default: () => ({}) },
});
// emits
// refs
// computed
</script>
<style lang="scss" scoped>
@use './render-chat-loading.scss';
</style>
