const path = require('path');
// apis
// hooks
// utils
const { mkdirSync, writeFileSync } = require('./utils.js');
const { templateIndexVue, templateClientComponentVue } = require('./templateFile.js');
// stores
// mixins
// configs
const { pages } = require('./pages.js');
// components

pages.forEach(async page => {
  const basePath = `src`;
  const pagePaths = page.path.split('/');
  const folderPaths = pagePaths.filter((pagePath, index) => index !== 0);
  const fileName = pagePaths[pagePaths.length - 1];

  folderPaths.reduce((prev, item) => {
    const nextPath = path.join(basePath, `${prev}/${item}`);
    mkdirSync(nextPath);
    writeFileSync(`${nextPath}/.gitkeep`, 'null not found'); // 生成 对应的占位文件

    return `${prev}/${item}`;
  }, '/pages');

  writeFileSync(`${basePath}/${page.path}/index.vue`, templateIndexVue());

  writeFileSync(`${basePath}/${page.path}/render-${fileName}-default.vue`, templateClientComponentVue({ name: `render-${fileName}-default` }));

  writeFileSync(`${basePath}/${page.path}/render-${fileName}-dingding.vue`, templateClientComponentVue({ name: `render-${fileName}-dingding` }));
  writeFileSync(`${basePath}/${page.path}/render-${fileName}-dingding-shao-xing.vue`, templateClientComponentVue({ name: `render-${fileName}-dingding-shao-xing` }));
  writeFileSync(`${basePath}/${page.path}/render-${fileName}-dingding-ke-qiao.vue`, templateClientComponentVue({ name: `render-${fileName}-dingding-ke-qiao` }));

  writeFileSync(`${basePath}/${page.path}/render-${fileName}-weixin.vue`, templateClientComponentVue({ name: `render-${fileName}-weixin` }));
  writeFileSync(`${basePath}/${page.path}/render-${fileName}-weixin-shao-xing.vue`, templateClientComponentVue({ name: `render-${fileName}-weixin-shao-xing` }));
  writeFileSync(`${basePath}/${page.path}/render-${fileName}-weixin-ke-qiao.vue`, templateClientComponentVue({ name: `render-${fileName}-weixin-ke-qiao` }));
});
