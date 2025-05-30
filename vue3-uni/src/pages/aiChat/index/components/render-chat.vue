<template>
  <view
    class="render-chat-layout"
    :class="obj"
  >
    <view class="render-chat-aside"></view>
    <view class="render-chat-content">
      <view class="chat-content" v-for="(content, idx) in chatRecord.value" :key="idx">
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
  pagePath: { type: String, default: 'src/pages/aiChat/index' },
  obj: { type: String, validator: val => ['Human', 'AI'].includes(val) },
  chatRecord: { type: Object, default: () => ({}) },
});
// emits
// refs
// computed
const { getImageUrl } = useImage();
</script>
<style lang="scss" scoped>
@use './render-chat.scss';
</style>
