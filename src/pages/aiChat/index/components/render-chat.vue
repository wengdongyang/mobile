<template>
  <view
    class="render-chat-layout"
    :class="obj"
  >
    <view class="render-chat-aside">
      <block v-if="obj === 'Human'">
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
      </block>
      <block v-else>
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
      </block>
    </view>
    <view class="render-chat-content">
      <view
        class="chat-content"
        v-for="(content, idx) in chatRecord.value"
        :key="idx"
      >
        <block v-if="content.type === 'text'">
          {{ content.text }}
        </block>
        <block v-else-if="content.type === 'image'">
          <wd-img
            class="image"
            v-if="content?.file?.url"
            :src="content.file.url"
            width="500rpx"
            height="500rpx"
            enablePreview
          />
        </block>
      </view>
    </view>
  </view>
</template>
<script lang="jsx" setup>
// apis
// hooks
// utils
import { baseURL } from '@src/utils';
// stores
// configs
// components
// props
const props = defineProps({
  pagePath: { type: String, default: 'src/pages/aiChat/index' },
  obj: { type: String, validator: val => ['Human', 'AI'].includes(val) },
  chatRecord: { type: Object, default: () => ({}) },
  aiAppInfo: { type: Object, default: () => ({}) },
});
// emits
// refs
// computed
</script>
<style lang="scss" scoped>
@use './render-chat.scss';
</style>
