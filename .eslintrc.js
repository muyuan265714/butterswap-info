module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential'],
  rules: {
    indent: ['off', 2],
    'quote-props': 0,
    'dot-notation': 0,
    'consistent-return': 0,
    'no-multiple-empty-lines': 0,
    'prefer-arrow-callback': 0,
    'wrap-iife': 0,
    'no-undef-init': 0,
    'no-new-wrappers': 0,
    'linebreak-style': 0,
    'max-len': [0, 160],
    'lines-between-class-members': 0,
    'prefer-const': 0,
    'no-plusplus': 0,
    'comma-dangle': 0,
    'func-names': 0,
    'space-before-function-paren': 0,
    'prefer-template': 0,
    'no-else-return': 0,
    'object-curly-newline': 0,
    'no-bitwise': 0,
    'max-classes-per-file': 0,
    'class-methods-use-this': 0,
    'no-useless-constructor': 0,
    'no-unused-expressions': 0,
    'no-param-reassign': 0,
    'no-empty-function': 0,
    'no-console': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 0,
    'no-underscore-dangle': 0,
    'arrow-body-style': 0,
    'consistent-return': 0,
    'one-var': 0,
    'one-var-declaration-per-line': 0,
    'prefer-promise-reject-errors': 0,
    eqeqeq: 0,
    camelcase: 0,
    'object-shorthand': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true
      }
    }
  ]
}
