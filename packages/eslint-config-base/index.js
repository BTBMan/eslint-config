const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  reportUnusedDisableDirectives: true,
  plugins: ['unicorn'],
  extends: ['eslint:recommended', 'airbnb-base'],
  rules: {
    // unicorn
    'unicorn/prefer-node-protocol': 'error',

    // no
    'no-console': ['warn', { allow: ['error'] }],
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-unused-vars': 'off',
    'no-var': 'warn',
    'no-restricted-syntax': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-shadow': 'off',
    'no-use-before-define': 'off',
    'no-underscore-dangle': 'off',
    'no-multi-assign': 'off',
    'no-undef': 'off',

    // import
    'import/no-dynamic-require': 'off',
    'import/no-import-module-exports': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',

    // best practice
    'default-case': 'off',
    'global-require': 'off',
    'prefer-const': 'error',
    'guard-for-in': 'off',
    'next-line': 'off',
    'class-methods-use-this': 'off',
  },
});
