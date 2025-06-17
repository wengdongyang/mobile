/** @format */

const BASE_URL = 'https://wlxc.ikeqiao.net';

class aiRecorderServer {
  static token;

  static recorderManagerRef; // 录音管理器

  static isLock = false; // 是否锁定

  constructor(props) {
    const { token, audioTranslationSuccessfulCallback } = props;
    this.token = token; // token
    this.audioTranslationSuccessfulCallback = audioTranslationSuccessfulCallback;
    this.initRecorderManager();
  }

  /**
   * 初始化录音管理器权限
   */
  initAuthorizeRecorder = () => {
    try {
      uni.authorize({
        scope: 'scope.record',
        success() {
          this.initRecorderManager();
        },
        fail() {
          console.debug('暂无麦克风权限', res);
        },
      });
    } catch (error) {
      console.error('Error initializing recorder manager:', error);
    }
  };
  /**
   * 初始化录音管理器
   */
  initRecorderManager = () => {
    try {
      if (this.recorderManagerRef) {
        this.recorderManagerRef = null;
      }
      this.recorderManagerRef = uni.getRecorderManager();
      this.recorderManagerRef.onStart(() => {
        console.warn('开始录音');
      });
      this.recorderManagerRef.onStop(this.recorderManagerOnStop);
    } catch (error) {
      console.error('Error initializing recorder manager:', error);
    }
  };
  /**
   * 开始录音
   */
  recorderManagerStart = () => {
    try {
      if (this.recorderManagerRef) {
        const options = {
          duration: 60000,
          sampleRate: 8000,
          numberOfChannels: 1,
          encodeBitRate: 48000,
          format: 'PCM',
        };
        this.recorderManagerRef.start(options);
      }
    } catch (error) {
      console.error('Error starting recorder manager:', error);
    }
  };
  /**
   * 停止录音
   */
  recorderManagerStop = () => {
    try {
      if (this.recorderManagerRef) {
        this.recorderManagerRef.stop();
      }
    } catch (error) {
      console.error('Error stopping recorder manager:', error);
    }
  };
  /**
   * 录音结束回调
   * @param {*} res
   */
  recorderManagerOnStop = res => {
    try {
      const { token } = this;
      const { tempFilePath } = res;
      uni.showLoading({ title: '音频解析中', mask: true });
      uni.uploadFile({
        url: `${baseUrl}/kxr/api/iflytek/translate`,
        filePath: tempFilePath,
        fileType: 'audio',
        name: 'file',
        formData: { suffix: 'pcm' },
        header: {
          'content-type': 'multipart/form-data',
          Authorization: token ? `Bearer ${token}` : '',
        },
        success(uploadFileRes) {
          const { code, data } = JSON.parse(uploadFileRes.data);
          if (code == 200 && data) {
            this.audioTranslationSuccessfulCallback(data);
          } else {
            uni.showToast({ icon: 'none', title: '音频解析失败', duration: 2000 });
          }
        },
        complete() {
          uni.hideLoading();
        },
      });
    } catch (error) {
      console.error('Error initializing recorder manager:', error);
    } finally {
      uni.hideLoading();
    }
  };
}
