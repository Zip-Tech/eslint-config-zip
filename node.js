module.exports = {
  env: {
    es2017: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  extends: [
    './lib/rules-conf/possible-errors.js',
    './lib/rules-conf/best-practices.js',
    './lib/rules-conf/variables.js',
    './lib/rules-conf/es6.js',
    './lib/rules-conf/styles.js',
    './lib/rules-conf/node.js',
  ].map(require.resolve),
};
