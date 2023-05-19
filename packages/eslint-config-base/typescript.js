const { defineConfig } = require('eslint-define-config');

const tsconfig = process.env.ESLINT_TSCONFIG || 'tsconfig.eslint.json';

module.exports = defineConfig({
  extends: ['plugin:@typescript-eslint/recommended'],
  overrides: [
    {
      parserOptions: {
        tsconfigRootDir: process.cwd(),
        project: [tsconfig],
      },
      parser: '@typescript-eslint/parser',
      files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
      rules: {},
    },
  ],
  rules: {
    'typescript-eslint/ban-types': 'off',
    '@typescript-eslint/semi': 'error',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
  },
});