<template>
  <chat-layout>
    <!-- <template #header> header </template> -->
    <template #default>
      <render-chat
        v-for="(chatRecord, index) in chatHistoryRecords"
        :key="index"
        :obj="chatRecord.obj"
        :chatRecord="chatRecord"
      />
    </template>
    <template #chatInputBox>
      <render-chat-input-box
        :appId="appId"
        :shareId="shareId"
        :chatId="chatId"
        v-model:loading="loading"
        @clickSend="onClickSend"
      />
    </template>
  </chat-layout>
</template>
<script lang="jsx" setup>
import { onLoad } from '@dcloudio/uni-app';
import { computed, ref } from 'vue';
import { customAlphabet } from 'nanoid';
// apis
// hooks
import { useAiChatInfo, userAiChatHistoryRecords } from './hooks';
// utils
import AiServer from './aiServer';
// stores
// configs
// components
import ChatLayout from './components/chat-layout.vue';
import RenderChat from './components/render-chat.vue';
import RenderChatInputBox from './components/render-chat-input-box.vue';
// props
const props = defineProps({
  pagePath: { type: String, default: 'src/pages/aiChat/index' },
});
// emits
// refs
// computed
const AiServerRef = ref();

const shareId = ref('');

const loading = ref(false);
const { aiChatInfo, aiAppInfo, appId, chatId, outLinkUid, setAiChatInfo } = useAiChatInfo();

const isBind = ref(false); // 是否绑定
const { chatHistoryRecords, setChatHistoryRecords, addHumanChatRecord, addAiChatRecord } = userAiChatHistoryRecords();
/**
 * 初始化AI
 */
const initAiServer = async () => {
  try {
    AiServerRef.value = new AiServer({
      token: '',
      shareId: shareId.value || 'dd68d6d8e227408d83f5f7e0a071e656',
      onGetChatHistoryRecords,
    });

    const response = await AiServerRef.value.getAiChatInfo();

    if (response?.code === 0) {
      setAiChatInfo(response?.data || {});
      await bindAiServer();
    }
  } catch (error) {
    console.warn(error);
  }
};
/**
 * 绑定AI服务
 */
const bindAiServer = async () => {
  try {
    const aiServer = AiServerRef.value;
    if (!aiServer || !chatId.value || !outLinkUid.value) {
      return;
    }
    const { code, data, msg } = await aiServer.postAdminApiSystemFgShareBind();
    if (code === 0) {
      isBind.value = data;
      await aiServer.getChatHistory();
    } else {
      uni.showToast({ title: msg, icon: 'none' });
    }
  } catch (error) {
    console.warn(error);
  }
};
/**
 * 获取聊天历史记录回调
 * @param records
 */
const onGetChatHistoryRecords = records => {
  try {
    setChatHistoryRecords(records);
  } catch (error) {
    console.warn(error);
  }
};
/**
 * 点击发送
 * @param param0
 */
const onClickSend = async ({ type, content }) => {
  try {
    const aiServer = AiServerRef.value;
    const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWSYZ1234567890', 24);
    const dataId = nanoid();
    if (type === 'text') {
      const historyRecordContent = { type: 'text', text: content };
      addHumanChatRecord([historyRecordContent], { dataId });
    } else {
      addHumanChatRecord(content, { dataId });
    }
    // aiServer.sendMessage(content, { dataId });
  } catch (error) {
    console.warn(error);
  }
};

onLoad(option => {
  if (option?.shareId) {
    shareId.value = option.shareId;
  }
  initAiServer();
});
</script>
<style lang="scss" scoped>
@use './render-index-default.scss';
</style>
