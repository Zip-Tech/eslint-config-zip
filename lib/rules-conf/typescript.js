module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],

      // Disables a few rules that are already covered by TypeScript's typechecker.
      rules: {
        // Enforce `return` statements in getters.
        'getter-return': 'off',

        // Disallow duplicate arguments in `function` definitions.
        'no-dupe-args': 'off',

        // Disallow duplicate keys in object literals.
        'no-dupe-keys': 'off',

        // Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements.
        'no-unreachable': 'off',

        // Enforce comparing `typeof` expressions against valid strings.
        'valid-typeof': 'off',

        // Disallow reassigning `const` variables.
        'no-const-assign': 'off',

        // Disallow `new` operators with the `Symbol` object.
        'no-new-symbol': 'off',

        // Disallow `this`/`super` before calling `super()` in constructors.
        'no-this-before-super': 'off',

        // Disallow the use of undeclared variables unless mentioned in `/*global */` comments.
        'no-undef': 'off',

        // Disallow duplicate class members.
        'no-dupe-class-members': 'off',

        // Disallow variable redeclaration.
        'no-redeclare': 'off',

        // Disallow unused variables.
        'no-unused-vars': 'off',

        // // Disallow the use of variables before they are defined.
        'no-use-before-define': 'off',
      },
    },
  ],

  rules: {
    // Require that member overloads be consecutive.
    '@typescript-eslint/adjacent-overload-signatures': 'off',

    // Requires using either `T[]` or `Array<T>` for arrays.
    '@typescript-eslint/array-type': ['error', {
      default: 'array',
      readonly: 'array',
    }],

    // Disallows awaiting a value that is not a Thenable.
    '@typescript-eslint/await-thenable': 'off',

    // Bans “// @ts-ignore” comments from being used.
    '@typescript-eslint/ban-ts-ignore': 'error',

    // Bans specific types from being used.
    '@typescript-eslint/ban-types': 'error',

    // Enforces consistent usage of type assertions.
    '@typescript-eslint/consistent-type-assertions': 'off',

    // Consistent with type definition either `interface` or `type`.
    '@typescript-eslint/consistent-type-definitions': 'off',

    // Require explicit return types on functions and class methods.
    '@typescript-eslint/explicit-function-return-type': 'error',

    // Require explicit accessibility modifiers on class properties and methods.
    '@typescript-eslint/explicit-member-accessibility': ['error', {
      accessibility: 'explicit',
      ignoredMethodNames: [],
      overrides: {
        constructors: 'no-public',
      },
    }],

    // Introduced in typescript-eslint 2.17.0.
    // Require explicit return and argument types on exported functions' and classes' public class methods.
    // '@typescript-eslint/explicit-module-boundary-types': 'error',

    // Require a specific member delimiter style for interfaces and type literals.
    '@typescript-eslint/member-delimiter-style': 'error',

    // Require a consistent member declaration order.
    '@typescript-eslint/member-ordering': 'error',

    // Enforces naming conventions for everything across a codebase.
    '@typescript-eslint/naming-convention': 'off',

    // Introduced in typescript-eslint 2.9.0.
    // Disallow the delete operator with computed key expressions.
    // '@typescript-eslint/no-dynamic-delete': 'error',

    // Disallow the declaration of empty interfaces.
    '@typescript-eslint/no-empty-interface': 'error',

    // Disallow usage of the `any` type.
    '@typescript-eslint/no-explicit-any': 'warn',

    // Introduced in typescript-eslint 2.9.0.
    // Disallow extra non-null assertion.
    // '@typescript-eslint/no-extra-non-null-assertion': 'error',

    // Forbids the use of classes as namespaces.
    '@typescript-eslint/no-extraneous-class': 'off',

    // Requires Promise-like values to be handled appropriately.
    '@typescript-eslint/no-floating-promises': 'off',

    // Disallow iterating over an array with a for-in loop.
    '@typescript-eslint/no-for-in-array': 'off',

    // Disallow the use of `eval()`-like methods.
    '@typescript-eslint/no-implied-eval': 'off',

    // Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean.
    '@typescript-eslint/no-inferrable-types': 'error',

    // Enforce valid definition of `new` and `constructor`.
    '@typescript-eslint/no-misused-new': 'error',

    // Avoid using promises in places not designed to handle them.
    '@typescript-eslint/no-misused-promises': 'off',

    // Disallow the use of custom TypeScript modules and namespaces.
    '@typescript-eslint/no-namespace': 'error',

    // Introduced in typescript-eslint 2.17.0.
    // Disallows using a non-null assertion after an optional chain expression.
    // '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

    // Disallows non-null assertions using the `!` postfix operator.
    '@typescript-eslint/no-non-null-assertion': 'warn',

    // Disallow the use of parameter properties in class constructors.
    '@typescript-eslint/no-parameter-properties': 'off',

    // Disallows invocation of `require()`.
    '@typescript-eslint/no-require-imports': 'warn',

    // Disallow aliasing `this`.
    '@typescript-eslint/no-this-alias': 'error',

    // Disallow throwing literals as exceptions.
    '@typescript-eslint/no-throw-literal': 'off',

    // Disallow the use of type aliases
    '@typescript-eslint/no-type-alias': 'off',

    // Prevents conditionals where the type is always truthy or always falsy.
    '@typescript-eslint/no-unnecessary-condition': 'off',

    // Warns when a namespace qualifier is unnecessary.
    '@typescript-eslint/no-unnecessary-qualifier': 'off',

    // Enforces that type arguments will not be used if not required.
    '@typescript-eslint/no-unnecessary-type-arguments': 'off',

    // Warns if a type assertion does not change the type of an expression.
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',

    // Disallow unused variables and arguments.
    '@typescript-eslint/no-unused-vars-experimental': 'off',

    // Disallows the use of require statements except in import statements.
    '@typescript-eslint/no-var-requires': 'error',

    // Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated.
    '@typescript-eslint/prefer-for-of': 'error',

    // Use function types instead of interfaces with call signatures.
    '@typescript-eslint/prefer-function-type': 'error',

    // Enforce `includes` method over `indexOf` method.
    '@typescript-eslint/prefer-includes': 'off',

    // Require the use of the `namespace` keyword instead of the `module` keyword to declare custom TypeScript modules.
    '@typescript-eslint/prefer-namespace-keyword': 'error',

    // Enforce the usage of the nullish coalescing operator instead of logical chaining.
    '@typescript-eslint/prefer-nullish-coalescing': 'off',

    // Introduced in typescript-eslint 2.10.0.
    // Prefer using concise optional chain expressions instead of chained logical ands.
    // '@typescript-eslint/prefer-optional-chain': 'error',

    // Requires that private members are marked as `readonly` if they're never modified outside of the constructor.
    '@typescript-eslint/prefer-readonly': 'off',

    // Enforce that `RegExp#exec` is used instead of `String#match` if no global flag is provided.
    '@typescript-eslint/prefer-regexp-exec': 'off',

    // Enforce the use of `String#startsWith` and `String#endsWith` instead of other equivalent methods of checking substrings.
    '@typescript-eslint/prefer-string-starts-ends-with': 'off',

    // Requires any function or method that returns a Promise to be marked async.
    '@typescript-eslint/promise-function-async': 'off',

    // Requires `Array#sort` calls to always provide a `compareFunction`.
    '@typescript-eslint/require-array-sort-compare': 'off',

    // When adding two variables, operands must both be of type number or of type string.
    '@typescript-eslint/restrict-plus-operands': 'off',

    // Enforce template literal expressions to be of string type.
    '@typescript-eslint/restrict-template-expressions': 'off',

    // Restricts the types allowed in boolean expressions.
    '@typescript-eslint/strict-boolean-expressions': 'off',

    // Sets preference level for triple slash directives versus ES6-style import declarations.
    '@typescript-eslint/triple-slash-reference': 'error',

    // Require consistent spacing around type annotations.
    '@typescript-eslint/type-annotation-spacing': 'error',

    // Requires type annotations to exist.
    '@typescript-eslint/typedef': 'off',

    // Enforces unbound methods are called with their expected scope.
    '@typescript-eslint/unbound-method': ['off', {
      ignoreStatic: true,
    }],

    // Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter.
    '@typescript-eslint/unified-signatures': 'warn',
  },
};
