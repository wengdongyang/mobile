/** @format */
import { customAlphabet } from 'nanoid';
import dayjs from 'dayjs';
// apis
import {
  apiGetAdminApiSystemFgShareInit,
  apiPostAdminApiSystemFgShareGetPaginationRecords,
  apiPostAdminApiSystemFgShareBind,
  apiPostAdminApiSystemFgShareV1Completions,
} from '@src/apis';
// hooks
// utils
// stores
// configs
import { AI_TOKEN, AI_SHARE_ID, AI_CHAT_ID } from '@src/configs';
// components
class AiServer {
  static appId; // 应用id

  static token; // token
  static shareId; // 分享id
  static chatId; // 会话id
  static outLinkUid; // 本地id

  static isBind = false; // 是否绑定好了会话

  constructor(props) {
    const { token, shareId, chatId, outLinkUid, onGetChatHistoryRecords } = props;
    this.token = token; // token
    this.shareId = shareId; // 分享id(必填)

    // 必须成组出现
    this.chatId = chatId; // 会话id
    this.outLinkUid = outLinkUid; // 本地id
    // 必须成组出现
    this.onGetChatHistoryRecords = onGetChatHistoryRecords;
    this.initAiChatInfo();
  }
  /**
   * 初始化
   * 存储聊天信息
   */
  initAiChatInfo = async () => {
    try {
      uni.setStorageSync(AI_TOKEN, this.token);
      uni.setStorageSync(AI_SHARE_ID, this.shareId);
      uni.setStorageSync(AI_CHAT_ID, this.chatId);

      if (!this.outLinkUid) {
        const timeStamp = dayjs().valueOf();
        const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWSYZ1234567890', 24);
        const outLinkUid = `shareChat-${timeStamp}-${nanoid()}`;
        this.outLinkUid = outLinkUid;
      }
    } catch (error) {
      console.warn(error);
    }
  };
  /**
   * 初始化
   * 获取聊天信息
   * 注意如果没有chatId，要自己生成一个
   */
  getAiChatInfo = async () => {
    try {
      return new Promise(async (resolve, reject) => {
        const { shareId, chatId, outLinkUid } = this;
        const response = await apiGetAdminApiSystemFgShareInit({ outLinkUid, shareId, chatId });
        const { code, data } = response;
        if (code === 0) {
          if (data.appId) {
            this.appId = data.appId;
          }

          const nextChatId = data?.chatId;
          if (!nextChatId) {
            const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz1234567890', 12);
            const chatId = nanoid();
            this.chatId = chatId;
            uni.setStorageSync(AI_CHAT_ID, chatId);
            resolve(Object.assign({}, response, { data: Object.assign({}, data, { chatId, outLinkUid: this.outLinkUid }) }));
          } else {
            this.chatId = nextChatId;
            uni.setStorageSync(AI_CHAT_ID, nextChatId);
            resolve(Object.assign({}, response, { data: Object.assign({}, data, { chatId, outLinkUid: this.outLinkUid }) }));
          }
        } else {
          reject(response);
        }
      });
    } catch (error) {
      console.warn(error);
      return {};
    }
  };

  /**
   * @returns
   * 绑定会话
   */
  postAdminApiSystemFgShareBind = async () => {
    try {
      return new Promise(async (resolve, reject) => {
        const { chatId, outLinkUid } = this;
        const response = await apiPostAdminApiSystemFgShareBind({ outLinkUid, chatId });
        if (response.code === 0) {
          this.isBind = response.data;
          resolve(response);
        } else {
          reject(response);
        }
      });
    } catch (error) {
      console.warn(error);
      return {};
    }
  };

  /**
   * 获取聊天信息
   */
  getChatHistory = async () => {
    try {
      const { appId, chatId } = this;
      const { code, data, msg } = await apiPostAdminApiSystemFgShareGetPaginationRecords({ appId, chatId, offset: 0, pageSize: 99 });
      if (code === 0) {
        this.onGetChatHistoryRecords(data?.list || []);
      } else {
        uni.showToast({ title: msg, icon: 'none' });
      }
    } catch (error) {
      console.warn(error);
    }
  };
  /**
   * 发送单纯的文字
   * @param {*} content 文字
   * @content 文字(可能性1)
   * @content 数组(可能性2)[ { "type": "text", "text": "看下有啥问题" }, { "type": "image_url", "image_url": { "url": "" } } ]
   * @param {*} param1
   */
  sendMessage = async (content, { dataId }) => {
    try {
      const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWSYZ1234567890', 24);
      const responseChatItemId = nanoid();
      const cTime = dayjs().format('YYYY-MM-DD HH:mm:ss dddd');
      const { outLinkUid, shareId, chatId, token } = this;
      if (outLinkUid && shareId && chatId) {
        const response = await apiPostAdminApiSystemFgShareV1Completions({
          messages: [{ role: 'user', dataId, content: content }],
          variables: { cTime, _authToken: token },
          shareId,
          chatId,
          outLinkUid,
          responseChatItemId,
          detail: true,
          stream: true,
        });

        console.error(response);
      }
    } catch (error) {
      console.warn(error);
    }
  };
}

export default AiServer;
