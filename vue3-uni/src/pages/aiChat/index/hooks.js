import { onLoad, onShow } from '@dcloudio/uni-app';
import * as lodash from 'lodash';
import { computed, ref, unref, watch } from 'vue';
import { customAlphabet } from 'nanoid';
import dayjs from 'dayjs';
import { get } from '@vueuse/core';

export const useAiChatInfo = () => {
  const aiChatInfo = ref({});
  // 应用信息
  const aiAppInfo = computed(() => {
    return aiChatInfo.value?.app || {};
  });
  // appId
  const appId = computed(() => {
    return aiChatInfo.value?.appId || '';
  });
  // 聊天id
  const chatId = computed(() => {
    return aiChatInfo.value?.chatId || '';
  });
  // 本地id
  const outLinkUid = computed(() => {
    return aiChatInfo.value?.outLinkUid || '';
  });
  const setAiChatInfo = nextValue => {
    try {
      aiChatInfo.value = nextValue;
    } catch (error) {
      console.warn(error);
    }
  };
  return { aiChatInfo, aiAppInfo, appId, chatId, outLinkUid, setAiChatInfo };
};

export const userAiChatHistoryRecords = () => {
  const chatHistoryRecords = ref([]);

  const setChatHistoryRecords = val => {
    chatHistoryRecords.value = val;
  };

  const addHumanChatRecord = (content, { dataId }) => {
    try {
      const nextValue = content.map(val => {
        if (val.type === 'image_url') {
          const url = lodash.get(val, ['image_url', 'url']);
          return { type: 'image', file: { url: url } };
        } else {
          return val;
        }
      });
      const chatRecord = {
        dataId,
        obj: 'Human',
        value: nextValue,
        responseData: [],
        userGoodFeedback: null,
        userBadFeedback: null,
      };
      chatHistoryRecords.value.push(chatRecord);
    } catch (error) {
      console.warn(error);
    }
  };

  const addAiChatRecord = () => {
    try {
    } catch (error) {
      console.warn(error);
    }
  };

  return {
    chatHistoryRecords,
    setChatHistoryRecords,
    addHumanChatRecord,
    addAiChatRecord,
  };
};
