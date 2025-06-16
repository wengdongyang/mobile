module.exports = {
  // 针对不同文件类型执行不同命令
  '*.{js,jsx,ts,tsx,json,md,html,vue}': filenames => {
    const files = filenames.join(' ');
    return [`eslint --fix ${files}`, `prettier --write ${files}`, 'git add'];
  },
  '*.{css,less,scss}': filenames => {
    return [`csscomb ${filenames.join(' ')}`, `prettier --write ${filenames.join(' ')}`, 'git add'];
  },
};
