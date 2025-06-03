<template>
  <chat-layout>
    <!-- <template #header> header </template> -->
    <template #default>
      <render-chat
        v-for="(chatRecord, index) in chatHistoryRecords"
        :key="index"
        :obj="chatRecord.obj"
        :chatRecord="chatRecord"
        :aiAppInfo="aiAppInfo"
      />
      <render-chat-loading
        :aiAppInfo="aiAppInfo"
        v-if="loading"
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
<script lang="jsx" name="renderIndexDefault" setup>
import { onLoad } from '@dcloudio/uni-app';
import { customAlphabet } from 'nanoid';
import { ref } from 'vue';
// apis
// hooks
import { useAiChatInfo, userAiChatHistoryRecords } from './hooks';
// utils
import AiServer from './aiServer';
// stores
// configs
// components
import ChatLayout from './components/chat-layout.vue';
import RenderChatInputBox from './components/render-chat-input-box.vue';
import RenderChatLoading from './components/render-chat-loading';
import RenderChat from './components/render-chat.vue';
// props
const props = defineProps({
  pagePath: { type: String, default: 'src/pages/aiChat/index' },
});
// emits
// refs
// computed
const AiServerRef = ref();

const shareId = ref('');
const authToken = ref('');

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
      authToken: authToken.value,
      shareId: shareId.value || '9c086836d18d4d6286f9031491c3bfaf',
      onGetAiChatInfo,
      onBindAiChat,
      onGetChatHistoryRecords,
      onGetChatCompletions: contents => {
        loading.value = false;
        addAiChatRecord(contents);
      },
    });
  } catch (error) {
    console.warn(error);
  }
};

const onGetAiChatInfo = async data => {
  try {
    setAiChatInfo(data);
  } catch (error) {
    console.warn(error);
  }
};

const onBindAiChat = async () => {
  try {
    isBind.value = true;
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
    aiServer.sendMessage(content, { dataId });
  } catch (error) {
    console.warn(error);
  }
};

onLoad(option => {
  if (option?.shareId) {
    shareId.value = option.shareId;
  }
  if (option?.authToken) {
    authToken.value = option.authToken;
  }
  initAiServer();
});
</script>
<style lang="scss" scoped>
@use './render-index-default.scss';
</style>
