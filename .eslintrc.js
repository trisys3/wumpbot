'use strict';

exports.parser = 'babel-eslint';

exports.parserOptions = {
  ecmaVersion: 8,
  sourceType: 'module',
  ecmaFeatures: {
    jsx: true,
    experimentalObjectRestSpread: true,
  },
};

exports.env = {
  node: true,
  'shared-node-browser': true,
  es6: true,
};

exports.plugins = [
  'babel',
  'import',
  'react',
];

exports.rules = {
  // possible errors
  'for-direction': 2,
  'getter-return': [1, {allowImplicit: true}],
  'no-constant-condition': 2,
  'no-control-regex': 2,
  'no-dupe-args': 2,
  'no-dupe-keys': 2,
  'no-duplicate-case': 2,
  'no-empty': [1, {allowEmptyCatch: true}],
  'no-empty-character-class': 2,
  'no-extra-boolean-cast': 2,
  'no-extra-parens': 1,
  'no-extra-semi': 2,
  'no-invalid-regexp': 2,
  'no-irregular-whitespace': [
    2,
    {
      skipComments: true,
      skipRegExps: true,
      skipTemplates: true,
    },
  ],
  'no-obj-calls': 2,
  'no-regex-spaces': 1,
  'no-sparse-arrays': 2,
  'no-unreachable': 2,
  'no-unsafe-negation': 2,
  'use-isnan': 2,
  'valid-typeof': 2,

  // best practices
  'class-methods-use-this': 1,
  curly: 2,
  'dot-location': [1, 'property'],
  'dot-notation': 1,
  eqeqeq: [2, 'smart'],
  'no-case-declarations': 2,
  'no-else-return': 1,
  'no-empty-function': 1,
  'no-empty-pattern': 1,
  'no-extra-bind': 2,
  'no-extra-label': 2,
  'no-fallthrough': 1,
  'no-global-assign': 2,
  'no-implied-eval': 2,
  'babel/no-invalid-this': 1,
  'no-lone-blocks': 1,
  'no-loop-func': 1,
  'no-multi-spaces': 1,
  'no-new': 1,
  'no-new-func': 2,
  'no-new-wrappers': 2,
  'no-octal-escape': 1,
  'no-return-await': 2,
  'no-self-assign': [2, {props: true}],
  'no-self-compare': 2,
  'no-sequences': 2,
  'no-throw-literal': 2,
  'no-unmodified-loop-condition': 1,
  'no-unused-expressions': 2,
  'no-unused-labels': 2,
  'no-useless-call': 1,
  'no-useless-concat': 1,
  'no-useless-escape': 1,
  'no-useless-return': 1,
  'prefer-promise-reject-errors': 2,
  radix: [2, 'as-needed'],
  'require-await': 1,
  'wrap-iife': 1,
  yoda: 2,

  // variables
  'no-shadow-restricted-names': 2,
  'no-undef': 1,
  'no-unused-vars': [1, {ignoreRestSiblings: true}],

  // NodeJS
  'callback-return': 1,
  'handle-callback-err': 1,
  'no-process-exit': 2,
  'no-sync': 2,

  // style
  'array-bracket-spacing': 2,
  'array-element-newline': [2, {multiline: true, minItems: 3}],
  'block-spacing': [2, 'never'],
  'brace-style': [
    2,
    '1tbs',
    {allowSingleLine: true},
  ],
  'comma-dangle': [
    1,
    {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    },
  ],
  'comma-spacing': 1,
  'comma-style': 1,
  'computed-property-spacing': 2,
  'eol-last': 1,
  'func-call-spacing': 1,
  'func-names': 1,
  'linebreak-style': 1,
  'key-spacing': 1,
  'keyword-spacing': [
    1,
    {
      after: false,
      overrides: {
        from: {after: true},
        export: {after: true},
        import: {after: true},
        try: {after: true},
        finally: {after: true},
        case: {after: true},
        return: {after: true},
        const: {after: true},
        let: {after: true},
        else: {after: true},
        class: {after: true},
      },
    },
  ],
  'max-statements-per-line': 2,
  'new-cap': 1,
  'new-parens': 1,
  'newline-per-chained-call': 1,
  'no-array-constructor': 2,
  'no-lonely-if': 1,
  'no-multiple-empty-lines': [1, {max: 1, maxEOF: 0, maxBOF: 0}],
  'no-new-object': 2,
  'no-tabs': 2,
  'no-unneeded-ternary': [1, {defaultAssignment: false}],
  'no-whitespace-before-property': 1,
  'object-curly-newline': 1,
  // 'babel/object-curly-spacing': 1,
  'one-var': [2, 'never'],
  'operator-assignment': 2,
  'operator-linebreak': 1,
  'padded-blocks': [1, 'never'],
  'quote-props': [1, 'as-needed'],
  quotes: [
    1,
    'single',
    {avoidEscape: true},
  ],
  // 'require-jsdoc': 1,
  'babel/semi': [
    1,
    'always',
    {omitLastInOneLineBlock: true},
  ],
  'space-before-blocks': 1,
  'space-before-function-paren': [
    1,
    {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    },
  ],
  'space-in-parens': 1,
  'space-infix-ops': 1,
  'space-unary-ops': 1,
  'spaced-comment': 1,
  'switch-colon-spacing': 1,
  'template-tag-spacing': 1,
  'unicode-bom': 2,

  // import/export
  'import/no-unresolved': 1,
  'import/named': 1,
  'import/default': 1,
  'import/namespace': 1,
  'import/no-absolute-path': 2,

  // import/export warnings
  'import/export': 2,
  'import/no-deprecated': 1,
  'import/no-extraneous-dependencies': 1,

  // import/export style
  'import/no-duplicates': 1,

  // react
  'react/no-direct-mutation-state': 2,
  'react/no-unescaped-entities': 1,
  'react/prefer-stateless-function': 1,
  'react/prefer-es6-class': 1,
  'react/react-in-jsx-scope': 2,
  'react/require-render-return': 2,
  'react/self-closing-comp': 1,
  'react/style-prop-object': 2,
  'react/void-dom-elements-no-children': 1,

  // jsx
  'react/jsx-boolean-value': 1,
  'react/jsx-curly-spacing': [1, {children: true, allowMultiline: false}],
  'react/jsx-equals-spacing': 1,
  'react/jsx-no-comment-textnodes': 2,
  'react/jsx-no-duplicate-props': 1,
  'react/jsx-no-literals': 1,
  'react/jsx-no-undef': 2,
  'react/jsx-pascal-case': 1,
  'react/jsx-tag-spacing': 1,
  'react/jsx-uses-react': 2,
  'react/jsx-uses-vars': 2,

  // ES6
  'arrow-body-style': 1,
  'arrow-parens': [1, 'as-needed'],
  'arrow-spacing': 1,
  'constructor-super': 2,
  'generator-star-spacing': 1,
  'no-const-assign': 1,
  'no-dupe-class-members': 1,
  'no-duplicate-imports': [1, {includeExports: true}],
  'no-new-symbol': 1,
  'no-this-before-super': 2,
  'no-useless-computed-key': 1,
  'no-useless-constructor': 1,
  'no-useless-rename': 1,
  'no-var': 2,
  'object-shorthand': [
    1,
    'always',
    {avoidQuotes: true},
  ],
  'prefer-arrow-callback': 1,
  'prefer-const': 1,
  'prefer-destructuring': 1,
  'prefer-numeric-literals': 1,
  'prefer-rest-params': 1,
  'prefer-spread': 1,
  'prefer-template': 1,
  'require-yield': 1,
  'rest-spread-spacing': 1,
  'symbol-description': 1,
  'template-curly-spacing': 1,
  'yield-star-spacing': 1,
};

exports.overrides = [
  {
    files: '**.test.js',
    env: {jest: true},
  },
];
