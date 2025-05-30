const otherPagesInfo = {
  easycom: {
    autoscan: true,
    custom: {
      '^uni-(.*)': '@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue',
      '^wd-(.*)': 'wot-design-uni/components/wd-$1/wd-$1.vue',
    },
  },
  globalStyle: {
    navigationBarTextStyle: 'black',
    navigationBarBackgroundColor: '#F8F8F8',
    navigationBarTitleText: '基层智治综合应用·应急消防治理',
    backgroundColor: '#F8F8F8',
  },
  tabBar: {
    color: '#899096',
    selectedColor: '#A19185',
    borderStyle: 'white',
    backgroundColor: '#FFFFFF',
    list: [
      {
        pagePath: 'pages/index/index/index',
        text: '首页',
        iconPath: './static/tab/tab-icon-home-default.png',
        selectedIconPath: './static/tab/tab-icon-home-active.png',
      },
      {
        pagePath: 'pages/mine/mine/index',
        text: '我的',
        iconPath: './static/tab/tab-icon-mine-default.png',
        selectedIconPath: './static/tab/tab-icon-mine-active.png',
      },
    ],
  },
};

const CLIENT_TARGET = {
  DEFAULT: 'default', // 全部通用
  WEIXIN: 'weixin', // 微信小程序通用
  WEIXIN_KE_QIAO: 'weixin-ke-qiao', // 微信小程序-柯桥
  WEIXIN_SHAO_XING: 'weixin-shao-xing', // 微信小程序-绍兴
  DINGDING: 'dingding', // 浙政钉H5通用
  DINGDING_KE_QIAO: 'dingding-ke-qiao', // 浙政钉H5-柯桥
  DINGDING_SHAO_XING: 'dingding-shao-xing', // 浙政钉H5-绍兴
};

const pages = [
  {
    path: 'pages/login/index',
    style: { navigationBarTitleText: '登陆' },
    clients: [CLIENT_TARGET.DEFAULT, CLIENT_TARGET.WEIXIN],
  },
  {
    path: 'pages/login/login',
    style: { navigationBarTitleText: '登陆' },
    clients: [CLIENT_TARGET.WEIXIN, CLIENT_TARGET.DINGDING],
  },
  {
    path: 'pages/index/index',
    style: { navigationBarTitleText: '首页' },
    clients: [CLIENT_TARGET.WEIXIN, CLIENT_TARGET.DINGDING],
    components: ['indexCard', 'renderBanner', 'renderInspection', 'renderStatistics', 'renderAction'],
  },
  {
    path: 'pages/mine/mine',
    style: { navigationBarTitleText: '我的' },
    clients: [CLIENT_TARGET.DEFAULT],
  },
  {
    path: 'pages/mine/user-info',
    style: { navigationBarTitleText: '用户信息' },
    clients: [CLIENT_TARGET.DEFAULT],
  },
  {
    path: 'pages/aiChat/index',
    style: { navigationBarTitleText: 'AI聊天' },
    clients: [CLIENT_TARGET.DEFAULT],
    components: ['chatLayout', 'renderChat', 'renderChatLoading', 'renderChatInputBox'],
  },
];

const subPackages = [
  {
    root: 'subPackages/aiChat',
    pages: [
      {
        path: 'pages/index/index',
        style: { navigationBarTitleText: '首页' },
        clients: [CLIENT_TARGET.DEFAULT],
      },
    ],
  },
];

module.exports = { otherPagesInfo, pages, subPackages, CLIENT_TARGET };
