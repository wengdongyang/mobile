// apis
import { apiGetApiDictTypeAll, apiGetApiProfile, apiGetProxyGoverDingConfig } from '@src/apis';
// hooks
// utils
import { dingdingAuthConfig } from '@src/utils';
// stores
import { useStoreDictList, useStoreUserInfo } from '@src/stores';
// configs
// components
// props
// emits
// refs
// computed
export const useDingdingAuth = () => {
  /**
   * 钉钉鉴权
   */
  const getProxyGoverDingConfig = async () => {
    try {
      const { corpId, ticket } = await apiGetProxyGoverDingConfig();
      dingdingAuthConfig({ ticket, corpId });
    } catch (error) {
      console.warn(error);
    }
  };
  return { getProxyGoverDingConfig };
};

export const useDictList = () => {
  const { setDictList } = useStoreDictList();
  /**
   * 获取字典
   */
  const getApiDictTypeAll = async () => {
    try {
      const { code, data, msg } = await apiGetApiDictTypeAll();
      if (code === 0) {
        setDictList(data || []);
      } else {
        uni.showToast({ icon: 'none', title: msg, duration: 2000 });
      }
    } catch (error) {
      console.warn(error);
    }
  };
  return { getApiDictTypeAll };
};

export const useUserInfo = () => {
  const { setUserinfo } = useStoreUserInfo();
  /**
   * 获取用户信息
   */
  const getApiProfile = async () => {
    try {
      const { code, data, msg } = await apiGetApiProfile({ userSideType: 2 });
      if (code === 0) {
        setUserinfo(data || {});
      } else {
        uni.showToast({ icon: 'none', title: msg, duration: 2000 });
      }
    } catch (error) {
      console.warn(error);
    }
  };
  return { getApiProfile };
};
