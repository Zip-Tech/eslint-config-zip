# zip-eslint-config
[![NPM version][npm-version-image]][npm-url]

Sharable ESLint configuration for zip projects.

## Installation:
To install this library, run:
```bash
$ npm install zip-eslint-config --save-dev
```

## Usage:
Shareable configs are designed to work with the extends feature of .eslintrc files.
Instead of using a file path for the value of extends, use your module name. For example:
```js
{
    "extends": "zip-eslint-config"
}
```

```js
{
    "extends": "zip-eslint-config/base"
}
```

## Rules configurations:

#### possible-errors

| Rules | Description | Value                     |
| :--- | :---| :--- |
| [for-direction](https://eslint.org/docs/rules/for-direction) | Enforce `for` loop update clause moving the counter in the right direction. | error |
| [getter-return](https://eslint.org/docs/rules/getter-return) | Enforce `return` statements in getters. | error |
| [no-async-promise-executor](https://eslint.org/docs/rules/no-async-promise-executor) | Disallow using an async function as a Promise executor. | error |
| [no-await-in-loop](https://eslint.org/docs/rules/no-await-in-loop) | Disallow await inside of loops. | error |
| [no-compare-neg-zero](https://eslint.org/docs/rules/no-compare-neg-zero) | Disallow comparisons to negative zero. | error |
| [no-cond-assign](https://eslint.org/docs/rules/no-cond-assign) | Disallow assignment in conditional expressions. | error |
| [no-console](https://eslint.org/docs/rules/no-console) | Disallow use of `console`. | warn |
| [no-constant-condition](https://eslint.org/docs/rules/no-constant-condition) | Disallow constant expressions in conditions. | error |
| [no-control-regex](https://eslint.org/docs/rules/no-control-regex) | Disallow control characters in regular expressions. | error |
| [no-debugger](https://eslint.org/docs/rules/no-debugger) | Disallow the use of `debugger`. | error |
| [no-dupe-args](https://eslint.org/docs/rules/no-dupe-args) | Disallow duplicate arguments in `function` definitions. | error |
| [no-dupe-keys](https://eslint.org/docs/rules/no-dupe-keys) | Disallow duplicate keys in object literals. | error |
| [no-duplicate-case](https://eslint.org/docs/rules/no-duplicate-case) | Disallow duplicate case labels. | error |
| [no-empty](https://eslint.org/docs/rules/no-empty) | Disallow empty block statements. | error |
| [no-empty-character-class](https://eslint.org/docs/rules/no-empty-character-class) | Disallow empty character classes in regular expressions. | error |
| [no-ex-assign](https://eslint.org/docs/rules/no-ex-assign) | Disallow reassigning exceptions in `catch` clauses. | error |
| [no-extra-boolean-cast](https://eslint.org/docs/rules/no-extra-boolean-cast) | Disallow unnecessary boolean casts. | error |
| [no-extra-parens](https://eslint.org/docs/rules/no-extra-parens) | Disallow unnecessary parentheses. | off |
| [no-extra-semi](https://eslint.org/docs/rules/no-extra-semi) | Disallow unnecessary semicolons. | error |
| [no-func-assign](https://eslint.org/docs/rules/no-func-assign) | Disallow reassigning `function` declarations. | error |
| [no-import-assign](https://eslint.org/docs/rules/no-import-assign) | Disallow assigning to imported bindings. | error |
| [no-inner-declarations](https://eslint.org/docs/rules/no-inner-declarations) | Disallow assigning to imported bindings. | error |
| [no-invalid-regexp](https://eslint.org/docs/rules/no-invalid-regexp) | Disallow invalid regular expression strings in `RegExp` constructors. | error |
| [no-irregular-whitespace](https://eslint.org/docs/rules/no-irregular-whitespace) | Disallow irregular whitespace outside of strings and comments. | error |
| [no-misleading-character-class](https://eslint.org/docs/rules/no-misleading-character-class) | Disallow characters which are made with multiple code points in character class syntax. | error |
| [no-obj-calls](https://eslint.org/docs/rules/no-obj-calls) | Disallow calling global object properties as functions. | error |
| [no-prototype-builtins](https://eslint.org/docs/rules/no-prototype-builtins) | Disallow calling some `Object.prototype` methods directly on objects. | error |
| [no-regex-spaces](https://eslint.org/docs/rules/no-regex-spaces) | Disallow multiple spaces in regular expressions. | error |
| [no-sparse-arrays](https://eslint.org/docs/rules/no-sparse-arrays) | Disallow sparse arrays. | error |
| [no-template-curly-in-string](https://eslint.org/docs/rules/no-template-curly-in-string) | Disallow template literal placeholder syntax in regular strings. | warn |
| [no-unexpected-multiline](https://eslint.org/docs/rules/no-unexpected-multiline) | Disallow confusing multiline expressions. | error |
| [no-unreachable](https://eslint.org/docs/rules/no-unreachable) | Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements. | error |
| [no-unsafe-finally](https://eslint.org/docs/rules/no-unsafe-finally) | Disallow control flow statements in `finally` blocks. | error |
| [no-unsafe-negation](https://eslint.org/docs/rules/no-unsafe-negation) | Disallow negating the left operand of relational operators. | error |
| [require-atomic-updates](https://eslint.org/docs/rules/require-atomic-updates) | Disallow assignments that can lead to race conditions due to usage of `await` or `yield`. | off |
| [use-isnan](https://eslint.org/docs/rules/use-isnan) | Require calls to `isNaN()` when checking for `NaN`. | error |
| [valid-typeof](https://eslint.org/docs/rules/valid-typeof) | Enforce comparing `typeof` expressions against valid strings. | error |

#### best-practices

| Rules | Description | Value                     |
| :--- | :---| :--- |
| [accessor-pairs](https://eslint.org/docs/rules/accessor-pairs) | Enforce getter and setter pairs in objects and classes. | off |
| [array-callback-return](https://eslint.org/docs/rules/array-callback-return) | Enforces `return` statements in callbacks of array's methods. Implicit return allowed. | error |
| [block-scoped-var](https://eslint.org/docs/rules/block-scoped-var) | Enforce the use of variables within the scope they are defined. | error |
| [class-methods-use-this](https://eslint.org/docs/rules/class-methods-use-this) | Enforce that class methods utilize `this`. | error |
| [complexity](https://eslint.org/docs/rules/complexity) | Enforce a maximum cyclomatic complexity allowed in a program. | warn |
| [consistent-return](https://eslint.org/docs/rules/consistent-return) | Require return statements to either always or never specify values. | error |
| [curly](https://eslint.org/docs/rules/curly) | Enforce consistent brace style for all control statements. | error |
| [default-case](https://eslint.org/docs/rules/default-case) | Require default case in switch statements. | warn |
| [default-param-last](https://eslint.org/docs/rules/default-param-last) | Enforce default parameters to be last. | error |
| [dot-location](https://eslint.org/docs/rules/dot-location) | Enforce consistent newlines before and after dots. | error |
| [dot-notation](https://eslint.org/docs/rules/dot-notation) | Enforce dot notation whenever possible. | error |
| [eqeqeq](https://eslint.org/docs/rules/eqeqeq) | Require the use of `===` and `!==`. | error |
| [guard-for-in](https://eslint.org/docs/rules/guard-for-in) | Require for-in loops to include an if statement. | error |
| [max-classes-per-file](https://eslint.org/docs/rules/max-classes-per-file) | Enforce a maximum number of classes per file. | warn |
| [no-alert](https://eslint.org/docs/rules/no-alert) | Disallow the use of `alert`, `confirm`, and `prompt`. | warn |
| [no-caller](https://eslint.org/docs/rules/no-caller) | Disallow use of `arguments.caller` or `arguments.callee`. | error |
| [no-case-declarations](https://eslint.org/docs/rules/no-case-declarations) | Disallow lexical declarations in case/default clauses. | error |
| [no-div-regex](https://eslint.org/docs/rules/no-div-regex) | Disallow division operators explicitly at the beginning of regular expressions. | off |
| [no-else-return](https://eslint.org/docs/rules/no-else-return) | Disallow `else` blocks after `return` statements in `if` statements. | error |
| [no-empty-function](https://eslint.org/docs/rules/no-empty-function) | Disallow empty functions. | error |
| [no-empty-pattern](https://eslint.org/docs/rules/no-empty-pattern) | Disallow empty destructuring patterns. | error |
| [no-eq-null](https://eslint.org/docs/rules/no-eq-null) | Disallow `null` comparisons without a type-checking operator. | off |
| [no-eval](https://eslint.org/docs/rules/no-eval) | Disallow use of `eval()`. | warn |
| [no-extend-native](https://eslint.org/docs/rules/no-extend-native) | Disallow extending native types. | error |
| [no-extra-bind](https://eslint.org/docs/rules/no-extra-bind) | Disallow unnecessary calls to `.bind()`. | error |
| [no-extra-label](https://eslint.org/docs/rules/no-extra-label) | Disallow unnecessary labels. | error |
| [no-fallthrough](https://eslint.org/docs/rules/no-fallthrough) | Disallow fallthrough of `case` statements. | error |
| [no-floating-decimal](https://eslint.org/docs/rules/no-floating-decimal) | Disallow the use of leading or trailing decimal points in numeric literals. | error |
| [no-global-assign](https://eslint.org/docs/rules/no-global-assign) | Disallow assignments to native objects or read-only global variables. | error |
| [no-implicit-coercion](https://eslint.org/docs/rules/no-implicit-coercion) | Disallow shorthand type conversions. | warn |
| [no-implicit-globals](https://eslint.org/docs/rules/no-implicit-globals) | Disallow declarations in the global scope. | off |
| [no-implied-eval](https://eslint.org/docs/rules/no-implied-eval) | Disallow use of `eval()`-like methods. | error |
| [no-invalid-this](https://eslint.org/docs/rules/no-invalid-this) | Disallow `this` keywords outside of classes or class-like objects. | off |
| [no-iterator](https://eslint.org/docs/rules/no-iterator) | Disallow usage of `__iterator__` property. | error |
| [no-labels](https://eslint.org/docs/rules/no-labels) | Disallow labeled statements. | error |
| [no-lone-blocks](https://eslint.org/docs/rules/no-labels) | Disallow unnecessary nested blocks. | error |
| [no-loop-func](https://eslint.org/docs/rules/no-loop-func) | Disallow creation of functions within loops. | error |
| [no-magic-numbers](https://eslint.org/docs/rules/no-magic-numbers) | Disallow magic numbers. `0` and `1` ignored. | warn |
| [no-multi-spaces](https://eslint.org/docs/rules/no-multi-spaces) | Disallow use of multiple spaces. | error |
| [no-multi-str](https://eslint.org/docs/rules/no-multi-str) | Disallow use of multiline strings. | error |
| [no-new](https://eslint.org/docs/rules/no-new) | Disallow `new` operators outside of assignments or comparisons. | error |
| [no-new-func](https://eslint.org/docs/rules/no-new-func) | Disallow `new` operators with the `Function` object. | error |
| [no-new-wrappers](https://eslint.org/docs/rules/no-new-wrappers) | Disallow `new` operators with the `String`, `Number`, and `Boolean` objects. | error |
| [no-octal](https://eslint.org/docs/rules/no-octal) | Disallow octal literals. | error |
| [no-octal-escape](https://eslint.org/docs/rules/no-octal-escape) | Disallow octal escape sequences in string literals. | error |
| [no-param-reassign](https://eslint.org/docs/rules/no-param-reassign) | Disallow reassigning `function` parameters. | error |
| [no-proto](https://eslint.org/docs/rules/no-proto) | Disallow the use of the `__proto__` property. | error |
| [no-redeclare](https://eslint.org/docs/rules/no-redeclare) | Disallow variable redeclaration. | error |
| [no-restricted-properties](https://eslint.org/docs/rules/no-restricted-properties) | Disallow certain properties on certain objects. | error |
| [no-return-assign](https://eslint.org/docs/rules/no-return-assign) | Disallow assignment operators in return statements. | error |
| [no-return-await](https://eslint.org/docs/rules/no-return-await) | Disallow unnecessary `return await`. | error |
| [no-script-url](https://eslint.org/docs/rules/no-script-url) | Disallow `javascript:` urls. | error |
| [no-self-assign](https://eslint.org/docs/rules/no-self-assign) | Disallow assignments where both sides are exactly the same. | error |
| [no-self-compare](https://eslint.org/docs/rules/no-self-compare) | Disallow comparisons where both sides are exactly the same. | error |
| [no-sequences](https://eslint.org/docs/rules/no-sequences) | Disallow use of comma operator. | error |
| [no-throw-literal](https://eslint.org/docs/rules/no-throw-literal) | Disallow throwing literals as exceptions. | error |
| [no-unmodified-loop-condition](https://eslint.org/docs/rules/no-unmodified-loop-condition) | Disallow unmodified loops conditions. | warn |
| [no-unused-expressions](https://eslint.org/docs/rules/no-unused-expressions) | Disallow unused expressions. | error |
| [no-unused-labels](https://eslint.org/docs/rules/no-unused-labels) | Disallow unused labels. | error |
| [no-useless-call](https://eslint.org/docs/rules/no-useless-call) | Disallow unnecessary `.call()` and `.apply()`. | off |
| [no-useless-catch](https://eslint.org/docs/rules/no-useless-catch) | Disallow unnecessary `catch` clauses. | error |
| [no-useless-concat](https://eslint.org/docs/rules/no-useless-concat) | Disallow unnecessary concatenation of literals or template literals. | error |
| [no-useless-escape](https://eslint.org/docs/rules/no-useless-escape) | Disallow unnecessary string escaping. | error |
| [no-useless-return](https://eslint.org/docs/rules/no-useless-return) | Disallow redundant `return` statements. | error |
| [no-void](https://eslint.org/docs/rules/no-void) | Disallow `void` operators. | error |
| [no-warning-comments](https://eslint.org/docs/rules/no-warning-comments) | Disallow specified warning terms in comments. | off |
| [no-with](https://eslint.org/docs/rules/no-with) | Disallow `with` statements. | error |
| [prefer-named-capture-group](https://eslint.org/docs/rules/prefer-named-capture-group) | Enforce using named capture group in regular expression. | off |
| [prefer-promise-reject-errors](https://eslint.org/docs/rules/prefer-promise-reject-errors) | Require using `Error` objects as `Promise` rejection reasons. | error |
| [prefer-regex-literals](https://eslint.org/docs/rules/prefer-regex-literals) | Disallow use of the `RegExp` constructor in favor of regular expression literals. | off |
| [radix](https://eslint.org/docs/rules/radix) | Enforce the consistent use of the radix argument when using `parseInt()`. | error |
| [require-await](https://eslint.org/docs/rules/require-await) | Disallow async functions which have no `await` expression. | off |
| [require-unicode-regexp](https://eslint.org/docs/rules/require-unicode-regexp) | Enforce the use of `u` flag on RegExp. | off |
| [vars-on-top](https://eslint.org/docs/rules/vars-on-top) | Require `var` declarations be placed at the top of their containing scope. | error |
| [wrap-iife](https://eslint.org/docs/rules/wrap-iife) | Require parentheses around immediate function invocations. | error |
| [yoda](https://eslint.org/docs/rules/yoda) | Disallow “Yoda” conditions. | error |

#### strict-mode

| Rules | Description | Value                     |
| :--- | :---| :--- |
| [strict](https://eslint.org/docs/rules/strict) | Require or disallow strict mode directives. | error |

#### variables

| Rules | Description | Value                     |
| :--- | :---| :--- |
| [init-declarations](https://eslint.org/docs/rules/init-declarations) | Require or disallow initialization in variable declarations. | off |
| [no-delete-var](https://eslint.org/docs/rules/no-delete-var) | Disallow deleting variables. | error |
| [no-label-var](https://eslint.org/docs/rules/no-label-var) | Disallow labels that share a name with a variable. | error |
| [no-restricted-globals](https://eslint.org/docs/rules/no-restricted-globals) | Disallow specified global variables. | error |
| [no-shadow](https://eslint.org/docs/rules/no-shadow) | Disallow variable declarations from shadowing variables declared in the outer scope. | error |
| [no-shadow-restricted-names](https://eslint.org/docs/rules/no-shadow-restricted-names) | Disallow identifiers from shadowing restricted names. | error |
| [no-undef](https://eslint.org/docs/rules/no-undef) | Disallow the use of undeclared variables unless mentioned in `/*global */` comments. | error |
| [no-undef-init](https://eslint.org/docs/rules/no-undef-init) | Disallow initializing variables to `undefined`. | error |
| [no-undefined](https://eslint.org/docs/rules/no-undefined) | Disallow the use of `undefined` as an identifier. | error |
| [no-unused-vars](https://eslint.org/docs/rules/no-unused-vars) | Disallow unused variables. | error |
| [no-use-before-define](https://eslint.org/docs/rules/no-use-before-define) | Disallow the use of variables before they are defined. | error |

#### styles

| Rules | Description | Value                     |
| :--- | :---| :--- |
| [array-bracket-newline](https://eslint.org/docs/rules/array-bracket-newline) | Enforce linebreaks after opening and before closing array brackets. | error |
| [array-bracket-spacing](https://eslint.org/docs/rules/array-bracket-spacing) | Enforce consistent spacing inside array brackets. | error |
| [array-element-newline](https://eslint.org/docs/rules/array-element-newline) | Enforce line breaks after each array element. | off |
| [block-spacing](https://eslint.org/docs/rules/block-spacing) | Enforce spaces inside of blocks after opening block and before closing block. | error |
| [brace-style](https://eslint.org/docs/rules/brace-style) | Enforce consistent brace style for blocks. | error |
| [camelcase](https://eslint.org/docs/rules/camelcase) | Enforce camelcase naming convention. | error |
| [capitalized-comments](https://eslint.org/docs/rules/capitalized-comments) | Enforce capitalization of the first letter of a comment.| warn |
| [comma-dangle](https://eslint.org/docs/rules/comma-dangle) | Require trailing commas. | error |
| [comma-spacing](https://eslint.org/docs/rules/comma-spacing) | Enforce consistent spacing before and after commas. | error |
| [comma-style](https://eslint.org/docs/rules/comma-style) | Enforce consistent comma style. | error |
| [computed-property-spacing](https://eslint.org/docs/rules/computed-property-spacing) | Enforce consistent spacing inside computed property brackets. | error |
| [consistent-this](https://eslint.org/docs/rules/consistent-this) | Enforce consistent naming when capturing the current execution context. | off |
| [eol-last](https://eslint.org/docs/rules/eol-last) | Require newline at the end of files. | error |
| [func-call-spacing](https://eslint.org/docs/rules/func-call-spacing) | Disallow spacing between function identifiers and their invocations. | error |
| [func-name-matching](https://eslint.org/docs/rules/func-name-matching) | Require function names to match the name of the variable or property to which they are assigned. | off |
| [func-names](https://eslint.org/docs/rules/func-names) | Require or disallow named `function` expressions. | warn |
| [func-style](https://eslint.org/docs/rules/func-style) | Enforce the consistent use of expressions. | error |
| [function-call-argument-newline](https://eslint.org/docs/rules/function-call-argument-newline) | Enforce consistent line breaks between arguments of a function call. | error |
| [function-paren-newline](https://eslint.org/docs/rules/function-paren-newline) | Enforce consistent line breaks inside function parentheses. | error |
| [id-blacklist](https://eslint.org/docs/rules/id-blacklist) | Disallow specified identifiers. | off |
| [id-length](https://eslint.org/docs/rules/id-length) | Enforce minimum and maximum identifier lengths. | off |
| [id-match](https://eslint.org/docs/rules/id-match) | Require identifiers to match a specified regular expression. | off |
| [implicit-arrow-linebreak](https://eslint.org/docs/rules/implicit-arrow-linebreak) | Enforce the location of arrow function bodies. | error |
| [indent](https://eslint.org/docs/rules/indent) | Enforce consistent indentation. | error |
| [jsx-quotes](https://eslint.org/docs/rules/jsx-quotes) | Enforce the consistent use of either double or single quotes in JSX attributes. | error |
| [key-spacing](https://eslint.org/docs/rules/key-spacing) | Enforce consistent spacing between keys and values in object literal properties. | error |
| [keyword-spacing](https://eslint.org/docs/rules/keyword-spacing) | Enforce consistent spacing before and after keywords. | error |
| [line-comment-position](https://eslint.org/docs/rules/line-comment-position) | Enforce position of line comments. | warn |
| [linebreak-style](https://eslint.org/docs/rules/linebreak-style) | Enforce consistent linebreak style. | error |
| [lines-around-comment](https://eslint.org/docs/rules/lines-around-comment) | Require empty lines around comments. | off |
| [lines-between-class-members](https://eslint.org/docs/rules/lines-between-class-members) | Require or disallow an empty line between class members. | off |
| [max-depth](https://eslint.org/docs/rules/max-depth) | Enforce a maximum depth that blocks can be nested. | error |
| [max-len](https://eslint.org/docs/rules/max-len) | Enforce a maximum line length. | error |
| [max-lines](https://eslint.org/docs/rules/max-lines) | Enforce a maximum number of lines per file. | off |
| [max-lines-per-function](https://eslint.org/docs/rules/max-lines-per-function) | Enforce a maximum number of line of code in a function. | off |
| [max-nested-callbacks](https://eslint.org/docs/rules/max-nested-callbacks) | Enforce a maximum depth that callbacks can be nested. | off |
| [max-params](https://eslint.org/docs/rules/max-params) | Enforce a maximum number of parameters in function definitions. | off |
| [max-statements](https://eslint.org/docs/rules/max-statements) | Enforce a maximum number of statements allowed in function blocks. | off |
| [max-statements-per-line](https://eslint.org/docs/rules/max-statements-per-line) | Enforce a maximum number of statements allowed per line. | error |
| [multiline-comment-style](https://eslint.org/docs/rules/multiline-comment-style) | Enforce a particular style for multiline comments. | off |
| [multiline-ternary](https://eslint.org/docs/rules/multiline-ternary) | Enforce newlines between operands of ternary expressions. | off |
| [new-cap](https://eslint.org/docs/rules/new-cap) | Require constructor names to begin with a capital letter. | error |
| [new-parens](https://eslint.org/docs/rules/new-parens) | Enforce parentheses when invoking a constructor with no arguments. | error |
| [newline-per-chained-call](https://eslint.org/docs/rules/newline-per-chained-call) | Require a newline after each call in a method chain. | error |
| [no-array-constructor](https://eslint.org/docs/rules/no-array-constructor) | Disallow `Array` constructors. | error |
| [no-bitwise](https://eslint.org/docs/rules/no-bitwise) | Disallow bitwise operators. | error |
| [no-continue](https://eslint.org/docs/rules/no-continue) | Disallow `continue` statements. | error |
| [no-inline-comments](https://eslint.org/docs/rules/no-inline-comments) | Disallow inline comments after code. | warn |
| [no-lonely-if](https://eslint.org/docs/rules/no-inline-comments) | Disallow `if` statements as the only statement in `else` blocks. | error |
| [no-mixed-operators](https://eslint.org/docs/rules/no-mixed-operators) | Disallow mixed binary operators. | error |
| [no-mixed-spaces-and-tabs](https://eslint.org/docs/rules/no-mixed-spaces-and-tabs) | Disallow mixed spaces and tabs for indentation. | error |
| [no-multi-assign](https://eslint.org/docs/rules/no-multi-assign) | Disallow use of chained assignment expressions. | error |
| [no-multiple-empty-lines](https://eslint.org/docs/rules/no-multiple-empty-lines) | Disallow multiple empty lines. | error |
| [no-negated-condition](https://eslint.org/docs/rules/no-negated-condition) | Disallow negated conditions. | off |
| [no-nested-ternary](https://eslint.org/docs/rules/no-nested-ternary) | Disallow nested ternary expressions. | error |
| [no-new-object](https://eslint.org/docs/rules/no-new-object) | Disallow `Object` constructors. | error |
| [no-plusplus](https://eslint.org/docs/rules/no-plusplus) | Disallow the unary operators `++` and `--`. | error |
| [no-restricted-syntax](https://eslint.org/docs/rules/no-restricted-syntax) | Disallow specified syntax. | off |
| [no-tabs](https://eslint.org/docs/rules/no-tabs) | Disallow all tabs. | error |
| [no-ternary](https://eslint.org/docs/rules/no-tabs) | Disallow ternary operators. | off |
| [no-trailing-spaces](https://eslint.org/docs/rules/no-trailing-spaces) | Disallow trailing whitespace at the end of lines. | error |
| [no-underscore-dangle](https://eslint.org/docs/rules/no-underscore-dangle) | Disallow dangling underscores in identifiers. | off |
| [no-unneeded-ternary](https://eslint.org/docs/rules/no-unneeded-ternary) | Disallow ternary operators when simpler alternatives exist. | error |
| [no-whitespace-before-property](https://eslint.org/docs/rules/no-whitespace-before-property) | Disallow whitespace before properties. | error |
| [nonblock-statement-body-position](https://eslint.org/docs/rules/nonblock-statement-body-position) | Enforce the location of single-line statements. | error |
| [object-curly-newline](https://eslint.org/docs/rules/object-curly-newline) | Enforce consistent line breaks inside braces. | error |
| [object-curly-spacing](https://eslint.org/docs/rules/object-curly-spacing) | Enforce consistent spacing inside braces. | error |
| [object-property-newline](https://eslint.org/docs/rules/object-property-newline) | Enforce placing object properties on separate lines. | error |
| [one-var](https://eslint.org/docs/rules/one-var) | Enforce variables to be declared separately in functions. | error |
| [one-var-declaration-per-line](https://eslint.org/docs/rules/one-var-declaration-per-line) | Require newlines around variable declarations. | error |
| [operator-assignment](https://eslint.org/docs/rules/operator-assignment) | Require or disallow assignment operator shorthand where possible. | error |
| [operator-linebreak](https://eslint.org/docs/rules/operator-linebreak) | Enforce consistent linebreak style for operators. | error |
| [padded-blocks](https://eslint.org/docs/rules/padded-blocks) | Disallow padding within blocks. | error |
| [padding-line-between-statements](https://eslint.org/docs/rules/padding-line-between-statements) | Require or disallow padding lines between statements. | error |
| [prefer-exponentiation-operator](https://eslint.org/docs/rules/prefer-exponentiation-operator) | Disallow the use of `Math.pow` in favor of the `**` operator. | off |
| [prefer-object-spread](https://eslint.org/docs/rules/prefer-object-spread) | Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead. | error |
| [quote-props](https://eslint.org/docs/rules/quote-props) | Require quotes around object literal property names as needed. | error |
| [quotes](https://eslint.org/docs/rules/quotes) | Enforce the consistent use of either backticks, double, or single quotes. | error |
| [semi](https://eslint.org/docs/rules/semi) | Require semicolons instead of ASI. | error |
| [semi-spacing](https://eslint.org/docs/rules/semi-spacing) | Enforce consistent spacing before and after semicolons. | error |
| [semi-style](https://eslint.org/docs/rules/semi-style) | Enforce location of semicolons. | error |
| [sort-keys](https://eslint.org/docs/rules/sort-keys) | Require object keys to be sorted. | off |
| [sort-vars](https://eslint.org/docs/rules/sort-vars) | Require variables within the same declaration block to be sorted. | off |
| [space-before-blocks](https://eslint.org/docs/rules/space-before-blocks) | Enforce consistent spacing before blocks. | error |
| [space-before-function-paren](https://eslint.org/docs/rules/space-before-function-paren) | Enforce consistent spacing before `function` definition opening parenthesis. | error |
| [space-in-parens](https://eslint.org/docs/rules/space-in-parens) | Enforce consistent spacing inside parentheses. | error |
| [space-infix-ops](https://eslint.org/docs/rules/space-infix-ops) | Require spacing around infix operators. | error |
| [space-unary-ops](https://eslint.org/docs/rules/space-unary-ops) | Enforce consistent spacing before or after unary operators. | error |
| [spaced-comment](https://eslint.org/docs/rules/spaced-comment) | Enforce consistent spacing after the `//` or `/*` in a comment. | error |
| [switch-colon-spacing](https://eslint.org/docs/rules/switch-colon-spacing) | Enforce spacing around colons of switch statements. | error |
| [template-tag-spacing](https://eslint.org/docs/rules/template-tag-spacing) | Disallow spacing between template tags and their literals. | error |
| [unicode-bom](https://eslint.org/docs/rules/unicode-bom) | Disallow Unicode byte order mark (BOM). | error |
| [wrap-regex](https://eslint.org/docs/rules/wrap-regex) | Require parenthesis around regex literals. | off |

#### es6

| Rules | Description | Value                     |
| :--- | :---| :--- |
| [arrow-body-style](https://eslint.org/docs/rules/arrow-body-style) | Require braces around arrow function bodies. | error |
| [arrow-parens](https://eslint.org/docs/rules/arrow-parens) | Require parentheses around arrow function arguments. | error |
| [arrow-spacing](https://eslint.org/docs/rules/arrow-spacing) | Enforce consistent spacing before and after the arrow in arrow functions. | error |
| [constructor-super](https://eslint.org/docs/rules/constructor-super) | Require `super()` calls in constructors. | error |
| [generator-star-spacing](https://eslint.org/docs/rules/generator-star-spacing) | Enforce consistent spacing around `*` operators in generator functions. | error |
| [no-class-assign](https://eslint.org/docs/rules/no-class-assign) | Disallow reassigning class members. | error |
| [no-confusing-arrow](https://eslint.org/docs/rules/no-confusing-arrow) | Disallow arrow functions where they could be confused with comparisons. | error |
| [no-const-assign](https://eslint.org/docs/rules/no-const-assign) | Disallow reassigning `const` variables. | error |
| [no-dupe-class-members](https://eslint.org/docs/rules/no-dupe-class-members) | Disallow duplicate class members. | error |
| [no-duplicate-imports](https://eslint.org/docs/rules/no-duplicate-imports) | Disallow duplicate module imports. | warn |
| [no-new-symbol](https://eslint.org/docs/rules/no-new-symbol) | Disallow `new` operators with the `Symbol` object. | error |
| [no-restricted-exports](https://eslint.org/docs/rules/no-restricted-exports) | Disallow specified names in exports. | off |
| [no-restricted-imports](https://eslint.org/docs/rules/no-restricted-imports) | Disallow specified modules when loaded by import. | off |
| [no-this-before-super](https://eslint.org/docs/rules/no-this-before-super) | Disallow `this/super` before calling `super()` in constructors. | error |
| [no-useless-computed-key](https://eslint.org/docs/rules/no-useless-computed-key) | Disallow unnecessary computed property keys in objects and classes. | error |
| [no-useless-constructor](https://eslint.org/docs/rules/no-useless-constructor) | Disallow unnecessary constructors. | error |
| [no-useless-rename](https://eslint.org/docs/rules/no-useless-rename) | Disallow renaming import, export, and destructured assignments to the same name. | error |
| [no-var](https://eslint.org/docs/rules/no-var) | Require `let` or `const` instead of `var`. | error |
| [object-shorthand](https://eslint.org/docs/rules/object-shorthand) | Require or disallow method and property shorthand syntax for object literals. | error |
| [prefer-arrow-callback](https://eslint.org/docs/rules/prefer-arrow-callback) | Require using arrow functions for callbacks. | error |
| [prefer-const](https://eslint.org/docs/rules/prefer-const) | Require `const` declarations for variables that are never reassigned after declared. | error |
| [prefer-destructuring](https://eslint.org/docs/rules/prefer-destructuring) | Require destructuring from arrays and/or objects. | error |
| [prefer-numeric-literals](https://eslint.org/docs/rules/prefer-numeric-literals) | Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals. | error |
| [prefer-rest-params](https://eslint.org/docs/rules/prefer-rest-params) | Require rest parameters instead of `arguments`. | error |
| [prefer-spread](https://eslint.org/docs/rules/prefer-spread) | Require spread operators instead of `.apply()`. | error |
| [prefer-template](https://eslint.org/docs/rules/prefer-template) | Require template literals instead of string concatenation. | error |
| [require-yield](https://eslint.org/docs/rules/require-yield) | Require generator functions to contain `yield`. | error |
| [rest-spread-spacing](https://eslint.org/docs/rules/rest-spread-spacing) | Disallow spacing between rest and spread operators and their expressions. | error |
| [sort-imports](https://eslint.org/docs/rules/sort-imports) | Enforce sorted import declarations within modules. | off |
| [symbol-description](https://eslint.org/docs/rules/symbol-description) | Require symbol descriptions. | error |
| [template-curly-spacing](https://eslint.org/docs/rules/template-curly-spacing) | Disallow spacing around embedded expressions of template strings. | error |
| [yield-star-spacing](https://eslint.org/docs/rules/yield-star-spacing) | Require or disallow spacing around the `*` in `yield*` expressions. | error |

#### zip-eslint-config/angular

| Rules | Description | Value                     |
| :--- | :---| :--- |
| [new-cap](https://eslint.org/docs/rules/new-cap) | Require constructor names to begin with a capital letter. Exceptions: `NgModule`, `Component`, `Injectable`, `Directive`, `Pipe`, `Input`, `Output`, `HostBinding`, `HostListener`, `ContentChild`, `ContentChildren`, `ViewChildren` and `ViewChild`. | error |
| [no-useless-constructor](https://eslint.org/docs/rules/no-useless-constructor) | Disallow unnecessary constructors. Disabled to allow constructor injection. | off |
| [no-empty-function](https://eslint.org/docs/rules/no-empty-function) | Disallow empty functions. Exceptions: arrow functions, constructors, functions and methods | error |

#### zip-eslint-config/node

| Rules | Description | Value                     |
| :--- | :---| :--- |
| [callback-return](https://eslint.org/docs/rules/callback-return) | Require `return` statements after callbacks. | warn |
| [global-require](https://eslint.org/docs/rules/global-require) | Require `require()` calls to be placed at top-level module scope. | error |
| [handle-callback-err](https://eslint.org/docs/rules/handle-callback-err) | Require error handling in callbacks. | warn |
| [no-buffer-constructor](https://eslint.org/docs/rules/no-buffer-constructor) | Disallow use of the `Buffer()` constructor. | error |
| [no-mixed-requires](https://eslint.org/docs/rules/no-mixed-requires) | Disallow `require` calls to be mixed with regular variable declarations. | error |
| [no-new-require](https://eslint.org/docs/rules/no-new-require) | Disallow `new` operators with calls to `require`. | error |
| [no-path-concat](https://eslint.org/docs/rules/no-path-concat) | Disallow string concatenation with `__dirname` and `__filename`. | error |
| [no-process-env](https://eslint.org/docs/rules/no-process-env) | Disallow the use of `process.env`. | warn |
| [no-process-exit](https://eslint.org/docs/rules/no-process-exit) | Disallow the use of `process.exit()`. | warn |
| [no-restricted-modules](https://eslint.org/docs/rules/no-restricted-modules) | Disallow specified modules when loaded by `require`. | off |
| [no-sync](https://eslint.org/docs/rules/no-sync) | Disallow synchronous methods. | off |

#### zip-eslint-config/typescript

| Rules | Description | Value                     |
| :--- | :---| :--- |

## Available configurations:

#### zip-eslint-config/base

```js
{
    "extends": "zip-eslint-config/base"
}
```

extends: ['possible-errors', 'best-practices', 'strict-mode', 'variables',
  'es6', 'styles' ]

#### zip-eslint-config/node

```js
{
    "extends": "zip-eslint-config/node"
}
```

extends: ['possible-errors', 'best-practices', 'variables',
  'es6', 'styles', 'node' ]

#### zip-eslint-config/angular

```js
{
    "extends": "zip-eslint-config/angular"
}
```

extends: ['possible-errors', 'best-practices', 'strict-mode', 'variables',
  'es6', 'styles', 'typescript', 'angular' ]

#### zip-eslint-config/typescript

```js
{
    "extends": "zip-eslint-config/typescript"
}
```

extends: ['possible-errors', 'best-practices', 'strict-mode', 'variables',
  'es6', 'styles', 'typescript' ]
