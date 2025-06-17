const fs = require('fs');
// apis
// hooks
// utils
// stores
// mixins
// configs
// components
/**
 * 生成文件夹
 * @param {*} dirname
 */
const mkdirSync = dirname => {
  if (fs.existsSync(dirname)) {
    // console.log(`dirname=========${dirname}已存在`);
  } else {
    console.log(`创建=========${dirname}`);
    fs.mkdirSync(dirname, { recursive: false });
  }
};
/**
 * 写入文件
 * @param {*} fileName
 * @param {*} fileContent
 * @param {*} isOver 是否强制覆盖
 */
const writeFileSync = (fileName, fileContent, isOver) => {
  if (fs.existsSync(fileName)) {
    if (isOver) {
      fs.rmSync(fileName);
      fs.writeFileSync(fileName, fileContent);
    }
  } else {
    fs.writeFileSync(fileName, fileContent);
  }
};
module.exports = { mkdirSync, writeFileSync };
