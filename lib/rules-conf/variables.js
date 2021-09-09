const confusingBrowserGlobals = require('../confusing-browser-globals');

module.exports = {
  // Rules relate to variable declarations.
  rules: {
    // Require or disallow initialization in variable declarations.
    'init-declarations': 'off',

    // Disallow deleting variables.
    'no-delete-var': 'error',

    // Disallow labels that share a name with a variable.
    'no-label-var': 'error',

    // Disallow specified global variables.
    'no-restricted-globals': ['error', 'isFinite', 'isNaN'].concat(confusingBrowserGlobals),

    // Disallow variable declarations from shadowing variables declared in the outer scope.
    'no-shadow': 'error',

    // Disallow identifiers from shadowing restricted names.
    'no-shadow-restricted-names': 'error',

    // Disallow the use of undeclared variables unless mentioned in '/*global */' comments.
    'no-undef': 'error',

    // Disallow initializing variables to 'undefined'.
    'no-undef-init': 'error',

    // Disallow the use of 'undefined' as an identifier.
    'no-undefined': 'error',

    // Disallow unused variables.
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],

    // Disallow the use of variables before they are defined.
    'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
  },
};
