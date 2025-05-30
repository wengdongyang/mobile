// apis
// hooks
// utils
import { aiRequest } from '@src/utils';
// stores
// configs
// components
/**
 * 获取会话信息
 * @param {*} params
 * @returns
 */
export const apiGetAdminApiSystemFgShareInit = params => {
  return aiRequest({ url: `/admin-api/system/fg-share/init`, params });
};

/**
 * 获取历史记录
 * @param {*} data 
 * @returns 
 */
export const apiPostAdminApiSystemFgShareGetPaginationRecords = data => {
  return aiRequest({ method: 'post', url: `/admin-api/system/fg-share/getPaginationRecords`, data });
}
/**
 * 绑定会话
 * @param {*} params
 * @returns
 */
export const apiPostAdminApiSystemFgShareBind = data => {
  return aiRequest({ method: 'post', url: `/admin-api/system/fg-share/bind`, data });
};
/**
 * 发送消息
 * @param {*} data
 * @returns
 */
export const apiPostAdminApiSystemFgShareV1Completions = data => {
  return aiRequest({ method: 'post', url: `/admin-api/system/fg-share/v1/completions`, data, headers: { accept: 'text/event-stream' } });
};

// {
//     "messages": [
//         {
//             "dataId": "ibE3ggfDQW5RxCkTY52FLMVn",
//             "role": "user",
//             "content": "介绍一下法律法规"
//         }
//     ],
//     "variables": {
//         "_authToken": "",
//         "cTime": "2025-05-30 20:13:11 Friday"
//     },
//     "shareId": "dd68d6d8e227408d83f5f7e0a071e656",
//     "chatId": "6tibq2zm81gx",
//     "outLinkUid": "shareChat-1748570769186-dGp5FvqTQFM1FkN65enC0caA",
//     "responseChatItemId": "yMI9UScNgVT9B4MVf1R0zlA1",
//     "detail": true,
//     "stream": true
// }
// {
//     "messages": [
//         {
//             "role": "user",
//             "dataId": "mKRiuN6ELm9Ppm8BQh5IccTI"
//         }
//     ],
//     "variables": {
//         "cTime": "2025-05-30 20:15:32 Friday",
//         "_authToken": ""
//     },
//     "shareId": "dd68d6d8e227408d83f5f7e0a071e656",
//     "chatId": "rsp41xr2li8r",
//     "outLinkUid": "shareChat-1748607273063-qIBx7Tqs0W93hh0o1U5F2tgA",
//     "responseChatItemId": "juAd4JBFSYNPHlDKTR1jmGSS",
//     "detail": true,
//     "stream": true
// }