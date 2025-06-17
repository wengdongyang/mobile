<template>
  <view class="render-chat-input-box-layout">
    <view
      class="render-image-list"
      v-if="images.length > 0"
    >
      <view
        class="image-item-content"
        v-for="(img, idx) in images"
        :key="idx"
      >
        <wd-img
          class="image"
          :src="img"
          enablePreview
        />
        <view
          class="remove"
          @click="onClickRemoveImage(idx)"
        >
          <wd-icon
            class="remove-icon"
            name="close-normal"
            color="red"
          />
        </view>
      </view>
    </view>
    <view
      class="image-upload"
      @click="onClickUploadImage"
      v-else
    >
      <wd-icon name="image" />
      图片/视频识别隐患
    </view>
    <view class="render-chat-input-box-content">
      <view class="main-content">
        <wd-input
          type="text"
          v-model="content"
          placeholder="给绍兴应急小师爷发送消息"
          :disabled="loading || uploadLoading"
          @confirm="onClickSend"
          no-border
        />
      </view>
      <view class="send-aside">
        <image
          class="icon-send"
          :src="IconSend"
          :loading="loading || uploadLoading"
          @click="onClickSend"
        />
        <!-- <wd-button
          size="small"
          plain
          :loading="loading || uploadLoading"
          @click="onClickSend"
        >
          发送
        </wd-button> -->
      </view>
    </view>
  </view>
</template>
<script lang="jsx" setup>
import * as lodash from 'lodash';
import { ref } from 'vue';
// apis
// hooks
// utils
// stores
// configs
import { AUTH_TOKEN } from '@src/configs';
import IconSend from '../assets/images/icon-send.png';
// components
// props
const props = defineProps({
  pagePath: { type: String, default: 'src/pages/aiChat/index' },
  isSupportImage: { type: Boolean, default: true }, // 是否支持图片

  appId: { type: String, default: '' }, // 应用id
  shareId: { type: String, default: '' }, // 分享id
  chatId: { type: String, default: '' }, // 聊天id

  loading: { type: Boolean, default: false }, // 是否正在请求中
});
// emits
const emit = defineEmits(['update:loading', 'clickSend']);
// refs
// computed

const uploadLoading = ref(false); // 是否正在上传中

const images = ref([]);
const content = ref('');

/**
 * 点击上传图片
 */
const onClickUploadImage = () => {
  try {
    const authToken = uni.getStorageSync(AUTH_TOKEN);
    if (props.loading || uploadLoading.value) {
      uni.showToast({ title: '请稍后再试', icon: 'none' });
    } else {
      if (images.value.length >= 1) {
        uni.showToast({ title: '最多只能上传1张图片', icon: 'none' });
        return;
      }
      uni.chooseImage({
        success: res => {
          const filePath = lodash.get(res, ['tempFilePaths', 0]);
          uploadLoading.value = true;
          uni.uploadFile({
            url: 'http://10.2.0.56:48095/admin-api/system/fg-share/uploadFile',
            filePath: filePath,
            name: 'file',
            header: {
              shareId: props.shareId,
              authToken,
            },
            formData: {
              bucketName: 'chat',
              metadata: JSON.stringify({ chatId: props.chatId }),
              data: JSON.stringify({ appId: props.appId, shareId: props.shareId, chatId: props.chatId }),
              shareId: props.shareId,
            },
            success: uploadFileRes => {
              const { code, data, msg } = JSON.parse(uploadFileRes.data);
              if (code === 0) {
                const previewUrl = lodash.get(data, 'previewUrl');
                if (previewUrl) {
                  images.value.push(previewUrl);
                }
              } else {
                uni.showToast({ title: msg, icon: 'none' });
              }
            },
            fail: err => {
              uni.showToast({ title: '上传失败', icon: 'none' });
            },
            complete: () => {
              uploadLoading.value = false;
            },
          });
        },
      });
    }
  } catch (error) {
    console.warn(error);
    uploadLoading.value = false;
  }
};

const onClickRemoveImage = index => {
  try {
    images.value.splice(index, 1);
  } catch (error) {
    console.warn(error);
  }
};

const onClickSend = () => {
  try {
    if (props.loading || uploadLoading.value) {
      uni.showToast({ title: '请稍后再试', icon: 'none' });
    } else {
      if (images.value.length > 0) {
        const textContent = content.value ? { type: 'text', text: content.value } : null;
        const imagesContents = images.value.map(img => {
          return { type: 'image_url', image_url: { url: img } };
        });
        const contents = [textContent, ...imagesContents].filter(Boolean);
        emit('clickSend', { type: 'imageText', content: contents });
        emit('update:loading', true);
        images.value = [];
        content.value = '';
      } else {
        if (content.value) {
          emit('clickSend', { type: 'text', content: content.value });
          emit('update:loading', true);
          images.value = [];
          content.value = '';
        } else {
          uni.showToast({ title: '请输入内容', icon: 'none' });
        }
      }
    }
  } catch (error) {
    console.warn(error);
  }
};
</script>
<style lang="scss" scoped>
@use './render-chat-input-box.scss';
</style>
