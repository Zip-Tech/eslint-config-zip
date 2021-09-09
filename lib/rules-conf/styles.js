const INDENT_SIZE = 2;
const MAX_DEPTH = 4;
const MAX_LENGTH = 120;
const MAX_LINES = 300;
const MAX_LINES_PER_FUNCTION = 50;
const MAX_STATEMENTS_PER_LINE = 2;

module.exports = {
  // Rules relate to style guidelines, and are therefore quite subjective.
  rules: {
    // Enforce linebreaks after opening and before closing array brackets.
    'array-bracket-newline': ['error', 'consistent'],

    // Enforce consistent spacing inside array brackets.
    'array-bracket-spacing': ['error', 'never'],

    // Enforce line breaks after each array element.
    'array-element-newline': ['off', { multiline: true }],

    // Disallow or enforce spaces inside of blocks after opening block and before closing block.
    'block-spacing': ['error', 'always'],

    // Enforce consistent brace style for blocks.
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],

    // Enforce camelcase naming convention.
    camelcase: ['error', { properties: 'never', ignoreDestructuring: true }],

    // Enforce or disallow capitalization of the first letter of a comment.
    'capitalized-comments': ['warn', 'always', {
      ignoreConsecutiveComments: true,
    }],

    // Require or disallow trailing commas.
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],

    // Enforce consistent spacing before and after commas.
    'comma-spacing': ['error', { before: false, after: true }],

    // Enforce consistent comma style.
    'comma-style': ['error', 'last', {
      exceptions: {
        ArrayExpression: false,
        ArrayPattern: false,
        ArrowFunctionExpression: false,
        CallExpression: false,
        FunctionDeclaration: false,
        FunctionExpression: false,
        ImportDeclaration: false,
        ObjectExpression: false,
        ObjectPattern: false,
        VariableDeclaration: false,
        NewExpression: false,
      },
    }],

    // Enforce consistent spacing inside computed property brackets.
    'computed-property-spacing': ['error', 'never'],

    // Enforce consistent naming when capturing the current execution context.
    'consistent-this': 'off',

    // Require or disallow newline at the end of files.
    'eol-last': ['error', 'always'],

    // Require or disallow spacing between function identifiers and their invocations.
    'func-call-spacing': ['error', 'never'],

    // Require function names to match the name of the variable or property to which they are assigned.
    'func-name-matching': 'off',

    // Require or disallow named 'function' expressions.
    'func-names': 'warn',

    // Enforce the consistent use of either function declarations or expressions.
    'func-style': ['error', 'expression'],

    // Enforce line breaks between arguments of a function call.
    'function-call-argument-newline': ['error', 'consistent'],

    // Enforce consistent line breaks inside function parentheses.
    'function-paren-newline': ['error', 'consistent'],

    // Disallow specified identifiers.
    'id-blacklist': 'off',

    // Enforce minimum and maximum identifier lengths.
    'id-length': 'off',

    // Require identifiers to match a specified regular expression.
    'id-match': 'off',

    // Enforce the location of arrow function bodies.
    'implicit-arrow-linebreak': ['error', 'beside'],

    // Enforce consistent indentation.
    indent: ['error', INDENT_SIZE, {
      SwitchCase: 1,
      VariableDeclarator: 'first',
      outerIIFEBody: 1,
      MemberExpression: 1,
      FunctionDeclaration: {
        parameters: 'first',
        body: 1,
      },
      FunctionExpression: {
        parameters: 'first',
        body: 1,
      },
      CallExpression: {
        arguments: 'first',
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      ignoredNodes: [
        'JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName',
        'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement',
        'JSXClosingElement', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild',
      ],
      ignoreComments: false,
    }],

    // Enforce the consistent use of either double or single quotes in JSX attributes.
    'jsx-quotes': 'off',

    // Enforce consistent spacing between keys and values in object literal properties.
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],

    // Enforce consistent spacing before and after keywords.
    'keyword-spacing': ['error', {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true },
      },
    }],

    // Enforce position of line comments.
    'line-comment-position': ['warn', {
      position: 'above',
      ignorePattern: '',
      applyDefaultPatterns: true,
    }],

    // Enforce consistent linebreak style.
    'linebreak-style': ['error', 'unix'],

    // Require empty lines around comments.
    'lines-around-comment': 'off',

    // Require or disallow an empty line between class members.
    'lines-between-class-members': 'off',

    // Enforce a maximum depth that blocks can be nested.
    'max-depth': ['off', MAX_DEPTH],

    // Enforce a maximum line length.
    'max-len': ['error', {
      code: MAX_LENGTH,
      ignoreUrls: true,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],

    // Enforce a maximum number of lines per file.
    'max-lines': ['off', {
      max: MAX_LINES,
      skipBlankLines: true,
      skipComments: true,
    }],

    // Enforce a maximum number of line of code in a function.
    'max-lines-per-function': ['off', {
      max: MAX_LINES_PER_FUNCTION,
      skipBlankLines: true,
      skipComments: true,
      IIFEs: true,
    }],

    // Enforce a maximum depth that callbacks can be nested.
    'max-nested-callbacks': 'off',

    // Enforce a maximum number of parameters in function definitions.
    'max-params': 'off',

    // Enforce a maximum number of statements allowed in function blocks.
    'max-statements': 'off',

    // Enforce a maximum number of statements allowed per line.
    'max-statements-per-line': ['error', { max: MAX_STATEMENTS_PER_LINE }],

    // Enforce a particular style for multiline comments.
    'multiline-comment-style': 'off',

    // Enforce newlines between operands of ternary expressions.
    'multiline-ternary': 'off',

    // Require constructor names to begin with a capital letter.
    'new-cap': ['error', {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: true,
      capIsNewExceptions: [],
    }],

    // Enforce or disallow parentheses when invoking a constructor with no arguments.
    'new-parens': 'error',

    // Require a newline after each call in a method chain.
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

    // Disallow 'Array' constructors.
    'no-array-constructor': 'error',

    // Disallow bitwise operators.
    'no-bitwise': 'error',

    // Disallow 'continue' statements.
    'no-continue': 'error',

    // Disallow inline comments after code.
    'no-inline-comments': 'warn',

    // Disallow 'if' statements as the only statement in 'else' blocks.
    'no-lonely-if': 'error',

    // Disallow mixed binary operators.
    'no-mixed-operators': ['error', {
      groups: [
        ['%', '**'],
        ['%', '+'],
        ['%', '-'],
        ['%', '*'],
        ['%', '/'],
        ['/', '*'],
        ['&', '|', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!=='],
        ['&&', '||'],
      ],
      allowSamePrecedence: false,
    }],

    // Disallow mixed spaces and tabs for indentation.
    'no-mixed-spaces-and-tabs': 'error',

    // Disallow use of chained assignment expressions.
    'no-multi-assign': 'error',

    // Disallow multiple empty lines.
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 1 }],

    // Disallow negated conditions.
    'no-negated-condition': 'off',

    // Disallow nested ternary expressions.
    'no-nested-ternary': 'error',

    // Disallow 'Object' constructors.
    'no-new-object': 'error',

    // Disallow the unary operators '++' and '--'.
    'no-plusplus': 'error',

    // Disallow specified syntax.
    'no-restricted-syntax': 'off',

    // Disallow all tabs.
    'no-tabs': 'error',

    // Disallow ternary operators.
    'no-ternary': 'off',

    // Disallow trailing whitespace at the end of lines.
    'no-trailing-spaces': ['error', {
      skipBlankLines: false,
      ignoreComments: false,
    }],

    // Disallow dangling underscores in identifiers.
    'no-underscore-dangle': 'off',

    // Disallow ternary operators when simpler alternatives exist.
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // Disallow whitespace before properties.
    'no-whitespace-before-property': 'error',

    // Enforce the location of single-line statements.
    'nonblock-statement-body-position': ['error', 'beside', { overrides: {} }],

    // Enforce consistent line breaks inside braces.
    'object-curly-newline': ['error', {
      ObjectExpression: { multiline: true, consistent: true },
      ObjectPattern: { multiline: true, consistent: true },
      ImportDeclaration: { multiline: true, consistent: true },
      ExportDeclaration: { multiline: true, consistent: true },
    }],

    // Enforce consistent spacing inside braces.
    'object-curly-spacing': ['error', 'always'],

    // Enforce placing object properties on separate lines.
    'object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: true,
    }],

    // Enforce variables to be declared either together or separately in functions.
    'one-var': ['error', 'never'],

    // Require or disallow newlines around variable declarations.
    'one-var-declaration-per-line': ['error', 'always'],

    // Require or disallow assignment operator shorthand where possible.
    'operator-assignment': 'off',

    // Enforce consistent linebreak style for operators.
    'operator-linebreak': ['error', 'before', { overrides: {} }],

    // Require or disallow padding within blocks.
    'padded-blocks': ['error', {
      blocks: 'never',
      classes: 'never',
      switches: 'never',
    }, {
      allowSingleLineBlocks: true,
    }],

    // Require or disallow padding lines between statements.
    'padding-line-between-statements': ['error',
      { blankLine: 'always', prev: 'var', next: 'return' },
      { blankLine: 'always', prev: 'const', next: 'return' },
      { blankLine: 'always', prev: 'let', next: 'return' },
      { blankLine: 'always', prev: 'multiline-const', next: '*' },
      { blankLine: 'always', prev: 'multiline-let', next: '*' },
      { blankLine: 'always', prev: 'multiline-var', next: '*' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'always', prev: '*', next: 'if' },
      { blankLine: 'always', prev: '*', next: 'for' },
      { blankLine: 'always', prev: '*', next: 'switch' },
      { blankLine: 'always', prev: '*', next: 'while' },
      { blankLine: 'always', prev: '*', next: 'try' },
      { blankLine: 'always', prev: '*', next: 'function' }],

    // Disallow the use of 'Math.pow' in favor of the '**' operator.
    'prefer-exponentiation-operator': 'off',

    // Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.
    'prefer-object-spread': 'error',

    // Require quotes around object literal property names.
    'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],

    // Enforce the consistent use of either backticks, double, or single quotes.
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],

    // Require or disallow semicolons instead of ASI.
    semi: ['error', 'always'],

    // Enforce consistent spacing before and after semicolons.
    'semi-spacing': ['error', { before: false, after: true }],

    // Enforce location of semicolons.
    'semi-style': ['error', 'last'],

    // Require object keys to be sorted.
    'sort-keys': 'off',

    // Require variables within the same declaration block to be sorted.
    'sort-vars': 'off',

    // Enforce consistent spacing before blocks.
    'space-before-blocks': 'error',

    // Enforce consistent spacing before 'function' definition opening parenthesis.
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],

    // Enforce consistent spacing inside parentheses.
    'space-in-parens': ['error', 'never'],

    // Require spacing around infix operators.
    'space-infix-ops': 'error',

    // Enforce consistent spacing before or after unary operators.
    'space-unary-ops': ['error', {
      words: true,
      nonwords: false,
    }],

    // Enforce consistent spacing after the `//` or `/*` in a comment.
    'spaced-comment': ['error', 'always', {
      line: {
        exceptions: ['-', '+'],
      },
      block: {
        exceptions: ['-', '+'],
        balanced: true,
      },
    }],

    // Enforce spacing around colons of switch statements.
    'switch-colon-spacing': ['error', { after: true, before: false }],

    // Require or disallow spacing between template tags and their literals.
    'template-tag-spacing': ['error', 'never'],

    // Require or disallow Unicode byte order mark (BOM).
    'unicode-bom': ['error', 'never'],

    // Require parenthesis around regex literals.
    'wrap-regex': 'off',
  },
};
