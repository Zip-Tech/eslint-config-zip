// Peer dependencies:
// https://github.com/typescript-eslint/typescript-eslint
// "@typescript-eslint/eslint-plugin": "^2.3.2",
// "@typescript-eslint/parser": "^2.3.2",

module.exports = {
  env: {
    es2017: true,
    node: true,
  },
  // parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    './lib/rules-conf/possible-errors.js',
    './lib/rules-conf/best-practices.js',
    './lib/rules-conf/strict-mode.js',
    './lib/rules-conf/variables.js',
    './lib/rules-conf/es6.js',
    './lib/rules-conf/styles.js',
    './lib/rules-conf/typescript.js',
    './lib/rules-conf/angular.js',
  ].map(require.resolve),
};

