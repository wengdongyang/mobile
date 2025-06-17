module.exports = {
  semi: true,
  tabWidth: 2,
  printWidth: 180,
  singleQuote: true,
  arrowParens: 'avoid',
  insertPragma: false,
  trailingComma: 'all',
  jsxSingleQuote: true,
  bracketSpacing: true,
  singleAttributePerLine: true,
  overrides: [
    {
      files: ['*.css', '*.scss', '*.less'],
      options: { parser: 'css' },
    },
  ],
};
