import FingerprintJS from 'fingerprintjs2';
import { storeToRefs } from 'pinia';
// apis
import { apiGetCableSignSecurity } from '@src/apis';
// hooks
// utils
// stores
import { useStoreDevice } from '@src/stores';
// configs
// components
// props
// emits
// refs
// computed
export const useDevice = () => {
  const storeDevice = useStoreDevice();
  const { setDeviceFingerprint, setDeviceSecurity } = storeDevice;
  const { deviceFingerprint, deviceSecurity } = storeToRefs(storeDevice);
  /**
   * 获取设备指纹和
   */
  const getDeviceFingerprint = async () => {
    try {
      return new Promise((resolve, reject) => {
        FingerprintJS.get(async components => {
          const values = components.map(component => component.value);
          const deviceFingerprint = FingerprintJS.x64hash128(values.join(''), 31);

          await setDeviceFingerprint(deviceFingerprint);

          const { code, data, msg } = await apiGetCableSignSecurity();
          if (code === 0) {
            setDeviceSecurity(data);
            resolve();
          } else {
            setDeviceSecurity('');
            uni.showToast({ title: msg, icon: 'none' });
            reject();
          }
        });
      });
    } catch (error) {
      console.warn(error);
    }
  };
  return {
    deviceFingerprint,
    deviceSecurity,
    getDeviceFingerprint,
  };
};
