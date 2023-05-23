const { defineConfig } = require('eslint-define-config');
const { isPackageExists } = require('local-pkg');

const PRETTIER = isPackageExists('prettier');

module.exports = defineConfig({
  extends: [
    'plugin:svelte/recommended',
    '@btbman/eslint-config-base',
    ...(PRETTIER ? ['plugin:svelte/prettier'] : []),
  ],
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: {
          js: 'espree',
          jsx: 'espree',
          ts: '@typescript-eslint/parser',
          tsx: '@typescript-eslint/parser',
        },
        extraFileExtensions: ['.svelte'],
      },
    },
  ],
  rules: {},
});
