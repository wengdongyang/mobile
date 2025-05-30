/** @format */
import { customAlphabet } from 'nanoid';
import dayjs from 'dayjs';
// apis
import { apiPostAdminApiSystemFgShareInit } from '@src/apis';
// hooks
// utils
// stores
// configs
import { AI_TOKEN, AI_SHARE_ID, AI_CHAT_ID } from '@src/configs';
// components
class AiServer {
  static token;
  static shareId;
  static chatId;
  static outLinkUid;

  constructor(props) {
    const { token, shareId, chatId, outLinkUid } = props;
    this.token = token; // token
    this.shareId = shareId; // 分享id
    this.chatId = chatId; // 会话id
    this.outLinkUid = outLinkUid; // 本地id
    this.initAiChatInfo();
  }

  initAiChatInfo = async () => {
    try {
      uni.setStorageSync(AI_TOKEN, this.token);
      uni.setStorageSync(AI_SHARE_ID, this.shareId);
      uni.setStorageSync(AI_CHAT_ID, this.chatId);
    } catch (error) {
      console.warn(error);
    }
  };
  /**
   * 初始化
   */
  getAiChatInfo = async () => {
    try {
      return new Promise(async (resolve, reject) => {
        const { shareId, chatId, outLinkUid } = this;
        const response = await apiPostAdminApiSystemFgShareInit({ outLinkUid, shareId, chatId });
        if (response.code === 0) {
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
}

export default AiServer;
