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
import AiServer from './aiServer';
// stores
// configs

// components
// props
const props = defineProps({
  pagePath: { type: String, default: 'src/pages/aiChat/index' },
});
// emits
// refs
// computed
const { getImageUrl } = useImage();
const AiServerRef = ref();

const aiChatInfo = ref({});
const aiAppInfo = computed(() => {
  return aiChatInfo.value?.app || {};
});

const initAiServer = async () => {
  try {
    const aiServer = new AiServer({
      token: '',
      shareId: 'dd68d6d8e227408d83f5f7e0a071e656',
      chatId: 'w0bcbbqyzhp9',
      outLinkUid: 'shareChat-1748573754212-fErjbLqlBN9LSSOwzrCbweZA',
    });
    const response = await aiServer.getAiChatInfo();
    
    if (response?.code === 0) {
      aiChatInfo.value = response?.data || {};
    }
    
    AiServerRef.value = aiServer;
  } catch (error) {
    console.warn('初始化AiServer失败', error);
  }
};

onLoad(() => {
  initAiServer();
});
</script>
<style lang="scss" scoped>
@use './render-index-default.scss';
</style>
