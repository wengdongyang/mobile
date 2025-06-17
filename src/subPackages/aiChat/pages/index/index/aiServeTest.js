export const aiServeTest = () => {
  try {
    const aiRequest = uni.request({
      url: 'http://10.2.0.56:48095/admin-api/system/fg-share/v1/completions',
      method: 'POST',
      responseType: 'arraybuffer',
      header: {
        Accept: 'text/event-stream',
        'Content-Type': 'application/json',
        Shareid: '9c086836d18d4d6286f9031491c3bfaf',
        Authtoken: '54637e79f94b02598221c1e28c5aeb7a',
      },
      data: JSON.stringify({
        messages: [
          {
            dataId: 'ly0MdGEENHTVGIsCiT21emPg',
            role: 'user',
            content: '123123',
          },
        ],
        variables: {
          _authToken: '54637e79f94b02598221c1e28c5aeb7a',
          cTime: '2025-05-29 16:20:42 Thursday',
        },
        shareId: '9c086836d18d4d6286f9031491c3bfaf',
        chatId: 'cbtf2da4nqx7',
        outLinkUid: 'shareChat-1748428666578-HlyOUdeWdNIWSkgOG3SNWvfn',
        responseChatItemId: 'pInG6HDGgL4PdgYjJgdVs1j6',
        detail: true,
        stream: true,
      }),
      enableChunked: true, // 开启流式传输
      success(res) {
        console.error('请求成功:', res);
        uni.showToast({ icon: 'none', title: '请求成功' });
      },
      fail(err) {
        console.error('请求失败:', err);
        // uni.showToast({ icon: 'none', title: '请求失败' });
      },
      complete(e) {
        console.error('完全结束', e);
      },
    });

    aiRequest.onChunkReceived(async res => {
      console.error('收到数据:', res);
      // uni.showToast({ icon: 'none', title: '收到数据' });
    });
  } catch (error) {
    console.error('错误:', error);
  }
};
