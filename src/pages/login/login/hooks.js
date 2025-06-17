// apis
import { apiGetApiDictTypeAll, apiGetApiProfile } from '@src/apis';
// hooks
// utils
// stores
import { useStoreDictList, useStoreUserInfo } from '@src/stores';
// configs
// components
// props
// emits
// exposes
// refs
// computed
/**
 * 获取用户信息和字典
 * @returns 
 */
export const useUserinfoAndDictList = () => {
  const storeUserInfo = useStoreUserInfo();
  const { setUserInfo } = storeUserInfo;

  const storeDictList = useStoreDictList();
  const { setDictList } = storeDictList;
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
  return {
    getUserInfo,
    getDictList,
  };
};
