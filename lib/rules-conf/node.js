module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],

      // Disables a few rules for TS projects.
      rules: {
        // Disallows invocation of `require()`.
        '@typescript-eslint/no-require-imports': 'off',
      },
    },
  ],

  // Rules relate to code running in Node.js, or in browsers with CommonJS.
  rules: {
    // Require 'return' statements after callbacks.
    'callback-return': 'warn',

    // Require 'require()' calls to be placed at top-level module scope.
    'global-require': 'error',

    // Require error handling in callbacks.
    'handle-callback-err': 'warn',

    // Disallow use of the 'Buffer()' constructor.
    'no-buffer-constructor': 'error',

    // Disallow 'require' calls to be mixed with regular variable declarations.
    'no-mixed-requires': 'error',

    // Disallow 'new' operators with calls to 'require'.
    'no-new-require': 'error',

    // Disallow string concatenation with '__dirname' and '__filename'.
    'no-path-concat': 'error',

    // Disallow the use of 'process.env'.
    'no-process-env': 'warn',

    // Disallow the use of 'process.exit()'.
    'no-process-exit': 'warn',

    // Disallow specified modules when loaded by 'require'.
    'no-restricted-modules': 'off',

    // Disallow synchronous methods.
    'no-sync': 'off',
  },
};
