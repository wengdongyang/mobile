import dd from 'gdt-jsapi';
/**
 * 钉钉鉴权
 * @param {*} ticket
 * @param {*} corpId
 * @returns
 */
export const dingdingAuthConfig = ({ ticket, corpId }) => {
  return new Promise((resolve, reject) => {
    dd.authConfig({
      ticket: ticket,
      jsApiList: [
        'saveFile',
        'openDocument',
        'downloadFile',
        'getGeolocation',
        'searchOnMap',
        'startGeolocation',
        'stopGeolocation',
        'locateOnMap',
        'onRecordAudioEnd',
        'downloadAudio',
        'pauseAudio',
        'playAudio',
        'resumeAudio',
        'stopAudio',
        'stopRecordAudio',
        'onAudioPlayEnd',
        'alert',
        'setTitle',
        'hideLoading',
        'showLoading',
        'showTitleBar',
        'hideTitleBar',
      ],
    })
      .then(res => {
        console.warn('authConfig', res);
        dd.ready(() => resolve());
      })
      .catch(error => {
        console.warn('authConfig', error);
      });
  });
};
