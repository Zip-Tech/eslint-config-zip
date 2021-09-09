module.exports = {
  // Rules relate to possible syntax or logic errors in JavaScript code.
  rules: {
    // Enforce "for" loop update clause moving the counter in the right direction.
    'for-direction': 'error',

    // Enforce `return` statements in getters.
    'getter-return': ['error', { allowImplicit: true }],

    // Disallow using an async function as a Promise executor.
    'no-async-promise-executor': 'error',

    // Disallow await inside of loops.
    'no-await-in-loop': 'error',

    // Disallow comparisons to negative zero.
    'no-compare-neg-zero': 'error',

    // Disallow assignment in conditional expressions.
    'no-cond-assign': ['error', 'always'],

    // Disallow use of `console`.
    'no-console': 'warn',

    // Disallow constant expressions in conditions.
    'no-constant-condition': 'error',

    // Disallow control characters in regular expressions.
    'no-control-regex': 'error',

    // Disallow the use of `debugger`.
    'no-debugger': 'error',

    // Disallow duplicate arguments in `function` definitions.
    'no-dupe-args': 'error',

    // Introduced in ESLint 6.7.0. Disallow duplicate conditions in if-else-if chains.
    // 'no-dupe-else-if': 'warn',

    // Disallow duplicate keys in object literals.
    'no-dupe-keys': 'error',

    // Disallow duplicate case labels.
    'no-duplicate-case': 'error',

    // Disallow empty block statements.
    'no-empty': 'error',

    // Disallow empty character classes in regular expressions.
    'no-empty-character-class': 'error',

    // Disallow reassigning exceptions in `catch` clauses.
    'no-ex-assign': 'error',

    // Disallow unnecessary boolean casts.
    'no-extra-boolean-cast': 'error',

    // Disallow unnecessary parentheses.
    'no-extra-parens': ['off', 'all', {
      conditionalAssign: true,
      nestedBinaryExpressions: false,
      returnAssign: false,
      ignoreJSX: 'all',
      enforceForArrowConditionals: false,
    }],

    // Disallow unnecessary semicolons.
    'no-extra-semi': 'error',

    // Disallow reassigning `function` declarations.
    'no-func-assign': 'error',

    // Disallow assigning to imported bindings.
    'no-import-assign': 'error',

    // Disallow variable or `function` declarations in nested blocks.
    'no-inner-declarations': 'error',

    // Disallow invalid regular expression strings in `RegExp` constructors.
    'no-invalid-regexp': 'error',

    // Disallow irregular whitespace outside of strings and comments.
    'no-irregular-whitespace': 'error',

    // Disallow characters which are made with multiple code points in character class syntax.
    'no-misleading-character-class': 'error',

    // Disallow calling global object properties as functions.
    'no-obj-calls': 'error',

    // Disallow calling some `Object.prototype` methods directly on objects.
    'no-prototype-builtins': 'error',

    // Disallow multiple spaces in regular expressions.
    'no-regex-spaces': 'error',

    // Introduced in ESLint 6.7.0. Disallow returning values from setters.
    // 'no-setter-return': 'error',

    // Disallow sparse arrays.
    'no-sparse-arrays': 'error',

    // Disallow template literal placeholder syntax in regular strings.
    'no-template-curly-in-string': 'warn',

    // Disallow confusing multiline expressions.
    'no-unexpected-multiline': 'error',

    // Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements.
    'no-unreachable': 'error',

    // Disallow control flow statements in `finally` blocks.
    'no-unsafe-finally': 'error',

    // Disallow negating the left operand of relational operators.
    'no-unsafe-negation': 'error',

    // Disallow assignments that can lead to race conditions due to usage of `await` or `yield`.
    'require-atomic-updates': 'off',

    // Require calls to `isNaN()` when checking for `NaN`.
    'use-isnan': 'error',

    // Enforce comparing `typeof` expressions against valid strings.
    'valid-typeof': ['error', { requireStringLiterals: true }],
  },
};
