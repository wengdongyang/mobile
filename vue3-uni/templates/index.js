const path = require('path');
const lodash = require('lodash');
// apis
// hooks
// utils
const { mkdirSync, writeFileSync } = require('./utils.js');
const { templateIndexVue, templateClientComponentVue, templateScss } = require('./templateFile.js');
// stores
// mixins
// configs
const { pages, otherPagesInfo, subPackages, CLIENT_TARGET } = require('./pages.js');
// components
const { kebabCase } = lodash;

pages.forEach(async page => {
  const { path: pagePath, clients = [], components = [] } = page;
  const basePath = `src`;
  const pagePaths = pagePath.split('/');
  const folderPaths = pagePaths.filter((pagePath, index) => index !== 0);
  const fileName = kebabCase(pagePaths[pagePaths.length - 1]);

  folderPaths.reduce((prev, item) => {
    const nextPath = path.join(basePath, `${prev}/${item}`);
    mkdirSync(nextPath);
    writeFileSync(`${nextPath}/.gitkeep`, 'null not found', true); // 生成 对应的占位文件

    return `${prev}/${item}`;
  }, '/pages');

  mkdirSync(`${basePath}/${pagePath}/components`);
  writeFileSync(`${basePath}/${pagePath}/components/.gitkeep`, 'null not found', true);
  mkdirSync(`${basePath}/${pagePath}/assets`);
  mkdirSync(`${basePath}/${pagePath}/assets/images`);
  writeFileSync(`${basePath}/${pagePath}/assets/.gitkeep`, 'null not found', true);
  writeFileSync(`${basePath}/${pagePath}/assets/images/.gitkeep`, 'null not found', true);

  writeFileSync(`${basePath}/${pagePath}/index.vue`, templateIndexVue({ name: fileName }));

  Object.values(CLIENT_TARGET).forEach(clientTarget => {
    if (clients.includes(clientTarget)) {
      writeFileSync(`${basePath}/${pagePath}/render-${fileName}-${clientTarget}.scss`, templateScss({ path: pagePath }), true);
      writeFileSync(`${basePath}/${pagePath}/render-${fileName}-${clientTarget}.vue`, templateClientComponentVue({ pagePath, name: `render-${fileName}-${clientTarget}` }));
    }
  });

  components.forEach(componentName => {
    writeFileSync(`${basePath}/${pagePath}/components/${kebabCase(componentName)}.scss`, templateScss({ path: pagePath }), true);
    writeFileSync(`${basePath}/${pagePath}/components/${kebabCase(componentName)}.vue`, templateClientComponentVue({ pagePath, name: `${kebabCase(componentName)}` }));
  });
});

writeFileSync(
  `src/pages.json`,
  JSON.stringify(
    Object.assign({}, otherPagesInfo, {
      pages: pages.map(page => Object.assign({}, { path: `${page.path}/index`, style: page.style })),
      subPackages
    }),
  ),
  true,
);
