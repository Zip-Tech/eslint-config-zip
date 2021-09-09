module.exports = {
  rules: {
    // Require constructor names to begin with a capital letter.
    'new-cap': ['error', {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: true,
      capIsNewExceptions: [
        'NgModule',
        'Component',
        'Injectable',
        'Directive',
        'Pipe',
        'Input',
        'Output',
        'HostBinding',
        'HostListener',
        'ContentChild',
        'ContentChildren',
        'ViewChildren',
        'ViewChild',
      ],
    }],

    // Disallow unnecessary constructors.
    'no-useless-constructor': 'off',

    // Disallow empty functions.
    'no-empty-function': ['error', { allow: ['arrowFunctions', 'functions', 'methods', 'constructors'] }],
  },
};
