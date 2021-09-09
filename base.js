module.exports = {
  env: {
    es2017: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  extends: [
    './lib/rules-conf/possible-errors.js',
    './lib/rules-conf/best-practices.js',
    './lib/rules-conf/strict-mode.js',
    './lib/rules-conf/variables.js',
    './lib/rules-conf/es6.js',
    './lib/rules-conf/styles.js',
  ].map(require.resolve),
};
