<template>
  <view class="render-login-weixin-layout">
    <wd-button
      @click="onClickOneClickLogin"
      block
    >
      一键登录
    </wd-button>
  </view>
</template>
<script lang="jsx" name="render-login-weixin" setup>
import { onLoad, onShow } from '@dcloudio/uni-app';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
// apis
import { apiGetApiDictTypeAll, apiGetApiProfile, apiPostWxUserLogin } from '@src/apis';
// hooks
import { useImage } from '@src/hooks';
// utils
// stores
import { useStoreDictList, useStoreUserInfo } from '@src/stores';
// configs
import { ENV } from '@src/configs';
// components
// props
const props = defineProps({
  pagePath: { type: String, default: 'pages/login/login' },
});
// emits
const emit = defineEmits([]);
// exposes
defineExpose({});
// refs
// computed
// hooks use
const { getImageUrl } = useImage();

const storeUserInfo = useStoreUserInfo();
const { setToken, setUserInfo } = storeUserInfo;
const { token, userInfo } = storeToRefs(storeUserInfo);

const storeDictList = useStoreDictList();
const { setDictList } = storeDictList;
const { dictList } = storeToRefs(storeDictList);

const pageOptions = ref({}); // url 参数

/**
 * 获取用户信息
 */
const getUserInfo = async () => {
  try {
    const { code, data, msg } = await apiGetApiProfile({ userSideType: 1 });
    if (code === 0) {
      setUserInfo(data);
    } else {
      uni.showToast({ title: msg, icon: 'none' });
    }
  } catch (error) {
    console.warn(error);
  }
};
/**
 * 获取字典数据
 */
const getDictList = async () => {
  try {
    const { code, data, msg } = await apiGetApiDictTypeAll();
    if (code === 0) {
      setDictList(data || []);
    } else {
      uni.showToast({ title: msg, icon: 'none' });
    }
  } catch (error) {
    console.warn(error);
  }
};
/**
 * 微信登陆
 * @param dataObject 登录参数
 */
const postWxUserLogin = async dataObject => {
  try {
    const { code, data, msg } = await apiPostWxUserLogin({ appId: ENV.APP_ID, code: dataObject.code });
    if (code === 0) {
      setToken(data.token);
      await getUserInfo();
      await getDictList()
    } else {
      uni.showToast({ title: msg, icon: 'none' });
    }
  } catch (error) {
    console.warn(error);
  }
};

const onClickOneClickLogin = () => {
  try {
    uni.login({
      success: res => {
        postWxUserLogin(res);
      },
    });
  } catch (error) {
    console.warn(error);
  }
};
onLoad(options => {
  pageOptions.value = options;
  console.log('onLoad');
});
onShow(() => {
  console.log('onShow');
});
</script>
<style lang="scss" scoped>
@use './render-login-weixin.scss';
</style>
